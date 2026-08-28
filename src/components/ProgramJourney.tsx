const pillars = [
  {
    tag: "pillar 01",
    title: "Foundation",
    subtitle: "Identify triggers",
    tags: "Assess • Diagnose • Personalize",
    file: "pillar-foundation.png",
  },
  {
    tag: "pillar 02",
    title: "Vitality",
    subtitle: "Restore gut & energy",
    tags: "Heal • Nourish • Energize",
    file: "pillar-vitality.png",
  },
  {
    tag: "pillar 03",
    title: "Balance",
    subtitle: "Regulate stress & hormones",
    tags: "Regulate • Calm • Stabilize",
    file: "pillar-balance.png",
  },
  {
    tag: "pillar 04",
    title: "Liberation",
    subtitle: "Sustain long-term",
    tags: "Sustain • Protect • Empower",
    file: "pillar-liberation.png",
  },
];

export default function ProgramJourney() {
  return (
    <section className="flex w-full flex-col items-center gap-7 bg-[#fffdf8] px-5 py-11 sm:px-10">
      <div className="flex w-full flex-col items-center gap-2.5">
        <span className="rounded-[20px] bg-[#f0e8d6] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-[#c99f6c]">
          The Journey
        </span>
        <h2 className="text-center font-serif text-[26px] font-bold leading-[1.2] text-[#3d3226] sm:text-4xl">
          3 Months – 4D Structured Healing Journey
        </h2>
        <p className="max-w-md text-center text-[13px] leading-[1.5] text-[#a9a190] sm:text-base">
          Personalized Guidance – Plans tailored to your unique needs &amp; health goals
        </p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-2 gap-3.5 sm:gap-6 md:grid-cols-4">
        {pillars.map(({ tag, title, subtitle, tags, file }) => (
          <article
            key={title}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_16px_0px_rgba(0,0,0,0.1)]"
          >
            <div className="relative h-[140px] w-full shrink-0">
              <img src={`/images/${file}`} alt={title} className="size-full object-cover" />
              <span className="absolute bottom-2.5 left-2.5 rounded-md bg-[#2d4a3e] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.8px] text-white">
                {tag}
              </span>
            </div>
            <div className="flex flex-col gap-1 px-3 pb-3.5 pt-3">
              <h3 className="font-serif text-[17px] font-bold text-[#3d3226]">{title}</h3>
              <p className="text-[11px] italic leading-[1.4] text-[#c99f6c]">{subtitle}</p>
              <p className="text-[11px] leading-[1.45] text-[#8a8070]">{tags}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
