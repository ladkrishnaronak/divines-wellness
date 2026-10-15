import type { Metadata } from "next";
import StoryList from "@/components/StoryList";

export const metadata: Metadata = {
  title: "Stories | Divines Wellness Program",
  description:
    "Real people, real change — stories from participants of The Divines Health yoga and wellness programs.",
};

export default function StoriesPage() {
  return (
    <div className="flex w-full flex-col items-center bg-[#f5edd9]">
      {/* Page Title — Figma node 119:24 */}
      <div className="container-site flex flex-col items-start gap-2 pb-5 pt-6 md:items-center md:pb-8 md:pt-10 md:text-center lg:pt-14">
        <h1 className="text-2xl font-semibold leading-[1.3] tracking-[-0.2px] text-[#1a140f] sm:text-3xl lg:text-4xl">
          What Our Students Say
        </h1>
        <p className="text-sm text-[#4a3d2e] md:text-base">Real people, real change — in their own words.</p>
      </div>

      <StoryList />
    </div>
  );
}
