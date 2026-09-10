"use client";

import { useState } from "react";

const pillars = [
  {
    num: "01",
    title: "Foundation",
    tagline: "Identify triggers",
    color: "#7a6a55",
    focus: "The first step in your healing journey. We conduct a comprehensive assessment of your health, lifestyle, and triggers to create a personalized diagnosis and treatment plan.",
    actions: [
      "Complete Health Assessment",
      "Identify Root Causes",
      "Personalized Diagnosis",
      "Baseline Measurements",
    ],
    outcomes: [
      "Clear understanding of your unique health profile",
      "Personalized treatment roadmap",
      "Foundation for structured healing",
    ],
    tags: "Assess • Diagnose • Personalize",
    file: "pillar-foundation.png",
  },
  {
    num: "02",
    title: "Vitality",
    tagline: "Restore gut & energy",
    color: "#8b6f47",
    focus: "Rebuild your energy and restore your gut health through personalized nutrition, therapeutic exercises, and lifestyle modifications.",
    actions: [
      "Gut Health Restoration",
      "Energy Optimization",
      "Nutrition Planning",
      "Detoxification Protocol",
    ],
    outcomes: [
      "Improved digestion and sustained energy",
      "Better weight regulation",
      "Enhanced overall vitality",
    ],
    tags: "Heal • Nourish • Energize",
    file: "pillar-vitality.png",
  },
  {
    num: "03",
    title: "Balance",
    tagline: "Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Achieve hormonal balance and manage stress through yoga therapy, meditation, and mind coaching practices tailored to your needs.",
    actions: [
      "Hormonal Regulation",
      "Stress Management",
      "Emotional Balance",
      "Sleep Optimization",
    ],
    outcomes: [
      "Reduced anxiety and better sleep",
      "Stable mood and emotional resilience",
      "Improved hormonal balance",
    ],
    tags: "Regulate • Calm • Stabilize",
    file: "pillar-balance.png",
  },
  {
    num: "04",
    title: "Liberation",
    tagline: "Sustain long-term",
    color: "#a0845a",
    focus: "Lock in your gains and build sustainable habits that empower you to maintain your wellness for life.",
    actions: [
      "Long-term Sustainability",
      "Habit Formation",
      "Relapse Prevention",
      "Ongoing Support",
    ],
    outcomes: [
      "Sustainable wellness practices",
      "Confidence in self-managing health",
      "Long-term vitality and freedom",
    ],
    tags: "Sustain • Protect • Empower",
    file: "pillar-liberation.png",
  },
];

export default function ProgramJourney() {
  const [selectedPillar, setSelectedPillar] = useState<typeof pillars[0] | null>(null);

  const closeModal = (p: typeof pillars[0] | null) => {
    setSelectedPillar(p);
    if (!p) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <section className="flex w-full flex-col items-center gap-7 bg-[#fffcf7] px-5 py-11 sm:px-10">
      <div className="flex w-full flex-col items-center gap-2.5">
        <div className="bg-[#f0e8d6] px-3.5 py-1.5 rounded-[20px]">
          <p className="text-xs font-medium text-[#4a3d2e] uppercase tracking-[0.5px]">
            The Journey
          </p>
        </div>
        <h2 className="text-center text-2xl sm:text-4xl font-bold text-[#3d3326] leading-tight">
          3 Months - 4D Structured<br />Healing Journey
        </h2>
        <p className="max-w-md text-center text-sm text-[#7d6e5e] italic">
          Personalized Guidance – Plans tailored to your unique needs &amp; health goals
        </p>
      </div>

      {/* 2x2 Grid */}
      <div className="grid w-full max-w-2xl grid-cols-2 gap-3.5 sm:gap-6">
        {pillars.map((pillar) => (
          <button
            key={pillar.num}
            onClick={() => closeModal(pillar)}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
          >
            <div className="relative h-[140px] w-full shrink-0">
              <img
                src={`/images/${pillar.file}`}
                alt={pillar.title}
                className="size-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 40%, ${pillar.color}cc)`,
                }}
              />
              <span className="absolute bottom-2.5 left-2.5 bg-[#2d4a3e] px-2 py-1 text-[9px] font-bold uppercase text-white rounded-md">
                Pillar {pillar.num}
              </span>
            </div>
            <div className="flex flex-col gap-1 px-3 pb-3.5 pt-3">
              <h3 className="text-base font-bold text-[#8b4e0a]">{pillar.title}</h3>
              <p className="text-xs italic text-[#7a5030]">{pillar.tagline}</p>
              <p className="text-xs text-[#6a4010]">{pillar.tags}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedPillar && (
        <div
          onClick={() => closeModal(null)}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-t-3xl bg-[#faf3e0] overflow-hidden max-h-[88vh] overflow-y-auto"
          >
            {/* Photo Hero */}
            <div className="relative h-52 w-full shrink-0">
              <img
                src={`/images/${selectedPillar.file}`}
                alt={selectedPillar.title}
                className="size-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 25%, ${selectedPillar.color}f0)`,
                }}
              />
              {/* Close Button */}
              <button
                onClick={() => closeModal(null)}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/35 hover:bg-black/50 flex items-center justify-center text-white text-base transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <div
                  className="inline-block rounded-full px-3 py-1 mb-1.5 text-[10px] font-bold text-white uppercase tracking-widest"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  Pillar {selectedPillar.num} · 4D Journey
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">{selectedPillar.title}</h2>
                <p className="text-sm italic text-white/85">{selectedPillar.tagline}</p>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-5 px-4.5 py-5 pb-8">
              {/* Focus */}
              <div
                className="rounded-xl p-3.5"
                style={{
                  background: `${selectedPillar.color}18`,
                  border: `1.5px solid ${selectedPillar.color}30`,
                }}
              >
                <div
                  className="text-[10px] font-bold uppercase tracking-widest mb-1"
                  style={{ color: selectedPillar.color }}
                >
                  About This Phase
                </div>
                <p className="text-sm leading-relaxed text-[#3a2010]">{selectedPillar.focus}</p>
              </div>

              {/* Actions */}
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-[#8b4e0a]">
                  <span className="w-5 h-5 rounded-full bg-[#8b4e0a] text-white text-[9px] inline-flex items-center justify-center">
                    ▸
                  </span>
                  What You'll Get
                </div>
                <div className="space-y-0">
                  {selectedPillar.actions.map((action, i) => (
                    <div
                      key={i}
                      className="flex gap-2.5 items-start py-2.5"
                      style={{
                        borderBottom:
                          i < selectedPillar.actions.length - 1 ? "1px solid rgba(139,78,10,0.1)" : "none",
                      }}
                    >
                      <div
                        className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center text-[11px] font-bold"
                        style={{
                          background: "rgba(139,78,10,0.1)",
                          color: "#8b4e0a",
                        }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-[#3a2010]">{action}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-[#8fae88]">
                  <span className="w-5 h-5 rounded-full bg-[#8fae88] text-white text-[9px] inline-flex items-center justify-center">
                    ✓
                  </span>
                  Expected Outcomes
                </div>
                <div className="space-y-0">
                  {selectedPillar.outcomes.map((outcome, i) => (
                    <div
                      key={i}
                      className="flex gap-2.5 items-start py-2.5"
                      style={{
                        borderBottom:
                          i < selectedPillar.outcomes.length - 1 ? "1px solid rgba(139,78,10,0.1)" : "none",
                      }}
                    >
                      <span className="text-[#8fae88] flex-shrink-0 text-lg leading-none">✦</span>
                      <p className="text-sm leading-relaxed text-[#3a2010]">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
