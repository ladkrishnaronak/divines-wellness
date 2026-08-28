const founders = [
  {
    name: "Dr. Neha Solanki",
    role: "Medical Consultant & Mind Coach",
    file: "founder-neha.png",
  },
  {
    name: "Priyanka Patel",
    role: "Yoga Therapist & Life Coach",
    file: "founder-priyanka.png",
  },
];

export default function Founders() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-7 bg-[#fffdf8] px-6 pb-10 pt-11 sm:px-12">
      <h2 className="w-full font-serif text-[22px] font-bold uppercase text-[#c99f6c] sm:text-center sm:text-3xl">
        Meet The Founders
      </h2>
      <p className="text-center text-[13px] leading-[1.5] text-[#594d40]/70 sm:max-w-xl sm:text-base">
        They didn&rsquo;t just study wellness — they lived it. Two doctors who healed from within,
        now guiding you to do the same.
      </p>

      <div className="flex w-full max-w-xl gap-4">
        {founders.map(({ name, role, file }) => (
          <div
            key={name}
            className="flex flex-1 flex-col items-center gap-2.5 rounded-2xl bg-[#fffdf8] px-3 py-5 shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
          >
            <div className="size-25 overflow-hidden rounded-full">
              <img src={`/images/${file}`} alt={name} className="size-full object-cover" />
            </div>
            <p className="text-center font-serif text-sm font-bold text-[#3d3226] sm:text-lg">
              {name}
            </p>
            <p className="text-center text-xs font-medium text-[#c99f6c] sm:text-sm">{role}</p>
          </div>
        ))}
      </div>

      <p className="max-w-md text-center font-serif text-[13px] italic leading-[1.6] text-[#785e40]/85 sm:text-base">
        &ldquo;True healing begins when we align our medical health with a quiet, resilient
        mind.&rdquo;
      </p>

      <div id="enroll" className="flex h-11 w-full max-w-xl gap-3">
        <button
          type="button"
          className="flex-1 rounded-2xl border-[1.5px] border-[#7a6a55] text-base font-semibold text-[#7a6a55]"
        >
          Browse More
        </button>
        <button type="button" className="flex-1 rounded-2xl bg-[#7a6a55] text-base font-semibold text-white">
          Enroll Now
        </button>
      </div>
    </section>
  );
}
