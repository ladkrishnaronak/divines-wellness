import HeroVideo from "@/components/HeroVideo";

export default function Hero() {
  return (
    <section className="w-full bg-[#f5edde] flex justify-center pt-[10px] px-4 rounded-b-[16px] md:rounded-none md:px-8 md:py-10 lg:px-10 lg:py-16">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center md:flex-row-reverse md:items-center md:gap-10 lg:gap-14">
        {/* Transformation Image */}
        <div className="flex flex-col items-center md:mb-0 md:w-[380px] md:max-w-[45%] md:shrink-0 lg:w-[440px]">
          <div className="relative w-[350px] max-w-[90vw] overflow-hidden rounded-[16px] md:w-full">
            <HeroVideo
              src="/videos/hero.mp4"
              poster="/images/hero-transformation.png"
              title="What we do, in a simple format"
            />
          </div>
          <p className="w-[350px] max-w-[90vw] text-center text-xs font-medium leading-4 tracking-[0.5px] text-[#2e261c] md:mt-2 md:w-auto md:text-sm">
            Watch: What we do in simple format
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 items-center text-center px-5 pb-[15px] pt-[10px] max-w-2xl md:items-start md:text-left md:px-0 md:py-0 lg:items-start lg:text-left lg:px-0 lg:py-0">
          <h1 className="max-w-[320px] text-[32px] sm:text-4xl md:max-w-none md:text-[44px] lg:text-5xl font-extrabold text-[#1a140f] leading-[1.2] tracking-[-0.5px]">
            Divines Wellness Program
          </h1>

          <p className="max-w-[300px] text-lg leading-6 tracking-[0.15px] md:max-w-none font-bold text-[#1a140f]">
            "A More Integrated Approach to Your Well being."
          </p>

          <p className="max-w-[320px] text-base font-medium leading-6 tracking-[0.5px] text-[#2e261c] md:max-w-md lg:max-w-lg">
            A personalised 3-month journey bringing together medical guidance, nutrition, yoga therapy, and mind coaching — thoughtfully designed to support those navigating autoimmune and lifestyle-related conditions, with a focus on recovery, balance, and long-term well-being.
          </p>
        </div>
      </div>
    </section>
  );
}