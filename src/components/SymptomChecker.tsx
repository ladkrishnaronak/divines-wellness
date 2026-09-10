"use client";

import { useState } from "react";

const healthSymptoms = [
  { label: "Constant Fatigue", file: "symptom-fatigue.png" },
  { label: "Weight Gain", file: "symptom-weight.png" },
  { label: "Hair Fall", file: "symptom-hairfall.png" },
  { label: "Mood Swings", file: "symptom-mood.png" },
  { label: "Irregular Cycles", file: "symptom-cycles.png" },
  { label: "Anxiety and Stress", file: "symptom-anxiety.png" },
  { label: "Dry Skin", file: "symptom-dryskin.png" },
  { label: "Cold & Constipation", file: "symptom-cold.png" },
  { label: "Heart Palpitations", file: "symptom-heart.png" },
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

  const currentSymptoms = activeTab === "health" ? healthSymptoms : lifestyleSymptoms;
  const heading =
    activeTab === "health"
      ? "Are these silent health conditions affecting you?"
      : "Are these lifestyle patterns silently stealing your vitality?";

  return (
    <section className="flex w-full flex-col items-center justify-center gap-7 bg-[#faf7f2] px-6 pb-10 pt-7 sm:px-12 lg:px-16 lg:py-14">
      <div className="flex w-full flex-col items-center gap-4">
        <p className="text-[11px] font-bold uppercase text-[#8b4e0a]">Looks familiar?</p>
        <h2 className="w-80 max-w-full text-center text-2xl font-bold leading-[1.25] text-[#3d3226] sm:w-full sm:text-4xl">
          {heading}
        </h2>

        {/* Toggle Slider */}
        <div className="flex items-center gap-2 bg-[#e8dcc8] rounded-full p-1 w-fit">
          <button
            onClick={() => setActiveTab("health")}
            className={`px-6 py-2 text-xs font-bold uppercase rounded-full transition-all ${
              activeTab === "health"
                ? "bg-[#8b4e0a] text-white"
                : "text-[#8b4e0a] hover:text-[#3d3226]"
            }`}
          >
            Health Issues
          </button>
          <button
            onClick={() => setActiveTab("lifestyle")}
            className={`px-6 py-2 text-xs font-bold uppercase rounded-full transition-all ${
              activeTab === "lifestyle"
                ? "bg-[#8b4e0a] text-white"
                : "text-[#8b4e0a] hover:text-[#3d3226]"
            }`}
          >
            Lifestyle Diseases
          </button>
        </div>

        <p className="text-[10px] font-bold uppercase text-[#8b4e0a]">
          Tap each one you experience
        </p>
      </div>

      {/* Symptom Grid with Swap Animation */}
      <div className="grid w-full max-w-2xl grid-cols-3 gap-4 sm:gap-6 lg:max-w-4xl lg:gap-8">
        {currentSymptoms.map(({ label, file }) => (
          <button
            key={label}
            type="button"
            className="flex flex-col items-center gap-2 text-center transition-opacity duration-300"
          >
            <div className="aspect-[102/108] w-full overflow-hidden rounded-[20px]">
              <img src={`/images/${file}`} alt={label} className="size-full object-cover" />
            </div>
            <span className="text-[11px] font-semibold text-[#3d3226] sm:text-sm lg:text-base">{label}</span>
          </button>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-1.5 text-center">
        <p className="w-[300px] max-w-full text-lg font-bold text-[#8b4e0a] sm:w-full sm:text-2xl">
          If your answer is YES, you are not alone.
        </p>
        <p className="w-[300px] max-w-full text-[13px] font-semibold text-[#3d3226] sm:w-full sm:text-lg">
          Divines Wellness Program helps you reset your lifestyle &amp; restore your well-being
          holistically.
        </p>
      </div>
    </section>
  );
}
