"use client";

import { useState } from "react";

const founders = [
  {
    name: "Dr. Neha Solanki",
    role: "Homeopathic Physician & Wellness Expert",
    file: "founder-neha.png",
    summary: "Dr. Neha Solanki's journey began as a homeopathic physician, but a crucial realization shifted her entire approach...",
    fullBio: "Dr. Neha Solanki's journey began as a homeopathic physician, but a crucial realization shifted her entire approach: medicines alone couldn't heal chronic lifestyle disorders. Alongside her medical work in 2007, she discovered the remarkable healing potential of combining medical guidance with holistic practices and lifestyle transformation. This insight inspired the creation of the Divines Wellness Program—a space where medical expertise meets yoga, nutrition, and mind coaching. Dr. Neha's mission is to empower people to nurture their health from within, achieving sustainable, long-term wellness. She believes that true healing doesn't come from quick fixes; it begins at the root.",
  },
  {
    name: "Priyanka Patel",
    role: "Yoga Therapist & Life Coach",
    file: "founder-priyanka.png",
    summary: "Priyanka brings a holistic perspective to wellness through yoga and mindfulness practices...",
    fullBio: "Priyanka Patel is a certified Yoga Therapist and Life Coach dedicated to helping individuals find balance through mind-body practices. With extensive training in various yoga traditions and therapeutic techniques, she specializes in creating personalized wellness plans that address both physical and mental well-being. Priyanka's approach combines ancient yogic wisdom with modern therapeutic methods to help clients overcome stress, anxiety, and lifestyle-related challenges. Her work focuses on empowering individuals to take control of their health journey and achieve sustainable transformation.",
  },
];

export default function Founders() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-7 bg-[#fffdf8] px-6 pb-10 pt-11 sm:px-12">
      <h2 className="w-full font-serif text-[22px] font-bold uppercase text-[#8b4e0a] sm:text-center sm:text-3xl">
        Meet The Founders
      </h2>
      <p className="text-center text-[13px] leading-[1.5] text-[#3d3226]/70 sm:max-w-xl sm:text-base">
        They didn&rsquo;t just study wellness — they lived it. Two doctors who healed from within,
        now guiding you to do the same.
      </p>

      {/* Founders Cards - Show first one always, second one on expand */}
      <div className={`flex w-full max-w-2xl flex-col gap-6 ${!expanded ? "max-w-xl" : ""}`}>
        {founders.map(({ name, role, file, summary, fullBio }, idx) => (
          <div key={name} className={expanded || idx === 0 ? "block" : "hidden"}>
            <div className="flex flex-col gap-4 rounded-2xl bg-white px-4 py-6 shadow-[0_4px_8px_rgba(0,0,0,0.08)] sm:flex-row sm:px-6">
              <div className="shrink-0">
                <div className="size-32 overflow-hidden rounded-2xl sm:size-40">
                  <img src={`/images/${file}`} alt={name} className="size-full object-cover" />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-2">
                <p className="text-xs font-bold uppercase text-[#8fae88]">Founder & Director</p>
                <p className="font-serif text-base font-bold text-[#3d3226] sm:text-lg">{name}</p>
                <p className="text-xs font-medium text-[#8b4e0a] sm:text-sm">{role}</p>
                <p className="text-[13px] leading-[1.5] text-[#3d3226]/85 sm:text-sm">
                  {expanded ? fullBio : summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-base font-semibold text-[#8b4e0a] hover:underline"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>

      <p className="max-w-md text-center font-serif text-[13px] italic leading-[1.6] text-[#3d3226]/85 sm:text-base">
        &ldquo;True healing begins when we align our medical health with a quiet, resilient
        mind.&rdquo;
      </p>

      <div id="enroll" className="flex h-11 w-full max-w-xl gap-3">
        <button
          type="button"
          className="flex-1 rounded-2xl border-[1.5px] border-[#8b4e0a] text-sm font-semibold text-[#8b4e0a] hover:bg-[#8b4e0a] hover:text-white sm:text-base"
        >
          Browse More
        </button>
        <button type="button" className="flex-1 rounded-2xl bg-[#8b4e0a] text-sm font-semibold text-white hover:bg-[#7a4205] sm:text-base">
          Enroll Now
        </button>
      </div>
    </section>
  );
}
