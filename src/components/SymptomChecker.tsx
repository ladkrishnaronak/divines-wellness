const symptoms = [
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

export default function SymptomChecker() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-7 bg-[#faf7f2] px-6 pb-10 pt-11 sm:px-12">
      <div className="flex w-full flex-col items-center gap-2.5">
        <p className="text-[11px] font-bold uppercase text-[#c99f6c]">Looks familiar?</p>
        <h2 className="w-80 max-w-full text-center font-serif text-2xl font-bold leading-[1.25] text-[#3d3226] sm:w-full sm:text-4xl">
          Are these issues silently affecting your health &amp; Lifestyle?
        </h2>
        <p className="text-[10px] font-bold uppercase text-[#c99f6c]">
          Tap each one you experience
        </p>
      </div>

      <div className="grid w-full max-w-2xl grid-cols-3 gap-4 sm:gap-6">
        {symptoms.map(({ label, file }) => (
          <button
            key={label}
            type="button"
            className="flex flex-col items-center gap-2 text-center"
          >
            <div className="aspect-[102/108] w-full overflow-hidden rounded-[20px]">
              <img src={`/images/${file}`} alt={label} className="size-full object-cover" />
            </div>
            <span className="text-[11px] font-semibold text-[#3d3226] sm:text-sm">{label}</span>
          </button>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-1.5 text-center">
        <p className="w-[300px] max-w-full font-serif text-lg font-bold text-[#c99f6c] sm:w-full sm:text-2xl">
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
