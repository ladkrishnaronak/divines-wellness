"use client";

import { useState } from "react";
import { Play, Star } from "lucide-react";

// NOTE: All story text below — date, title and body — is taken verbatim from
// the Figma "Divines Wellness - Stories Page (Mobile)" frame (node 119:5).
// These are real participant testimonials: do not edit or paraphrase them
// without confirmation from the Divines Wellness team.
const stories = [
  {
    date: "14 OCT 2024",
    rating: 5,
    title: "Authentic yoga, life-changing insights",
    image: "story-authentic-yoga.png",
    body: "At a young age, I was searching for authentic yoga training without any dilution or mix of other practices, and I found exactly that at The Divines Health. Learning under Dr. Neha Solanki gave me the true essence of yoga, integrated with clear medical insights. This unique combination made my training both meaningful and deeply enriching.",
  },
  {
    date: "02 NOV 2024",
    rating: 5,
    title: "Deepening wisdom & modern tools",
    image: "story-deepening-wisdom.png",
    body: "I chose to pursue the 200-Hour Yoga Teacher Training Course at The Divines Health for the second time to deepen my yogic knowledge. The program, enriched with upgraded wisdom and modern learning tools, offered me fresh insights and clarity. This experience has strengthened my practice and expanded my understanding on a much deeper level.",
  },
  {
    date: "18 DEC 2024",
    rating: 5,
    title: "A truly transformative experience",
    image: "story-transformative-experience.png",
    body: "Grateful for Dr. Neha Solanki's online yoga sessions at The Divines Health. Joining from Zambia, South Africa, I've experienced improved physical and mental well-being. Her clear, therapeutic guidance and structured classes have boosted my flexibility, energy, and stress management. A truly transformative wellness journey from the comfort of home.",
  },
];

export default function StoryList() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full max-w-2xl flex-col gap-5 px-5 pb-14">
      {stories.map((story, idx) => {
        const isExpanded = expandedIndex === idx;

        return (
          <article
            key={story.title}
            className="flex w-full flex-col overflow-hidden rounded-[20px] border border-[#eae2cf] bg-white shadow-[0px_8px_24px_0px_rgba(61,50,38,0.06)]"
          >
            {/* Story media */}
            <div className="relative h-[190px] w-full overflow-hidden rounded-[16px] sm:h-[260px]">
              <img
                src={`/images/${story.image}`}
                alt=""
                className="size-full object-cover"
              />
              {/* Decorative play badge — the Figma design shows a video still,
                  but no video source is defined in the design yet. */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 flex size-[25px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[4px] bg-[rgba(122,101,66,0.75)]"
              >
                <Play size={12} fill="currentColor" className="text-white" />
              </div>
            </div>

            {/* Card content */}
            <div className="flex flex-col items-start gap-3 p-5">
              <div className="flex w-full items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase leading-[1.4] tracking-[1.5px] text-[#3d3326]">
                  {story.date}
                </p>
                <div
                  className="flex shrink-0 items-center gap-0.5 text-[#f5c442]"
                  aria-label={`Rated ${story.rating} out of 5`}
                >
                  {Array.from({ length: story.rating }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <h2 className="text-xl font-bold leading-[1.4] text-[#3d3326]">
                {story.title}
              </h2>

              <p
                className={`text-sm leading-[1.6] text-[#4a3d2e] ${
                  isExpanded ? "" : "line-clamp-4"
                }`}
              >
                {story.body}
              </p>

              <button
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                aria-expanded={isExpanded}
                className="text-sm font-bold leading-[1.4] tracking-[0.2px] text-[#3d3326] hover:underline"
              >
                {isExpanded ? "Show less ↑" : "Read more →"}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
