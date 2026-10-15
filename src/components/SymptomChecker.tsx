"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const healthSymptoms = [
  { label: "Constant Fatigue", file: "symptom-fatigue.jpg" },
  { label: "Weight Gain", file: "symptom-weight.jpg" },
  { label: "Hair Fall", file: "symptom-hairfall.jpg" },
  { label: "Irregular Cycles", file: "symptom-cycles.jpg" },
  { label: "Anxiety and Stress", file: "symptom-anxiety.jpg" },
  { label: "Dry Skin", file: "symptom-dryskin.jpg" },
  { label: "Mood Swings", file: "symptom-mood.jpg" },
  { label: "Heart Palpitations", file: "symptom-heart.jpg" },
  { label: "Cold & Constipation", file: "symptom-cold.jpg" },
];

const lifestyleSymptoms = [
  { label: "Thyroid & Hormonal Health", file: "symptom-thyroid.png" },
  { label: "Diabetes & Metabolic Health", file: "symptom-diabetes.png" },
  { label: "Respiratory Wellness", file: "symptom-respiratory.png" },
  { label: "Arthritis & Joint Health", file: "symptom-arthritis.png" },
  { label: "Lupus & Autoimmune", file: "symptom-lupus.png" },
  { label: "Gut & Digestive Health", file: "symptom-gut.png" },
  { label: "Skin & Autoimmune Health", file: "symptom-skin-auto.png" },
  { label: "Women's Hormonal Health", file: "symptom-womens-health.png" },
  { label: "Preventive & Lifestyle Health", file: "symptom-preventive.png" },
];

export default function SymptomChecker() {
  const [activeTab, setActiveTab] = useState<"health" | "lifestyle">("health");
  const [picked, setPicked] = useState<Set<string>>(new Set());

  const currentSymptoms = activeTab === "health" ? healthSymptoms : lifestyleSymptoms;
  const heading =
    activeTab === "health"
      ? "Are these silent health conditions affecting you?"
      : "Are these lifestyle patterns silently stealing your vitality?";
  const count = picked.size;

  function toggle(label: string) {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }

  const tabClass = (on: boolean) =>
    `min-h-11 rounded-full px-4 text-sm font-medium transition-colors sm:px-5 ${
      on ? "bg-[#3d3326] text-white" : "text-[#3d3326] hover:bg-black/5"
    }`;

  return (
    <section className="w-full bg-[#faf7f2] py-10 md:py-14 lg:py-20">
      <div className="container-site flex flex-col items-center gap-7 lg:gap-10">
        <div className="flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[1px] text-[#8b4e0a]">Looks familiar?</p>
          <h2 className="text-2xl font-bold leading-[1.25] text-[#3d3326] sm:text-3xl lg:text-4xl">{heading}</h2>

          <div className="flex w-fit items-center rounded-full bg-[#ebe4da] p-1" role="group" aria-label="Choose a list">
            <button type="button" aria-pressed={activeTab === "health"} onClick={() => setActiveTab("health")} className={tabClass(activeTab === "health")}>
              Health Issues
            </button>
            <button type="button" aria-pressed={activeTab === "lifestyle"} onClick={() => setActiveTab("lifestyle")} className={tabClass(activeTab === "lifestyle")}>
              Lifestyle Diseases
            </button>
          </div>

          <p className="text-xs font-bold uppercase tracking-[1px] text-[#8b4e0a]">Tap each one you experience</p>
        </div>

        {/* 3 columns on every screen; cards grow with the screen up to a comfortable size */}
        <ul className="grid w-full max-w-[640px] grid-cols-3 gap-3 sm:gap-5 md:max-w-[760px] md:gap-6 lg:max-w-[960px] lg:gap-8">
          {currentSymptoms.map(({ label, file }) => {
            const on = picked.has(label);
            return (
              <li key={label}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(label)}
                  className="group flex w-full flex-col items-center gap-2 text-center"
                >
                  <span
                    className={`relative block aspect-[102/108] w-full overflow-hidden rounded-[18px] ring-offset-2 ring-offset-[#faf7f2] transition-all duration-200 lg:rounded-[24px] ${
                      on ? "ring-[3px] ring-[#8b4e0a]" : "ring-0 group-hover:shadow-[0_8px_20px_rgba(61,50,38,0.15)]"
                    }`}
                  >
                    <img src={`/images/${file}`} alt="" loading="lazy" className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                    {on && (
                      <span className="absolute right-1.5 top-1.5 flex size-6 items-center justify-center rounded-full bg-[#8b4e0a] text-white shadow md:right-2.5 md:top-2.5 md:size-8">
                        <Check size={16} strokeWidth={3} aria-hidden="true" />
                      </span>
                    )}
                  </span>
                  <span className="text-xs font-semibold leading-tight text-[#3d3326] sm:text-sm lg:text-base">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex w-full max-w-2xl flex-col items-center gap-1.5 text-center" aria-live="polite">
          <p className="text-lg font-bold text-[#8b4e0a] sm:text-2xl">
            {count > 0
              ? `You picked ${count}. If your answer is YES, you are not alone.`
              : "If your answer is YES, you are not alone."}
          </p>
          <p className="text-sm font-semibold text-[#3d3326] sm:text-lg">
            Divines Wellness Program helps you reset your lifestyle &amp; restore your well-being holistically.
          </p>
        </div>
      </div>
    </section>
  );
}
