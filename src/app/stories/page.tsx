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
      {/* Page Title */}
      <div className="flex w-full max-w-2xl flex-col items-start gap-1 px-5 pb-5 pt-5 lg:max-w-6xl">
        <p className="text-xs font-medium leading-[1.4] tracking-[0.5px] text-[#4a3d2e]">
          Stories
        </p>
        <h1 className="text-2xl font-bold leading-[1.3] tracking-[-0.2px] text-[#3d3326]">
          Real people, real change
        </h1>
      </div>

      <StoryList />
    </div>
  );
}
