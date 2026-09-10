"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

// NOTE: Questions come from the Figma design (node 25:2).
// Answers are drafts written from known program details and need
// review/replacement by the Divines Wellness team before launch.
const faqs = [
  {
    q: "What is the Divines Wellness Program (DWP)?",
    a: "DWP is a 3-month personalized wellness journey that combines medical guidance, nutrition, yoga therapy, and mind coaching. It is structured around four pillars — Foundation, Vitality, Balance, and Liberation — to help you address the root causes of lifestyle and autoimmune conditions rather than only their symptoms.",
  },
  {
    q: "Who can join the DWP?",
    a: "The program is open to adults who want to reset their lifestyle and take a preventive, holistic approach to their health. If you are managing an existing medical condition, we ask that you continue working with your treating doctor alongside the program.",
  },
  {
    q: "What is the duration of the program?",
    a: "The program runs for 3 months, with consultations every 15 days and continuous support in between.",
  },
  {
    q: "What is included in the DWP?",
    a: "You receive personalized nutrition planning, therapeutic yoga and pranayama, a comprehensive health assessment with medical guidance, and stress management, sleep optimization and emotional wellness coaching.",
  },
  {
    q: "How many consultations are provided?",
    a: "Six consultations, scheduled every 15 days across the 3 months, in each area of the program.",
  },
  {
    q: "Is DWP only a weight-loss program?",
    a: "No. Weight regulation is one possible outcome, but the program's focus is broader — restoring gut health and energy, regulating stress and hormones, and building habits you can sustain long term.",
  },
  {
    q: "Will I definitely lose weight after joining DWP?",
    a: "We cannot promise a specific weight outcome. Results vary from person to person depending on your starting point, your medical history, and how consistently you follow your personalized plan.",
  },
  {
    q: "Can a person with diabetes or high blood pressure join DWP?",
    a: "Yes, and many participants do. Please tell us about your condition during the initial health assessment, and continue under the care of your treating doctor throughout the program.",
  },
  {
    q: "Can I stop my medicines after joining DWP?",
    a: "No. Never stop or change prescribed medication on your own. Any change to your medication is a decision for your treating doctor to make, based on their assessment of your progress.",
  },
  {
    q: "Do I need to be physically fit to join the program?",
    a: "No. Yoga and movement sessions are adapted to your current ability and health status. The program meets you where you are.",
  },
  {
    q: "What type of Yoga is included in the program?",
    a: "Therapeutic yoga and pranayama, selected and paced for your individual needs rather than a fixed class format — with an emphasis on strength, flexibility, and breath work.",
  },
  {
    q: "Will I receive a personalized diet plan?",
    a: "Yes. Nutrition planning is tailored to your assessment, your health goals, and your food preferences and routine.",
  },
  {
    q: "Why is Mind Coaching included in the program?",
    a: "Stress, sleep, and emotional patterns directly affect hormones, digestion, and energy. Addressing them alongside nutrition and movement is what makes the changes hold.",
  },
  {
    q: "How much time do I need to spend every day?",
    a: "Daily practice is designed to fit a working routine. Your exact commitment is agreed during your assessment so the plan is realistic for your schedule.",
  },
  {
    q: "What happens if I miss a session or consultation?",
    a: "Reach out to the team and we will work with you to reschedule. Consistency matters more than perfection — missing one session does not undo your progress.",
  },
  {
    q: "Can I join DWP after the program has already started?",
    a: "Because each journey is personalized and begins with your own assessment, your 3 months start when you do. Contact us to find out about the next available intake.",
  },
  {
    q: "Will my health progress be monitored?",
    a: "Yes. Baseline measurements are taken during the Foundation phase, and your progress is reviewed at each consultation across the 3 months.",
  },
  {
    q: "What results can I expect from DWP?",
    a: "Participants commonly report improved digestion and sustained energy, better sleep, steadier mood, and more confidence managing their own health. Individual results vary.",
  },
  {
    q: "Is DWP a replacement for medical treatment?",
    a: "No. DWP works alongside your medical care, not instead of it. Continue seeing your doctor and following their treatment plan.",
  },
  {
    q: "What is the most important factor for success in DWP?",
    a: "Consistency. The participants who see the most change are the ones who stay engaged with their plan and communicate openly with their guides.",
  },
];

export default function FaqList() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const normalized = query.trim().toLowerCase();
  const visible = normalized
    ? faqs.filter(
        (f) =>
          f.q.toLowerCase().includes(normalized) || f.a.toLowerCase().includes(normalized)
      )
    : faqs;

  return (
    <>
      {/* Search */}
      <div className="flex w-full items-start justify-center px-6 pb-7">
        <div className="flex w-full max-w-md flex-1 items-center gap-2.5 rounded-[12px] border border-[#e8d9be] bg-[#fffcf7] px-3.5 py-3 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
          <Search size={18} strokeWidth={2} className="shrink-0 text-[#bfa882]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs..."
            aria-label="Search frequently asked questions"
            className="w-full bg-transparent text-sm leading-[1.6] text-[#4a3d2e] outline-none placeholder:text-[#bfa882]"
          />
        </div>
      </div>

      {/* Accordion list */}
      <div className="flex w-full max-w-md flex-col gap-2.5 px-5 pb-10">
        {visible.length === 0 && (
          <p className="py-8 text-center text-sm text-[#7d6e5e]">
            No questions match &ldquo;{query}&rdquo;. Try a different word.
          </p>
        )}

        {visible.map((faq) => {
          const realIndex = faqs.indexOf(faq);
          const isOpen = openIndex === realIndex;

          return (
            <div
              key={faq.q}
              className="overflow-hidden rounded-[14px] border border-[#7a6542] bg-[#fffdf8] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.04)]"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : realIndex)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 p-[18px] text-left"
              >
                <span className="text-sm leading-[1.6] text-[#4a3d2e]">{faq.q}</span>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={`size-4 shrink-0 text-[#4a3d2e] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-[#e8d9be] px-[18px] pb-[18px] pt-3.5">
                  <p className="text-sm leading-[1.7] text-[#4a3d2e]">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
