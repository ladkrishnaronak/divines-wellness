"use client";

import { useState } from "react";

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
      <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#262016] px-4 py-3.5 h-[70px]">
        {/* Left Section */}
        <div className="flex items-center gap-2.5">
          {/* Hamburger Menu */}
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1 h-6 w-6 items-center justify-center text-white hover:opacity-80"
          >
            <div className="h-0.5 w-4.5 bg-white rounded-sm" />
            <div className="h-0.5 w-4.5 bg-white rounded-sm" />
            <div className="h-0.5 w-4.5 bg-white rounded-sm" />
          </button>

          {/* Logo */}
          <div className="border border-[#e6c594] rounded-full p-0.5 size-9 flex items-center justify-center overflow-hidden">
            <img src="/images/logo-circle.png" alt="Divines logo" className="size-full object-cover rounded-full" />
          </div>

          {/* Brand Name */}
          <p className="text-white font-bold text-xl whitespace-nowrap">
            The Divines Health
          </p>
        </div>

        {/* Right Section - Enroll Button */}
        <button
          className="border-[1.5px] border-white rounded-[6px] px-4 py-2 text-white font-bold text-sm whitespace-nowrap hover:bg-white/10"
        >
          Enroll
        </button>
      </header>

      {/* Header Spacer */}
      <div className="h-[70px]" />

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[70px] z-40 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="fixed left-0 right-0 top-[70px] z-40 flex flex-col bg-[#3d2a1f] shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#594d40] px-4 py-3.5 text-sm font-semibold text-white hover:bg-[#4a3a2a]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
