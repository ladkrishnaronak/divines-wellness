"use client";

import { useState } from "react";

const pillars = [
  {
    num: "01",
    title: "Foundation",
    tagline: "Identify triggers",
    cardLine: "Identify triggers", // Figma Pillar Card (927:658) second line
    color: "#7a6a55",
    focus: "Comprehensive assessment & root-cause analysis",
    actions: [
      "Complete comprehensive health assessment",
      "Identify lifestyle & dietary triggers",
      "Baseline lab review & symptom mapping",
    ],
    outcomes: [
      "Clear understanding of root causes",
      "Personalized healing roadmap",
      "Awareness of key triggers",
    ],
    tags: "Assess • Diagnose • Personalize",
    file: "pillar-foundation.png",
  },
  {
    num: "02",
    title: "Vitality",
    tagline: "Heal your gut, feed your cells",
    cardLine: "Restore gut & energy", // Figma Pillar Card (927:658) second line
    color: "#8b6f47",
    focus: "Restore gut health & cellular energy",
    actions: [
      "Gut-healing, anti-inflammatory nutrition protocol",
      "Micronutrient & metabolic optimization",
      "Structured yoga, pranayama & sleep correction",
    ],
    outcomes: [
      "Improved digestion & sustained energy",
      "Better weight regulation",
      "Enhanced overall vitality",
    ],
    tags: "Heal • Nourish • Energize",
    file: "pillar-vitality.png",
  },
  {
    num: "03",
    title: "Balance",
    tagline: "Align mind, body & hormones",
    cardLine: "Regulate stress & hormones", // Figma Pillar Card (927:658) second line
    color: "#6b5a47",
    focus: "Regulate stress & hormonal rhythm",
    actions: [
      "Stress assessment with mind coaching",
      "Meditation & nervous system regulation",
      "Hormone-supportive lifestyle practices",
    ],
    outcomes: [
      "Reduced anxiety, better sleep",
      "Stable mood & emotional resilience",
      "Improved hormonal balance",
    ],
    tags: "Regulate • Calm • Stabilize",
    file: "pillar-balance.png",
  },
  {
    num: "04",
    title: "Liberation",
    tagline: "Clear boundaries, sustain results",
    cardLine: "Sustain long-term", // Figma Pillar Card (927:658) second line
    color: "#a0845a",
    focus: "Sustain long-term stability",
    actions: [
      "Correct hidden lifestyle barriers",
      "Detox-support & anti-inflammatory strategies",
      "Long-term nutrition & relapse-prevention plan",
    ],
    outcomes: [
      "Sustainable thyroid & hormonal balance",
      "Long-term energy & weight stability",
      "Confidence in self-managing your health",
    ],
    tags: "Sustain • Protect • Empower",
    file: "pillar-liberation.png",
  },
];

export default function ProgramJourney() {
  const [selectedPillar, setSelectedPillar] = useState<typeof pillars[0] | null>(null);

  const closeModal = (p: typeof pillars[0] | null) => {
    setSelectedPillar(p);
    if (!p) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <section id="journey" className="w-full bg-[#fffcf7] py-11 md:py-14 lg:py-20">
      <div className="container-site flex flex-col items-center gap-7 lg:gap-10">
      <div className="flex w-full flex-col items-center gap-2.5">
        <div className="bg-[#f0e8d6] px-3.5 py-1.5 rounded-[20px]">
          <p className="text-xs font-medium text-[#4a3d2e] uppercase tracking-[0.5px]">
            The Journey
          </p>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-[#3d3326] sm:text-4xl">
          3 Months - 4D Structured<br className="lg:hidden" /> Healing Journey
        </h2>
        <p className="max-w-md text-center text-sm italic text-[#5f5244] md:max-w-xl md:text-base">
          Personalized Guidance – Plans tailored to your unique needs &amp; health goals
        </p>
      </div>

      {/* 2x2 on phones and tablets, one row of 4 on desktop (4 pillars read as one journey) */}
      <div className="grid w-full max-w-2xl grid-cols-2 gap-3.5 sm:gap-6 lg:max-w-none lg:grid-cols-4 lg:gap-6">
        {pillars.map((pillar) => (
          <button
            key={pillar.num}
            onClick={() => closeModal(pillar)}
            className="group flex flex-col overflow-hidden rounded-[14px] bg-white text-left shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
          >
            {/* Photo + badge — Figma Pillar Card (927:658) */}
            <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden">
              <img
                src={`/images/${pillar.file}`}
                alt={pillar.title}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-2.5 left-2.5 rounded-[6px] bg-[#2d4a3e] px-2 py-1 text-xs font-semibold leading-[1.4] tracking-[1.5px] text-white">
                Pillar {pillar.num}
              </span>
            </div>
            <div className="flex w-full flex-1 flex-col items-start gap-1 px-3 pb-3.5 pt-3 text-[#2e261c] md:px-4 md:pb-5 md:pt-4">
              <h3 className="text-lg font-bold leading-6 tracking-[0.15px] md:text-xl">{pillar.title}</h3>
              <p className="text-xs font-medium leading-4 tracking-[0.5px] md:text-sm md:leading-5">{pillar.cardLine}</p>
              <p className="text-xs font-medium leading-4 tracking-[0.5px] text-[#5f5244] md:text-sm md:leading-5">{pillar.tags}</p>
              <span className="mt-auto pt-2 text-xs font-semibold text-[#8b4e0a] md:text-sm">View details →</span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal — centered card matching Figma's pillar detail reference,
          not a bottom sheet: margin on all sides, fully rounded, visible
          backdrop, and a clearly visible close button. */}
      {selectedPillar && (
        <div
          onClick={() => closeModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Pillar ${selectedPillar.num}: ${selectedPillar.title}`}
            className="max-h-[85vh] w-full max-w-sm overflow-hidden overflow-y-auto rounded-2xl bg-[#faf3e0] shadow-2xl md:max-w-lg"
          >
            {/* Photo Hero — badge, close, title & tagline all overlay the image */}
            <div className="relative h-44 w-full shrink-0 md:h-60">
              <img
                src={`/images/${selectedPillar.file}`}
                alt={selectedPillar.title}
                className="size-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 40%, ${selectedPillar.color}e6)`,
                }}
              />
              {/* Pillar badge */}
              <span className="absolute left-3 top-3 rounded-full bg-[#f5edd9] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#3d3326]">
                Pillar {selectedPillar.num}
              </span>
              {/* Close Button */}
              <button
                onClick={() => closeModal(null)}
                aria-label="Close"
                className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-white text-[#3d3326] shadow-md transition-colors hover:bg-white/90"
              >
                ✕
              </button>
              {/* Title + tagline, bottom of image */}
              <div className="absolute bottom-3 left-4 right-4">
                <h2 className="text-xl font-bold text-white">{selectedPillar.title}</h2>
                <p className="text-sm italic text-white/85">{selectedPillar.tagline}</p>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-5 px-4.5 py-5 pb-8">
              {/* Focus */}
              <div
                className="rounded-xl p-3.5"
                style={{
                  background: `${selectedPillar.color}18`,
                  border: `1.5px solid ${selectedPillar.color}30`,
                }}
              >
                <div
                  className="text-[10px] font-bold uppercase tracking-widest mb-1"
                  style={{ color: selectedPillar.color }}
                >
                  Core Focus Area
                </div>
                <p className="text-sm leading-relaxed text-[#3a2010]">{selectedPillar.focus}</p>
              </div>

              {/* Actions */}
              <div>
                <div className="text-sm font-bold mb-3 text-[#3d3326]">
                  Action Steps
                </div>
                <div className="space-y-0">
                  {selectedPillar.actions.map((action, i) => (
                    <div
                      key={i}
                      className="flex gap-2.5 items-start py-2.5"
                      style={{
                        borderBottom:
                          i < selectedPillar.actions.length - 1 ? "1px solid rgba(139,78,10,0.1)" : "none",
                      }}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-bold border-[1.5px]"
                        style={{
                          borderColor: "#c9a86a",
                          color: "#8b4e0a",
                        }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-[#3a2010]">{action}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <div className="text-sm font-bold mb-3 text-[#2d6a4f]">
                  Expected Outcomes
                </div>
                <div className="space-y-0">
                  {selectedPillar.outcomes.map((outcome, i) => (
                    <div
                      key={i}
                      className="flex gap-2.5 items-start py-2.5"
                      style={{
                        borderBottom:
                          i < selectedPillar.outcomes.length - 1 ? "1px solid rgba(139,78,10,0.1)" : "none",
                      }}
                    >
                      <span className="text-[#2d6a4f] flex-shrink-0 text-sm leading-relaxed">✓</span>
                      <p className="text-sm leading-relaxed text-[#3a2010]">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
