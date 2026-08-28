import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center gap-3 bg-[#fffdf8] px-4 py-2 shadow-[0_2px_4px_rgba(0,0,0,0.06)] sm:px-8 sm:py-3">
      <button
        aria-label="Open menu"
        className="flex size-7 shrink-0 items-center justify-center text-[#7a6a55]"
      >
        <Menu size={22} strokeWidth={2.25} />
      </button>
      <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
        <img src="/images/logo-circle.png" alt="Divines Wellness Program logo" className="size-full object-cover" />
      </div>
      <p className="flex-1 truncate font-sans text-xs font-bold uppercase text-[#3d3226] sm:text-sm">
        Divines Wellness Program
      </p>
      <a
        href="#enroll"
        className="shrink-0 rounded-[20px] bg-[#7a6a55] px-4.5 py-2 text-xs font-bold text-white sm:px-6 sm:py-2.5 sm:text-sm"
      >
        Enroll
      </a>
    </header>
  );
}
