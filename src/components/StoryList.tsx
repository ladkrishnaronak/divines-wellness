"use client";

import { useRef, useState } from "react";

// Content from Figma "Story Carousel" component set (node 781:831):
// Slide=1 (777:552), Slide=2 (777:572), Slide=3 (777:592).
const stories = [
  {
    author: "Ashish Kedia",
    location: "Surat",
    image: "story-1.png",
    title: "Deepened wisdom, fresh yogic clarity",
    quote:
      "I chose to pursue the 200-Hour Yoga Teacher Training Course at The Divines Health for the second time to deepen my yogic knowledge. The program, enriched with upgraded wisdom and modern learning tools, offered me fresh insights and clarity.",
    tags: ["Yogic Knowledge", "Deeper Practice"],
  },
  {
    author: "Hetvi Patel",
    location: "Florida",
    image: "story-2.png",
    title: "Transformative teacher training journey",
    quote:
      "The 200-Hour YTTC at The Divines Health with Dr. Neha Solanki was a truly transformative experience. The well-structured blend of philosophy, practice, and anatomy deepened my practice and built my confidence as a teacher.",
    tags: ["Teacher Training", "Confidence Built"],
  },
  {
    author: "Parul V. Bajaj",
    location: "Surat",
    image: "story-3.png",
    title: "Empowering path to authentic teaching",
    quote:
      "The 200-hour Yoga Teacher Training with Dr. Neha Solanki was truly transformative. Her clear guidance, profound knowledge, and compassionate teaching made the journey inspiring and empowering.",
    tags: ["Certified Teacher", "Yoga Alliance"],
  },
];

export default function StoryList() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Highlight the dot for whichever slide is closest to centre while scrolling.
  function handleScroll() {
    const el = trackRef.current;
    if (!el || el.clientWidth === 0) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActive(Math.min(Math.max(index, 0), stories.length - 1));
  }

  function goTo(index: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="flex w-full flex-col items-center gap-3 pb-14">
      {/* Horizontal scroll track: one story per screen, snaps to each card */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        aria-roledescription="carousel"
        aria-label="Student stories"
        className="flex w-full snap-x snap-mandatory items-start overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {stories.map((story, idx) => (
          <div
            key={story.author}
            className="w-full shrink-0 snap-center px-5"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${stories.length}`}
          >
            <article className="mx-auto flex w-full max-w-[350px] flex-col gap-4 overflow-hidden rounded-[24px] border border-[#eae2cf] bg-white p-5 shadow-[0px_8px_24px_0px_rgba(61,50,38,0.06)] md:max-w-md">
              <div className="h-[200px] w-full shrink-0 overflow-hidden rounded-[16px] bg-[#f2ede3]">
                <img
                  src={`/images/${story.image}`}
                  alt={`${story.author}, ${story.location}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="size-full object-cover"
                />
              </div>

              {/* 12px spacer from Figma "overlap-spacing-adjustment" */}
              <div className="h-3 w-full shrink-0" aria-hidden="true" />

              <div className="flex w-full items-center justify-between gap-3 whitespace-nowrap">
                <p className="text-sm font-semibold leading-[1.4] tracking-[0.2px] text-[#3d3326]">
                  {story.author} · {story.location}
                </p>
                <p
                  className="text-xs font-medium leading-4 tracking-[0.4px] text-[#b89959]"
                  aria-label="Rated 5 out of 5"
                >
                  ★★★★★
                </p>
              </div>

              <h2 className="text-[22px] font-normal leading-7 text-[#3d3326]">{story.title}</h2>

              <p className="text-sm font-normal leading-5 tracking-[0.25px] text-[#4a3d2e]">
                &ldquo;{story.quote}&rdquo;
              </p>

              <div className="flex flex-wrap items-start gap-2">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap rounded-full bg-[#f2ede3] px-3 py-1.5 text-[11px] font-normal leading-4 tracking-[0.5px] text-[#4a3d2e]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Pagination dots: active dot is larger and gold, updates as you scroll */}
      <div className="flex h-2 items-center gap-2" role="tablist" aria-label="Choose a story">
        {stories.map((story, idx) => (
          <button
            key={story.author}
            type="button"
            role="tab"
            aria-selected={idx === active}
            aria-label={`Show story ${idx + 1} of ${stories.length}`}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === active ? "size-2 bg-[#b89959]" : "size-[5px] bg-[#d9ccb2] hover:bg-[#c4ad83]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
