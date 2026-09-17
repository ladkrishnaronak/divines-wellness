"use client";

import { useRef, useState } from "react";
import { Star } from "lucide-react";

// NOTE ON SOURCING: The Figma file ("Divines Wellness - Stories Page (Mobile)",
// node 119:5) defines exactly ONE real testimonial via its "story-carousel" /
// "Blog Card" component (node 171:188, instance 781:839) — a single-slide
// carousel with a dot-pagination indicator below it. That card's content —
// author name, location, star rating, title, quote and tags — is transcribed
// verbatim. There is no second or third story anywhere in the Figma file;
// earlier placeholder testimonials with invented dates were removed because
// they were not actually sourced from Figma. Add more real testimonials here
// (in the same shape) once the Divines Wellness team supplies them — the
// carousel below is built to swipe/page through however many are in the array.
const stories = [
  {
    author: "Ashish Kedia",
    location: "Surat",
    rating: 5,
    title: "Deepened wisdom, fresh yogic clarity",
    // TODO: story photo not yet available — the Figma asset export could not
    // be fetched from this environment. Add the real photo to
    // public/images/story-ashish-kedia.png (matches the Figma "story-image"
    // fill: a man in white seated in meditation pose).
    image: "story-ashish-kedia.png",
    quote:
      "I chose to pursue the 200-Hour Yoga Teacher Training Course at The Divines Health for the second time to deepen my yogic knowledge. The program, enriched with upgraded wisdom and modern learning tools, offered me fresh insights and clarity.",
    tags: ["Yogic Knowledge", "Deeper Practice"],
  },
];

export default function StoryList() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

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
    setActive(index);
  }

  return (
    <div className="flex w-full flex-col items-center gap-3 pb-14">
      {/* Slide track — one card fills the viewport at a time, swipe/scroll to page */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex w-full snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {stories.map((story) => (
          <div key={story.author} className="w-full shrink-0 snap-center px-5">
            <article className="mx-auto flex w-full max-w-md flex-col gap-4 overflow-hidden rounded-[24px] border border-[#eae2cf] bg-white p-5 shadow-[0px_8px_24px_0px_rgba(61,50,38,0.06)] md:max-w-lg">
              {/* Story photo */}
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[16px] bg-[#f2ede3]">
                <img
                  src={`/images/${story.image}`}
                  alt=""
                  className="size-full object-cover"
                />
              </div>

              {/* Author + location, star rating */}
              <div className="flex w-full items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[#3d3326]">
                  {story.author} · {story.location}
                </p>
                <div
                  className="flex shrink-0 items-center gap-0.5 text-[#b89959]"
                  aria-label={`Rated ${story.rating} out of 5`}
                >
                  {Array.from({ length: story.rating }).map((_, starIdx) => (
                    <Star key={starIdx} size={12} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  ))}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-[22px] font-bold leading-[1.3] text-[#3d3326]">
                {story.title}
              </h2>

              {/* Quote */}
              <p className="text-sm italic leading-[1.6] text-[#4a3d2e]">
                &ldquo;{story.quote}&rdquo;
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-start gap-2">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f2ede3] px-3 py-1.5 text-[11px] font-medium text-[#4a3d2e]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Pagination dots — matches Figma's "dots" indicator: a wider gold dot
          marks the active slide, click/tap a dot to jump to that story. */}
      <div className="flex items-center gap-1.5" role="tablist" aria-label="Stories">
        {stories.map((story, idx) => (
          <button
            key={story.author}
            type="button"
            role="tab"
            aria-selected={idx === active}
            aria-label={`Go to story ${idx + 1} of ${stories.length}`}
            onClick={() => goTo(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === active ? "w-4 bg-[#b89959]" : "w-2 bg-[#e8dcc8] hover:bg-[#d9c9a3]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
