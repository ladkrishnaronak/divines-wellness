"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Stories", href: "#" },
  { label: "Articles", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Enroll Now", href: "#enroll" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center gap-3 bg-[#2c1a0e] px-4 py-2 shadow-[0_2px_4px_rgba(0,0,0,0.06)] sm:px-8 sm:py-3">
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-7 shrink-0 items-center justify-center text-white"
        >
          {menuOpen ? <X size={22} strokeWidth={2.25} /> : <Menu size={22} strokeWidth={2.25} />}
        </button>
        <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
          <img src="/images/logo-circle.png" alt="Divines Wellness Program logo" className="size-full object-cover" />
        </div>
        <p className="flex-1 truncate font-sans text-xs font-bold uppercase text-white sm:text-sm">
          Divines Wellness
        </p>
        <a
          href="#enroll"
          className="shrink-0 rounded-[20px] border border-white px-4 py-1.5 text-xs font-bold text-white sm:px-6 sm:py-2 sm:text-sm"
        >
          Enroll
        </a>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[52px] z-40 bg-black/40 sm:top-[60px]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute left-0 right-0 top-[52px] z-40 flex flex-col gap-0 bg-[#3d2a1f] shadow-lg sm:top-[60px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#594d40] px-4 py-3.5 text-sm font-semibold text-white hover:bg-[#4a3a2a] sm:px-8"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
