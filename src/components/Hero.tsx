import HeroVideo from "@/components/HeroVideo";

export default function Hero() {
  return (
    <section className="w-full bg-[#f5edde] flex justify-center pt-[10px] rounded-b-[16px]">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center">
        {/* Hero video: always the full width of the centre column (edge to edge) */}
        <div className="flex w-full flex-col items-center">
          <div className="relative w-full overflow-hidden">
            <HeroVideo
              src="/videos/hero.mp4"
              poster="/images/hero-transformation.png"
              title="What we do, in a simple format"
              flush
            />
          </div>
          <p className="w-[350px] max-w-[90vw] text-center text-xs font-medium leading-4 tracking-[0.5px] text-[#2e261c]">
            Watch: What we do in simple format
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 items-center text-center px-5 pb-[15px] pt-[10px] max-w-2xl">
          <h1 className="max-w-[320px] text-[32px] font-extrabold text-[#1a140f] leading-[1.2] tracking-[-0.5px]">
            Divines Wellness Program
          </h1>

          <p className="max-w-[300px] text-lg leading-6 tracking-[0.15px] font-bold text-[#1a140f]">
            "A More Integrated Approach to Your Well being."
          </p>

          <p className="max-w-[320px] text-base font-medium leading-6 tracking-[0.5px] text-[#2e261c]">
            A personalised 3-month journey bringing together medical guidance, nutrition, yoga therapy, and mind coaching — thoughtfully designed to support those navigating autoimmune and lifestyle-related conditions, with a focus on recovery, balance, and long-term well-being.
          </p>
        </div>
      </div>
    </section>
  );
}