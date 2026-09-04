export default function Hero() {
  return (
    <section className="w-full bg-[#f5edde] flex flex-col items-center justify-center pt-3 pb-6">
      {/* Video Thumbnail */}
      <div className="relative h-[200px] w-[350px] max-w-[90vw] overflow-hidden rounded-[16px] mb-3">
        <img
          src="/images/video-thumbnail.png"
          alt="Divines Wellness Program video"
          className="size-full object-cover"
        />
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(122,101,66,0.75)] rounded-lg size-6 sm:size-10 flex items-center justify-center text-white hover:bg-[rgba(122,101,66,0.9)]">
          <span className="text-sm sm:text-base">▶</span>
        </button>
      </div>

      {/* Caption */}
      <p className="text-center text-[12px] text-[#4a3d2e] mb-5">
        Watch: What we do in simple format
      </p>

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
