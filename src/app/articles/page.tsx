import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles | Divines Wellness Program",
  description:
    "Articles from the Divines Wellness team on holistic health, nutrition, yoga therapy, and mind coaching — coming soon.",
};

export default function ArticlesPage() {
  return (
    <div className="flex w-full flex-1 flex-col items-center bg-[#f5edd9]">
      {/* Page Title — Figma node 333:2146 */}
      <div className="flex w-full flex-col items-center px-6 pb-8 pt-[52px]">
        <h1 className="w-[300px] max-w-full text-center text-[32px] font-bold leading-[1.2] tracking-[-0.5px] text-[#3d3326]">
          Coming soon...
        </h1>
      </div>

      {/* NOTE: The Figma frame (333:2134) contains only the heading above.
          The supporting line and link below are placeholder copy written to
          keep the page usable — replace with real content when the Articles
          section is designed. */}
      <div className="flex w-full max-w-md flex-col items-center gap-6 px-6 pb-16 text-center">
        <p className="text-sm leading-[1.7] text-[#4a3d2e]">
          We&rsquo;re putting together articles on nutrition, yoga therapy, and mind
          coaching from the Divines Wellness team. Check back shortly.
        </p>

        <Link
          href="/"
          className="rounded-[16px] border-[1.5px] border-[#3d3326] px-6 py-2.5 text-sm font-bold text-[#3d3326] transition-colors hover:bg-[#3d3326] hover:text-white"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
