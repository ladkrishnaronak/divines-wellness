import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#f5edde] pt-5">
      <div className="relative h-[200px] w-[350px] max-w-[90vw] overflow-hidden rounded-2xl sm:h-[320px] sm:w-[560px] lg:h-[420px] lg:w-[740px]">
        <img
          src="/images/video-thumbnail.png"
          alt="Divines Wellness Program video thumbnail"
          className="size-full object-cover"
        />
        <button
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex size-[25px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden bg-[rgba(201,159,108,0.75)] sm:size-10"
        >
          <Play size={14} className="translate-x-px fill-white text-white sm:hidden" />
          <Play size={20} className="hidden translate-x-px fill-white text-white sm:block" />
        </button>
      </div>
      <p className="mt-2 text-center text-[10px] text-[#8c7d66] sm:text-xs">
        Watch: Divines Wellness Program — what we do in simple format
      </p>

      <div className="flex w-full flex-col items-center gap-4 px-6 pb-10 pt-6 text-center sm:max-w-2xl sm:px-8">
        <h1 className="w-[320px] max-w-full font-serif text-[30px] font-bold leading-[1.2] text-[#3d3226] sm:w-full sm:text-5xl">
          Your Trusted Place for Wellness
        </h1>
        <p className="w-[300px] max-w-full text-[15px] font-bold text-[#a88f6d] sm:w-full sm:text-lg">
          Heal • Balance • Prevent • Thrive
        </p>
        <p className="w-[320px] max-w-full text-[13px] leading-[1.6] text-[#7b6e5d] sm:w-full sm:text-base">
          Health is not the absence of disease—it&rsquo;s the presence of energy, clarity, and{" "}
          <span className="font-bold">balance in everything you do. </span>
          The Divines Health Program is a 3-month journey to restore your body,
          <span className="font-bold"> retrain your habits</span>, and prevent{" "}
          <span className="font-bold">disease before it starts.</span> Science-backed.
          Holistically guided. Built for lasting change.
        </p>
      </div>
    </section>
  );
}
