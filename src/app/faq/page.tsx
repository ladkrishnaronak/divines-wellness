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
      <FaqList />
    </div>
  );
}
