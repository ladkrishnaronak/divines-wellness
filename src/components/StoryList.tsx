"use client";

import { useRef, useState } from "react";

// Client reviews supplied by The Divines Health (Oct 2026).
// Photos are not added yet: each card shows the person's initials in an oval.
// To add a photo later, put it in /public/images and set image: "file-name.jpg".
type Story = {
  author: string;
  location?: string;
  image?: string;
  title: string;
  quote: string[];
  tags: string[];
};

const stories: Story[] = [
  {
    author: "Manisha Dhelia",
    title: "Thyroid back in balance through yoga",
    quote: [
      "I was diagnosed with thyroid imbalance in 2018, with a TSH level of 6.27, and began medication, which later increased to Euthyroid 50. In October 2022, I joined the yoga sessions and started following the holistic practices consistently.",
      "When I repeated my tests in May 2023, my TSH had improved to 1.01. Under medical guidance, I was able to gradually stop the medication, and since then I have been maintaining my thyroid health naturally through disciplined lifestyle and yoga practice.",
    ],
    tags: ["Thyroid health", "Yoga & lifestyle"],
  },
  {
    author: "Dr. Suchi Patel",
    title: "Regular cycles and more energy",
    quote: [
      "I would like to sincerely thank Dr. Neha Solanki ma’am and her team, especially Dt. Jyoti ma’am, for their right guidance in managing my hypothyroidism. With their structured support, my menstrual cycle has become regular without the need for hormonal pills.",
      "I have also noticed a significant improvement in my skin texture. The early morning tiredness and daytime lethargy have reduced considerably, and I feel more active throughout the day. Along with the program, I continue strength training and complete 10,000 steps daily, along with my regular household responsibilities.",
      "I am truly grateful for the positive changes in my health.",
    ],
    tags: ["Hypothyroidism", "Hormonal balance"],
  },
  {
    author: "Ruchi Das",
    title: "From young patient to yoga trainer",
    quote: [
      "I was just eight years old when I was diagnosed with hypothyroidism. It was a confusing time for me and my family, but we were guided to Dr. Neha Solanki for homeopathic treatment along with yoga therapy. With her patience, compassionate care, and consistent guidance through both healing approaches, my health gradually improved until I recovered completely. Today, I feel grateful to work alongside her as a yoga trainer — turning what once felt like a childhood challenge into a meaningful journey of helping others heal.",
    ],
    tags: ["Childhood recovery", "Yoga therapy"],
  },
];

// "Dr. Suchi Patel" -> "SP"
function initials(name: string) {
  const parts = name.replace(/^Dr\.?\s+/i, "").trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

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
        aria-label="Client stories"
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
              <div className="flex h-[200px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[16px] bg-[#f2ede3]">
                {story.image ? (
                  <img
                    src={`/images/${story.image}`}
                    alt={story.location ? `${story.author}, ${story.location}` : story.author}
                    width={120}
                    height={152}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="h-[152px] w-[120px] rounded-[50%] object-cover shadow-[0px_4px_12px_rgba(61,50,38,0.12)]"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-[152px] w-[120px] items-center justify-center rounded-[50%] border-2 border-[#e6c594] bg-[#3d3326] text-[34px] font-semibold tracking-[1px] text-[#e6c594] shadow-[0px_4px_12px_rgba(61,50,38,0.12)]"
                  >
                    {initials(story.author)}
                  </div>
                )}
              </div>

              {/* 12px spacer from Figma "overlap-spacing-adjustment" */}
              <div className="h-3 w-full shrink-0" aria-hidden="true" />

              <div className="flex w-full items-center justify-between gap-3 whitespace-nowrap">
                <p className="text-sm font-semibold leading-[1.4] tracking-[0.2px] text-[#3d3326]">
                  {story.location ? `${story.author} · ${story.location}` : story.author}
                </p>
                <p
                  className="text-xs font-medium leading-4 tracking-[0.4px] text-[#b89959]"
                  aria-label="Rated 5 out of 5"
                >
                  ★★★★★
                </p>
              </div>

              <h2 className="text-[22px] font-normal leading-7 text-[#3d3326]">{story.title}</h2>

              <div className="flex flex-col gap-3 text-sm font-normal leading-5 tracking-[0.25px] text-[#4a3d2e]">
                {story.quote.map((para, i) => (
                  <p key={i}>
                    {i === 0 && "\u201c"}
                    {para}
                    {i === story.quote.length - 1 && "\u201d"}
                  </p>
                ))}
              </div>

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
