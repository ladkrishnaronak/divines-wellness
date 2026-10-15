"use client";

import Link from "next/link";
import { useState } from "react";

// Copy and styles follow Figma "Founders" (node 7:104) → Persona Cards 426:1024 / 426:1035.
const founders = [
  {
    eyebrow: "Founder & Director",
    name: "Dr. Neha Solanki",
    role: "Homeopathic Physician & Wellness Expert",
    file: "founder-neha.jpg",
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
    file: "founder-priyanka.jpg",
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
    <section id="founders" className="w-full bg-[#fffcf7] py-11 md:py-14 lg:py-20">
      {/* Phones/tablet: intro, cards, closing line + buttons, stacked.
          Desktop: 3 columns — intro and buttons on the left, two founder cards on the right. */}
      <div className="container-site grid gap-7 lg:grid-cols-3 lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-6">
        <div className="mx-auto flex w-full max-w-xl flex-col gap-3 text-center lg:col-start-1 lg:row-start-1 lg:mx-0 lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#8b4e0a]">The people behind it</p>
          <h2 className="text-2xl font-semibold leading-[1.3] tracking-[-0.2px] text-[#1a140f] sm:text-3xl lg:text-4xl">
            Meet The Founders
          </h2>
          <p className="text-sm leading-6 tracking-[0.25px] text-[#2e261c] md:text-base md:leading-7">
            They didn&apos;t just study wellness - they lived it. Two doctors who healed from within, now guiding you to do the same.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-4 sm:mx-auto sm:max-w-xl md:max-w-none md:grid-cols-2 md:gap-5 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:gap-6">
          {founders.map((founder, idx) => {
            const isOpen = expandedId === idx;
            return (
              <article
                key={founder.name}
                className="flex w-full flex-col overflow-hidden rounded-[20px] border border-[#ebe3cf] bg-white shadow-[0px_8px_24px_0px_rgba(61,50,38,0.06)]"
              >
                <div className="aspect-[2/1] w-full shrink-0 overflow-hidden">
                  <img src={`/images/${founder.file}`} alt={founder.name} loading="lazy" className="size-full object-cover" />
                </div>

                <div className="flex w-full flex-col gap-2.5 p-5 pb-6 md:p-6">
                  <p className="text-xs font-medium uppercase leading-4 tracking-[0.8px] text-[#594724]">{founder.eyebrow}</p>
                  <h3 className="text-xl font-semibold leading-[1.4] text-[#1a140f]">{founder.name}</h3>
                  <p className="text-sm font-normal leading-5 tracking-[0.25px] text-[#544738]">{founder.role}</p>
                  <div className="h-px w-full bg-[#ebe3cf]" />

                  <div
                    id={`founder-bio-${idx}`}
                    className="flex flex-col text-sm font-normal leading-6 tracking-[0.25px] text-[#2e261c] md:text-[15px]"
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
                    className="-ml-1 mt-1 min-h-11 w-fit rounded-lg px-1 text-left text-sm font-semibold leading-5 tracking-[0.1px] text-[#7a6642] hover:underline"
                  >
                    {isOpen ? "Show Less ↑" : "Read More ↓"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-5 lg:col-start-1 lg:row-start-2 lg:mx-0 lg:items-start lg:self-start">
          <p className="text-center text-sm leading-6 tracking-[0.25px] text-[#2e261c] md:text-base lg:text-left">
            &ldquo;Step into a healthier future-where prevention, balance, and vitality become your way of life.&rdquo;
          </p>
          <div id="enroll" className="flex w-full gap-3 lg:flex-col">
            <Link
              href="/enroll"
              className="order-2 flex min-h-12 flex-1 items-center justify-center rounded-[16px] bg-[#3d3326] px-5 text-sm font-semibold tracking-[0.2px] text-white transition-colors hover:bg-[#2a1f19] md:text-base lg:order-1"
            >
              Enroll Now
            </Link>
            <Link
              href="/stories"
              className="order-1 flex min-h-12 flex-1 items-center justify-center rounded-[16px] border-[1.5px] border-[#3d3326] bg-[#fffcf7] px-5 text-sm font-semibold tracking-[0.2px] text-[#1a140f] transition-colors hover:bg-[#3d3326] hover:text-white md:text-base lg:order-2"
            >
              Explore Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
