import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-[#f5edde] flex justify-center pt-3 pb-6 px-4 md:px-8 md:py-10 lg:px-10 lg:py-16">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center md:flex-row-reverse md:items-center md:gap-10 lg:gap-14">
        {/* Transformation Image */}
        <div className="flex flex-col items-center mb-5 md:mb-0 md:w-[380px] md:max-w-[45%] md:shrink-0 lg:w-[440px]">
          <div className="relative w-[350px] max-w-[90vw] overflow-hidden rounded-[16px] md:w-full">
            <img
              src="/images/hero-transformation.png"
              alt="A wilted plant transforming into a thriving one, representing the Divines Wellness journey"
              className="w-full h-auto object-cover"
            />
            {/* Decorative play badge — mirrors the Figma "Video Thumbnail" treatment.
                Non-interactive: there is no video source wired up yet. */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(122,101,66,0.75)] md:size-14"
            >
              <Play size={18} fill="white" className="text-white ml-0.5 md:size-6" />
            </div>
          </div>
          <p className="mt-2 text-xs font-medium text-[#7a6a55] md:text-sm">
            Watch: What we do in simple format
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 items-center text-center px-5 pb-6 pt-5 max-w-2xl md:items-start md:text-left md:px-0 md:py-0 lg:items-start lg:text-left lg:px-0 lg:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-5xl font-bold text-[#3d3326] leading-tight">
            Divines Wellness Program
          </h1>

          <p className="text-base md:text-lg lg:text-lg font-bold text-[#3d3326]">
            "A More Integrated Approach to Your Wellbeing."
          </p>

          <p className="text-base leading-relaxed text-[#4a3d2e] max-w-sm md:max-w-md lg:max-w-lg">
            A personalized 3-month journey bringing together medical guidance, nutrition, yoga therapy and mind coaching — thoughtfully designed for autoimmune and lifestyle disease reversal.
          </p>
        </div>
      </div>
    </section>
  );
}
