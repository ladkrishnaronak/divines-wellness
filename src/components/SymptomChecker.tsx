"use client";

import { useState } from "react";

const healthSymptoms = [
  { label: "Constant Fatigue", file: "symptom-fatigue.png" },
  { label: "Weight Gain", file: "symptom-weight.png" },
  { label: "Hair Fall", file: "symptom-hairfall.png" },
  { label: "Mood Swings", file: "symptom-mood.png" },
  { label: "Irregular Cycles", file: "symptom-cycles.png" },
  { label: "Brain Fog", file: "symptom-brainfog.png" },
  { label: "Dry Skin", file: "symptom-dryskin.png" },
  { label: "Cold & Constipation", file: "symptom-cold.png" },
  { label: "Heart Palpitations", file: "symptom-heart.png" },
];

const lifestyleSymptoms = [
  { label: "Poor Sleep", file: "symptom-sleep.png" },
  { label: "Sedentary Lifestyle", file: "symptom-sedentary.png" },
  { label: "Stress", file: "symptom-stress.png" },
  { label: "Irregular Eating", file: "symptom-eating.png" },
  { label: "Screen Time", file: "symptom-screen.png" },
  { label: "Lack of Exercise", file: "symptom-exercise.png" },
  { label: "Poor Digestion", file: "symptom-digestion.png" },
  { label: "Hormonal Imbalance", file: "symptom-hormonal.png" },
  { label: "Energy Depletion", file: "symptom-energy.png" },
];

export default function SymptomChecker() {
  const [activeTab, setActiveTab] = useState<"health" | "lifestyle">("health");

  const currentSymptoms = activeTab === "health" ? healthSymptoms : lifestyleSymptoms;
  const heading =
    activeTab === "health"
      ? "Are these silent health conditions affecting you?"
      : "Are these lifestyle patterns silently stealing your vitality?";

  return (
    <section className="flex w-full flex-col items-center justify-center gap-7 bg-[#ede0bd] px-6 pb-10 pt-11 sm:px-12">
      <div className="flex w-full flex-col items-center gap-4">
        <p className="text-[11px] font-bold uppercase text-[#8b4e0a]">Looks familiar?</p>
        <h2 className="w-80 max-w-full text-center font-serif text-2xl font-bold leading-[1.25] text-[#3d3226] sm:w-full sm:text-4xl">
          {heading}
        </h2>

        {/* Toggle Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("health")}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase transition-all ${
              activeTab === "health"
                ? "bg-[#8b4e0a] text-white"
                : "border-2 border-[#8b4e0a] text-[#8b4e0a] hover:bg-[#8b4e0a] hover:text-white"
            }`}
          >
            Health Issues
          </button>
          <button
            onClick={() => setActiveTab("lifestyle")}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase transition-all ${
              activeTab === "lifestyle"
                ? "bg-[#8b4e0a] text-white"
                : "border-2 border-[#8b4e0a] text-[#8b4e0a] hover:bg-[#8b4e0a] hover:text-white"
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
      <div className="grid w-full max-w-2xl grid-cols-3 gap-4 sm:gap-6">
        {currentSymptoms.map(({ label, file }) => (
          <button
            key={label}
            type="button"
            className="flex flex-col items-center gap-2 text-center transition-opacity duration-300"
          >
            <div className="aspect-[102/108] w-full overflow-hidden rounded-[20px]">
              <img src={`/images/${file}`} alt={label} className="size-full object-cover" />
            </div>
            <span className="text-[11px] font-semibold text-[#3d3226] sm:text-sm">{label}</span>
          </button>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-1.5 text-center">
        <p className="w-[300px] max-w-full font-serif text-lg font-bold text-[#8b4e0a] sm:w-full sm:text-2xl">
          If your answer is YES, you are not alone.
        </p>
        <p className="w-[300px] max-w-full font-serif text-[13px] font-semibold text-[#3d3226] sm:w-full sm:text-lg">
          Divines Wellness Program helps you reset your lifestyle &amp; restore your well-being
          holistically.
        </p>
      </div>
    </section>
  );
}
