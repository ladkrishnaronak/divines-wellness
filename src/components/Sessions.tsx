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
    name: "Doctor",
    detail: "Comprehensive health assessment, medical guidance for safe and sustainable transformation",
  },
  {
    name: "Mind Coach",
    detail: "Stress management, sleep optimization & emotional wellness",
  },
];

// Phones: heading then a list. Tablet: 2x2 cards. Desktop: 3 columns —
// heading on the left, the four experts as a 2x2 grid across the other two.
export default function Sessions() {
  return (
    <section className="relative w-full overflow-hidden bg-[#3d3326] py-11 md:py-14 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c99f6c 0, transparent 45%), radial-gradient(circle at 80% 60%, #f5edd8 0, transparent 45%)",
        }}
        aria-hidden
      />
      <div className="container-site relative z-10 grid gap-6 text-white md:gap-8 lg:grid-cols-3 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#e6c594]">Your care team</p>
          <h2 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
            6 Consultations Each (Every 15 Days) with:
          </h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-2 lg:gap-5">
          {consultants.map(({ name, detail }) => (
            <li
              key={name}
              className="flex flex-col gap-1.5 rounded-[16px] border border-white/12 bg-white/[0.06] p-4 md:p-5"
            >
              <p className="text-base font-bold text-[#f5e3c4] md:text-lg">{name}</p>
              <p className="text-sm leading-relaxed text-white/90 md:text-base">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
