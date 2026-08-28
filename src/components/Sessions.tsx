const consultants = [
  {
    name: "Dietician",
    detail: "Personalized nutrition planning for balance, energy & prevention",
  },
  {
    name: "Yoga Therapist",
    detail: "Therapeutic yoga & pranayama for strength, flexibility & vitality",
  },
  {
    name: "Ayurveda Coach",
    detail: "Time-tested herbal & lifestyle protocols to restore balance",
  },
  {
    name: "Mind Coach",
    detail: "Stress management, sleep optimization & emotional wellness",
  },
];

export default function Sessions() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#3d3226] px-6 py-11 sm:px-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c99f6c 0, transparent 45%), radial-gradient(circle at 80% 60%, #f5edd8 0, transparent 45%)",
        }}
        aria-hidden
      />
      <div className="flex w-full max-w-2xl flex-col gap-5 text-white">
        <h2 className="font-serif text-[22px] font-bold leading-normal sm:text-3xl">
          6 Consultations Each (Every 15 Days) with:
        </h2>
        <ul className="flex flex-col gap-4">
          {consultants.map(({ name, detail }) => (
            <li key={name} className="flex gap-2.5 text-[14px] sm:text-base">
              <span aria-hidden>•</span>
              <p className="flex-1">
                <span className="font-bold">{name}</span> - {detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
