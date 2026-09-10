import type { Metadata } from "next";
import FaqList from "@/components/FaqList";

export const metadata: Metadata = {
  title: "FAQ | Divines Wellness Program",
  description:
    "Answers to common questions about the Divines Wellness Program — duration, what's included, consultations, and what to expect.",
};

export default function FaqPage() {
  return (
    <div className="flex w-full flex-col items-center bg-[#f5edd9]">
      {/* Page Title */}
      <div className="flex w-full flex-col items-center px-6 pb-8 pt-[52px]">
        <h1 className="w-[300px] max-w-full text-center text-[32px] font-bold leading-[1.2] tracking-[-0.5px] text-[#3d3326]">
          Frequently Asked Questions
        </h1>
      </div>

      <FaqList />
    </div>
  );
}
