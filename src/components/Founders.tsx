"use client";

import Link from "next/link";
import { useState } from "react";

// Copy and styles follow Figma "Founders" (node 7:104) → Persona Cards 426:1024 / 426:1035.
const founders = [
  {
    eyebrow: "Founder & Director",
    name: "Dr. Neha Solanki",
    role: "Homeopathic Physician & Wellness Expert",
    file: "founder-neha.png",
    bio: [
      "Dr. Neha Solanki's journey began as a homeopathic physician, but a crucial realization shifted her entire approach: medicines alone couldn't heal the chronic lifestyle disorders consuming her patients' lives. When she began practicing yoga alongside her medical work in 2007, she discovered the remarkable healing potential of combining medical guidance with holistic practices and lifestyle transformation.",
      "This insight inspired the creation of the Divines Wellness Program—a space where medical expertise meets yoga, nutrition, and mind coaching. Dr. Neha's mission is to empower people to nurture their own health and achieve sustainable, long-term wellness. She believes that true healing doesn't come from quick fixes; it begins at the root.",
    ],
    quote: "True healing begins at the root.",
    spacedParagraphs: false, // Figma: paragraphs run on with no blank line
  },
  {
    eyebrow: "Co-Founder",
    name: "Priyanka Patel",
    role: "Integrative Health Practitioner, Yoga Therapist & Life Coach",
    file: "founder-priyanka.png",
    bio: [
      "Priyanka Patel’s journey into wellness began with her own struggle. At 20, during her first year of architecture school, she was diagnosed with severe hyperthyroidism, forcing her to pause her studies and focus on recovery. It was during this difficult chapter that she discovered yoga. With medical guidance, dedicated practice, and conscious lifestyle changes, she gradually regained her strength, balance, and confidence, eventually completing her architecture degree. The experience gave her a profound understanding of the connection between the body, mind, lifestyle, and emotional well-being.",
      "When her health challenges resurfaced years later, Priyanka chose to go deeper into yoga and holistic wellness, transforming her personal journey into a purpose. This became the foundation of The Divine Wellness, where she brings together professional knowledge and lived experience to guide people towards greater health, balance, and self-awareness. Her mission is deeply personal: to share the knowledge and wisdom she has gained through her own journey, so that others can move towards healing, recovery, and their own inner strength. For Priyanka, wellness is not simply a profession—it is a lifelong commitment to making meaningful healing knowledge accessible to everyone she has the opportunity to guide.",
    ],
    quote: "True healing begins at the root.",
    spacedParagraphs: true, // Figma: one blank line between the two paragraphs
  },
];

export default function Founders() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section
      id="stories"
      className="flex w-full flex-col items-center justify-center gap-7 bg-[#fffcf7] px-6 pb-10 pt-11 sm:px-12 md:px-14 md:py-14 lg:px-16 lg:py-16"
    >
      <h2 className="w-full max-w-lg text-2xl font-semibold leading-[1.3] tracking-[-0.2px] text-[#1a140f] md:max-w-3xl lg:max-w-4xl">
        Meet The Founders
      </h2>
      <p className="w-full max-w-md text-center text-sm font-normal leading-5 tracking-[0.25px] text-[#2e261c]">
        They didn&apos;t just study wellness - they lived it. Two doctors who healed from within, now guiding you to do the same.
      </p>

      <div className="grid w-full max-w-lg grid-cols-1 items-start gap-4 md:max-w-3xl md:grid-cols-2 md:gap-5 lg:max-w-4xl lg:gap-6">
        {founders.map((founder, idx) => {
          const isOpen = expandedId === idx;
          return (
            <article
              key={founder.name}
              className="flex w-full flex-col overflow-hidden rounded-[20px] border border-[#ebe3cf] bg-white shadow-[0px_8px_24px_0px_rgba(61,50,38,0.06)]"
            >
              {/* Photo is flush with the card edges; the card's own radius rounds the top */}
              <div className="h-[193px] w-full shrink-0 overflow-hidden">
                <img src={`/images/${founder.file}`} alt={founder.name} className="size-full object-cover" />
              </div>

              <div className="flex w-full flex-col gap-2.5 p-5 pb-6">
                <p className="text-[11px] font-normal leading-4 tracking-[0.5px] text-[#594724]">{founder.eyebrow}</p>
                <h3 className="text-xl font-semibold leading-[1.4] text-[#1a140f]">{founder.name}</h3>
                <p className="text-sm font-normal leading-5 tracking-[0.25px] text-[#544738]">{founder.role}</p>
                <div className="h-px w-full bg-[#ebe3cf]" />

                <div
                  id={`founder-bio-${idx}`}
                  className="flex flex-col text-sm font-normal leading-5 tracking-[0.25px] text-[#2e261c]"
                >
                  {isOpen ? (
                    <>
                      {founder.bio.map((para, pIdx) => (
                        <p key={para.slice(0, 24)} className={pIdx > 0 && founder.spacedParagraphs ? "mt-5" : ""}>
                          {para}
                        </p>
                      ))}
                      <p className="mt-4 italic text-[#7a6642]">&ldquo;{founder.quote}&rdquo;</p>
                    </>
                  ) : (
                    <p className="line-clamp-3">{founder.bio[0]}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setExpandedId(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`founder-bio-${idx}`}
                  className="mt-1 w-fit text-left text-sm font-semibold leading-5 tracking-[0.1px] text-[#7a6642] hover:underline"
                >
                  {isOpen ? "Show Less ↑" : "Read More ↓"}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <p className="w-full max-w-md text-center text-sm font-normal leading-5 tracking-[0.25px] text-[#2e261c]">
        &ldquo;Step into a healthier future-where prevention, balance, and vitality become your way of life.&rdquo;
      </p>

      <div id="enroll" className="flex h-[45px] w-full max-w-lg gap-3 md:max-w-xl lg:h-14 lg:max-w-2xl">
        <Link
          href="/stories"
          className="flex flex-1 items-center justify-center rounded-[16px] border-[1.5px] border-[#3d3326] bg-[#fffcf7] text-sm font-semibold leading-[1.4] tracking-[0.2px] text-[#1a140f] transition-colors hover:bg-[#3d3326] hover:text-white"
        >
          Explore Stories
        </Link>
        <Link
          href="/enroll"
          className="flex flex-1 items-center justify-center rounded-[16px] bg-[#3d3326] text-sm font-semibold leading-[1.4] tracking-[0.2px] text-white transition-colors hover:bg-[#2a1f19]"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  );
}
