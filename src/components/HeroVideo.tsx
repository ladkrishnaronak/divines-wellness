"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize, Minimize, Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";

// Hero video player.
// - Shows the poster image first, then starts by itself after 2 seconds
//   (muted, because browsers block autoplay with sound). A "Tap for sound"
//   button turns sound on. Tapping Play yourself starts it with sound.
// - Bottom bar: play/pause, time, a timeline you can drag to any second,
//   sound and full screen. At the end a Replay button appears.
// - Does not autoplay for people who ask their device to reduce motion.

const AUTOPLAY_DELAY = 2000;

function fmt(s: number) {
  if (!Number.isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

type Phase = "poster" | "playing" | "paused" | "ended";

export default function HeroVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userActed = useRef(false);
  const hideTimer = useRef<number | undefined>(undefined);

  const [phase, setPhase] = useState<Phase>("poster");
  const [muted, setMuted] = useState(true);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [scrubbing, setScrubbing] = useState(false);
  const [controlsOn, setControlsOn] = useState(true);
  const [isFull, setIsFull] = useState(false);

  const play = useCallback(async (withSound: boolean) => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !withSound;
    setMuted(!withSound);
    try {
      await v.play();
    } catch {
      // Sound was blocked: try again silently so the video still plays.
      v.muted = true;
      setMuted(true);
      try {
        await v.play();
      } catch {
        /* stay on the poster */
      }
    }
  }, []);

  // Autoplay 2 seconds after the player is on screen.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        window.clearTimeout(timer);
        if (entry.isIntersecting && !userActed.current) {
          timer = window.setTimeout(() => {
            if (!userActed.current) play(false);
          }, AUTOPLAY_DELAY);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [play]);

  // Keep the controls visible while paused; fade them out while playing.
  const pokeControls = useCallback(() => {
    setControlsOn(true);
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setControlsOn(false);
    }, 2800);
  }, []);
  useEffect(() => () => window.clearTimeout(hideTimer.current), []);

  // The video may load its length before this code runs; read it on start-up.
  useEffect(() => {
    const v = videoRef.current;
    if (v && v.readyState >= 1 && Number.isFinite(v.duration)) setDuration(v.duration);
  }, []);

  useEffect(() => {
    const onFs = () => setIsFull(document.fullscreenElement === wrapRef.current);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  function togglePlay() {
    userActed.current = true;
    const v = videoRef.current;
    if (!v) return;
    if (phase === "ended") {
      v.currentTime = 0;
      play(!muted);
    } else if (v.paused) {
      // First tap by the person: play with sound.
      play(phase === "poster" ? true : !muted);
    } else {
      v.pause();
    }
    pokeControls();
  }

  function toggleMute() {
    userActed.current = true;
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    pokeControls();
  }

  function seek(to: number) {
    const v = videoRef.current;
    if (!v || !Number.isFinite(to)) return;
    v.currentTime = Math.min(Math.max(to, 0), duration || v.duration || 0);
    setTime(v.currentTime);
    if (phase === "ended" && to < (duration || 0) - 0.2) setPhase("paused");
  }

  function replay() {
    userActed.current = true;
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    play(!muted);
  }

  async function toggleFull() {
    const el = wrapRef.current as (HTMLDivElement & { webkitRequestFullscreen?: () => void }) | null;
    const v = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!el || !v) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else if (el.requestFullscreen) {
      await el.requestFullscreen();
    } else if (v.webkitEnterFullscreen) {
      v.webkitEnterFullscreen(); // iPhone
    }
  }

  function onKey(e: React.KeyboardEvent) {
    if (e.target !== wrapRef.current) return;
    const k = e.key.toLowerCase();
    if (k === " " || k === "k") { e.preventDefault(); togglePlay(); }
    else if (k === "arrowright") { e.preventDefault(); seek(time + 5); pokeControls(); }
    else if (k === "arrowleft") { e.preventDefault(); seek(time - 5); pokeControls(); }
    else if (k === "m") { toggleMute(); }
    else if (k === "f") { toggleFull(); }
  }

  const pct = duration ? (time / duration) * 100 : 0;
  const started = phase !== "poster";
  const showBar = started && phase !== "ended" && (controlsOn || phase === "paused" || scrubbing);

  return (
    <div
      ref={wrapRef}
      tabIndex={0}
      role="region"
      aria-label={`${title} video player. Space to play or pause, arrow keys to skip 5 seconds.`}
      onKeyDown={onKey}
      onMouseMove={started ? pokeControls : undefined}
      className={`group relative aspect-video w-full overflow-hidden rounded-[16px] bg-[#1a140f] shadow-[0_12px_32px_rgba(38,32,22,0.18)] outline-none focus-visible:ring-4 focus-visible:ring-[#d9a765] ${
 isFull ? "rounded-none" : ""
 }`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        muted
        preload="metadata"
        onClick={togglePlay}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          if (!scrubbing) setTime(v.currentTime);
          if (!duration && Number.isFinite(v.duration)) setDuration(v.duration);
        }}
        onPlay={() => { setPhase("playing"); pokeControls(); }}
        onPause={(e) => { if (!e.currentTarget.ended) setPhase("paused"); setControlsOn(true); }}
        onEnded={() => { setPhase("ended"); setControlsOn(true); setTime(duration); }}
        className="size-full cursor-pointer object-cover"
        aria-label={title}
      />

      {/* Poster state: big play button */}
      {phase === "poster" && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-[rgba(61,51,38,0.82)] shadow-lg ring-4 ring-white/30 transition-transform group-hover:scale-105">
            <Play size={28} fill="white" className="ml-1 text-white" aria-hidden="true" />
          </span>
        </button>
      )}

      {/* Sound nudge while autoplaying silently */}
      {phase === "playing" && muted && (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute right-3 top-3 flex min-h-11 items-center gap-2 rounded-full bg-[rgba(26,20,15,0.72)] px-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-[rgba(26,20,15,0.88)]"
        >
          <VolumeX size={18} aria-hidden="true" /> Tap for sound
        </button>
      )}

      {/* End state: replay */}
      {phase === "ended" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[rgba(26,20,15,0.55)]">
          <button
            type="button"
            onClick={replay}
            className="flex min-h-12 items-center gap-2.5 rounded-full bg-[#fffcf7] px-6 text-base font-bold text-[#1a140f] shadow-lg transition-transform hover:scale-105"
          >
            <RotateCcw size={20} aria-hidden="true" /> Replay
          </button>
        </div>
      )}

      {/* Control bar */}
      {started && (
        <div
          className={`absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-3 pb-2 pt-8 text-white transition-opacity duration-300 ${
 showBar || phase === "ended" ? "opacity-100" : "pointer-events-none opacity-0"
 }`}
          onFocus={() => setControlsOn(true)}
        >
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={Math.min(time, duration || 0)}
            onPointerDown={() => setScrubbing(true)}
            onPointerUp={() => setScrubbing(false)}
            onChange={(e) => seek(Number(e.target.value))}
            onKeyUp={() => setScrubbing(false)}
            aria-label="Video timeline"
            aria-valuetext={`${fmt(time)} of ${fmt(duration)}`}
            className="video-seek h-6 w-full cursor-pointer"
            style={{ "--pct": `${pct}%` } as React.CSSProperties}
          />
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={phase === "ended" ? replay : togglePlay}
              aria-label={phase === "playing" ? "Pause" : phase === "ended" ? "Replay" : "Play"}
              className="flex size-11 items-center justify-center rounded-full hover:bg-white/15"
            >
              {phase === "playing" ? (
                <Pause size={20} fill="white" aria-hidden="true" />
              ) : phase === "ended" ? (
                <RotateCcw size={20} aria-hidden="true" />
              ) : (
                <Play size={20} fill="white" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Turn sound on" : "Mute"}
              className="flex size-11 items-center justify-center rounded-full hover:bg-white/15"
            >
              {muted ? <VolumeX size={20} aria-hidden="true" /> : <Volume2 size={20} aria-hidden="true" />}
            </button>
            <span className="ml-1 text-xs font-medium tabular-nums" aria-hidden="true">
              {fmt(time)} / {fmt(duration)}
            </span>
            <button
              type="button"
              onClick={toggleFull}
              aria-label={isFull ? "Exit full screen" : "Full screen"}
              className="ml-auto flex size-11 items-center justify-center rounded-full hover:bg-white/15"
            >
              {isFull ? <Minimize size={20} aria-hidden="true" /> : <Maximize size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
