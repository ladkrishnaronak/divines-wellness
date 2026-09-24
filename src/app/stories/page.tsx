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
      <div className="flex w-full max-w-2xl flex-col items-start px-5 pb-5 pt-5 md:max-w-4xl md:px-8">
        <h1 className="text-2xl font-semibold leading-[1.3] tracking-[-0.2px] text-[#1a140f]">
          What Our Students Say
        </h1>
      </div>

      <StoryList />
    </div>
  );
}
