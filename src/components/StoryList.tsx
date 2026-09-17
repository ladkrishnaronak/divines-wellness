"use client";

import { Star } from "lucide-react";

// NOTE ON SOURCING: The Figma file ("Divines Wellness - Stories Page (Mobile)",
// node 119:5) defines exactly ONE real testimonial via its "story-carousel" /
// "Blog Card" component (node 171:188, instance 781:839). That single card —
// author name, location, star rating, title, quote and tags below — is
// transcribed verbatim. There is no second or third story anywhere in the
// Figma file; earlier placeholder testimonials with invented dates were
// removed because they were not actually sourced from Figma. Add more real
// testimonials here (in the same shape) once the Divines Wellness team
// supplies them.
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
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 px-5 pb-14 md:max-w-4xl md:px-8">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3 lg:gap-6">
        {stories.map((story) => (
          <article
            key={story.author}
            className="flex w-full flex-col gap-4 overflow-hidden rounded-[24px] border border-[#eae2cf] bg-white p-5 shadow-[0px_8px_24px_0px_rgba(61,50,38,0.06)]"
          >
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
        ))}
      </div>

      {/* Pagination dots — matches Figma's carousel indicator; shown only
          once there is more than one story to page through. */}
      {stories.length > 1 && (
        <div className="flex items-center gap-1.5 md:hidden" aria-hidden="true">
          {stories.map((story, idx) => (
            <span
              key={story.author}
              className={`h-2 rounded-full transition-all ${
                idx === 0 ? "w-4 bg-[#b89959]" : "w-2 bg-[#e8dcc8]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
