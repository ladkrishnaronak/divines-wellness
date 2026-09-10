export default function Hero() {
  return (
    <section className="w-full bg-[#f5edde] flex flex-col items-center justify-center pt-3 pb-6">
      {/* Transformation Image */}
      <div className="relative w-[350px] max-w-[90vw] overflow-hidden rounded-[16px] mb-5">
        <img
          src="/images/hero-transformation.png"
          alt="A wilted plant transforming into a thriving one, representing the Divines Wellness journey"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 items-center text-center px-5 pb-6 pt-5 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#3d3326] leading-tight">
          Divines Wellness Program
        </h1>

        <p className="text-base font-bold text-[#3d3326]">
          "A More Integrated Approach to Your Wellbeing."
        </p>

        <p className="text-base leading-relaxed text-[#4a3d2e] max-w-sm">
          A personalized 3-month journey bringing together medical guidance, nutrition, yoga therapy and mind coaching — thoughtfully designed for autoimmune and lifestyle disease reversal.
        </p>
      </div>
    </section>
  );
}
