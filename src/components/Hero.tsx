import HeroVideo from "@/components/HeroVideo";

// Mobile & tablet: video on top, text below (centered).
// Desktop: text left (5 of 12 columns), large video right (7 of 12).
export default function Hero() {
  return (
    <section className="w-full bg-[#f5edde]">
      <div className="container-site grid gap-6 pb-10 pt-4 md:gap-8 md:pb-14 md:pt-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-16 xl:gap-16 xl:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 lg:order-2 lg:col-span-7 lg:max-w-none">
          <HeroVideo
            src="/videos/hero.mp4"
            poster="/images/hero-transformation.png"
            title="What we do, in a simple format"
          />
          <p className="text-center text-xs font-medium leading-4 tracking-[0.5px] text-[#2e261c] md:text-sm lg:text-left">
            Watch: What we do in simple format
          </p>
        </div>

        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center lg:order-1 lg:col-span-5 lg:mx-0 lg:items-start lg:gap-5 lg:text-left">
          <h1 className="text-[32px] font-extrabold leading-[1.15] tracking-[-0.5px] text-[#1a140f] sm:text-4xl md:text-[44px] xl:text-[52px]">
            Divines Wellness Program
          </h1>
          <p className="text-lg font-bold leading-snug text-[#1a140f] md:text-xl">
            &ldquo;A More Integrated Approach to Your Well being.&rdquo;
          </p>
          <p className="text-base font-medium leading-7 tracking-[0.2px] text-[#2e261c] md:text-[17px]">
            A personalised 3-month journey bringing together medical guidance, nutrition, yoga therapy, and mind coaching — thoughtfully designed to support those navigating autoimmune and lifestyle-related conditions, with a focus on recovery, balance, and long-term well-being.
          </p>
        </div>
      </div>
    </section>
  );
}
