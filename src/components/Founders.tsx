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
    role: "Integrative Health Practitioner, Yoga Therapist & Life Coach",
    file: "founder-priyanka.png",
    summary: "Priyanka brings a holistic perspective to wellness through yoga and mindfulness practices...",
    fullBio: "Priyanka Patel's health crisis became her awakening. At just 20 years old, severe hyperthyroidism forced her to abandon her architecture studies and focus on survival. When conventional approaches faltered, she discovered yoga—and with it, a path to healing. Medical guidance combined with consistent practice and conscious lifestyle choices brought her back from the edge. She finished her degree, reclaimed her vitality, and thought her battle was won. But when hyperthyroidism returned years later, Priyanka chose a different path: she leaned deeper into yoga and holistic practices, transforming her pain into purpose. Now, as a yoga therapist and life coach, she walks alongside others facing similar struggles—not as an expert dispensing advice, but as someone who truly understands the journey. Healing, she knows, is both a profession and a lived experience.",
  },
];

export default function Founders() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="stories" className="flex w-full flex-col items-center justify-center gap-7 bg-[#fffcf7] px-6 pb-10 pt-11 sm:px-12">
      <div className="flex flex-col items-center gap-3 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#3d3326] text-center">
          Meet The Founders
        </h2>
        <p className="text-center text-sm text-[#4a3d2e] max-w-md">
          They didn't just study wellness - they lived it. Two doctors who healed from within, now guiding you to do the same.
        </p>
      </div>

      {/* Founders Cards */}
      <div className="flex w-full max-w-lg flex-col gap-4">
        {founders.map((founder, idx) => (
          <div key={founder.name}>
            <div className="flex flex-col gap-4 rounded-[20px] bg-white px-5 py-0 shadow-[0_8px_24px_rgba(61,50,38,0.06)] border border-[#ebe3cf] overflow-hidden">
              {/* Image */}
              <div className="h-48 -mx-5 -mt-0 w-[calc(100%+40px)] rounded-b-[20px] overflow-hidden">
                <img src={`/images/${founder.file}`} alt={founder.name} className="size-full object-cover" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2.5">
                <p className="text-xs font-bold uppercase text-[#7a6642] tracking-[1.5px]">
                  {idx === 0 ? "Founder & Director" : "Co-Founder"}
                </p>
                <p className="text-lg font-bold text-[#3d3226]">{founder.name}</p>
                <p className="text-sm text-[#7d6e5e]">{founder.role}</p>

                {/* Divider */}
                <div className="h-px bg-[#ebe3cf]" />

                {/* Bio Text - Show clamped or full based on state */}
                {expandedId !== idx && (
                  <div className="text-sm text-[#4a3d2e] leading-relaxed">
                    <p className="line-clamp-3">{founder.fullBio}</p>
                  </div>
                )}

                {expandedId === idx && (
                  <div className="text-sm text-[#4a3d2e] leading-relaxed">
                    <p>{founder.fullBio}</p>
                  </div>
                )}

                {/* Read More/Less Button */}
                <button
                  onClick={() => setExpandedId(expandedId === idx ? null : idx)}
                  className="text-sm font-medium text-[#7a6642] hover:underline text-left mt-1"
                >
                  {expandedId === idx ? "Show Less ↑" : "Read More ↓"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Quote */}
      <p className="max-w-md text-center font-medium text-[#4a3d2e] italic">
        "Step into a healthier future—where prevention, balance, and vitality become your way of life."
      </p>

      {/* Action Buttons */}
      <div id="enroll" className="flex h-11 w-full max-w-xl gap-3">
        <button className="flex-1 rounded-[16px] border-[1.5px] border-[#3d3326] text-sm font-bold text-[#3d3326] hover:bg-[#3d3326] hover:text-white transition-colors sm:text-base">
          Explore story
        </button>
        <button className="flex-1 rounded-[16px] bg-[#3d3326] text-sm font-bold text-white hover:bg-[#2a1f19] transition-colors sm:text-base">
          Enroll Now
        </button>
      </div>
    </section>
  );
}
