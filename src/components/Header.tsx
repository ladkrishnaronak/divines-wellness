"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Stories", href: "/stories" },
  { label: "Articles", href: "/articles" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Enroll Now", href: "/enroll" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#262016] px-4 py-3.5 h-[70px]">
        {/* Left Section */}
        <div className="flex items-center gap-2.5">
          {/* Hamburger Menu */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1 h-6 w-6 items-center justify-center text-white hover:opacity-80"
          >
            <div className="h-0.5 w-4.5 bg-white rounded-sm" />
            <div className="h-0.5 w-4.5 bg-white rounded-sm" />
            <div className="h-0.5 w-4.5 bg-white rounded-sm" />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="border border-[#e6c594] rounded-full p-0.5 size-9 flex items-center justify-center overflow-hidden"
          >
            <img
              src="/images/logo-icon.png"
              alt="Divines logo"
              className="size-full object-cover rounded-full"
            />
          </Link>

          {/* Brand Name */}
          <Link href="/" className="text-white font-bold text-xl whitespace-nowrap">
            The Divines Health
          </Link>
        </div>

        {/* Right Section - Enroll Button */}
        <Link
          href="/enroll"
          className="border-[1.5px] border-white rounded-[6px] px-4 py-2 text-white font-bold text-sm whitespace-nowrap hover:bg-white/10"
        >
          Enroll
        </Link>
      </header>

      {/* Header Spacer */}
      <div className="h-[70px] shrink-0" />

      {/* Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[70px] z-40 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menu - matches Figma "Menu-*" frames (353:1064) */}
      {menuOpen && (
        <nav className="fixed left-4 right-4 top-[85px] z-40 flex flex-col overflow-hidden rounded-[25px] bg-[#3d3226] shadow-lg">
          <div className="flex w-full flex-col items-center py-[25px]">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex w-full items-center justify-center px-8 py-3.5 text-xl transition-colors ${
                    isActive
                      ? "bg-white font-bold text-[#3d3226]"
                      : "font-normal text-[#fffdf8] hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
}
