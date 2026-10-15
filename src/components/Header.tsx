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
      <header className="fixed top-0 z-50 flex h-[70px] w-full items-center bg-[#262016]">
        <div className="container-site flex items-center justify-between gap-3">
          {/* Left Section */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-3.5">
            {/* Hamburger Menu */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="-ml-2.5 flex size-11 shrink-0 flex-col items-center justify-center gap-1 rounded-full text-white hover:bg-white/10 lg:hidden"
            >
              <div className="h-0.5 w-4.5 bg-white rounded-sm" />
              <div className="h-0.5 w-4.5 bg-white rounded-sm" />
              <div className="h-0.5 w-4.5 bg-white rounded-sm" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="border border-[#e6c594] rounded-full size-9 flex shrink-0 items-center justify-center overflow-hidden sm:size-10"
            >
              <img
                src="/images/logo-icon.png"
                alt="Divines logo"
                className="size-full object-cover rounded-full"
              />
            </Link>

            {/* Brand Name */}
            <Link
              href="/"
              className="min-w-0 truncate text-base font-bold text-white sm:text-xl xl:text-2xl"
            >
              The Divines Health
            </Link>
          </div>

          {/* Desktop: inline menu */}
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {navLinks.filter((l) => l.href !== "/enroll").map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2.5 text-[15px] transition-colors ${
                    isActive ? "bg-white/12 font-semibold text-white" : "font-medium text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Section - Enroll Button */}
          <Link
            href="/enroll"
            className="flex min-h-10 shrink-0 items-center whitespace-nowrap rounded-[8px] border-[1.5px] border-white px-4 text-sm font-bold text-white hover:bg-white/10 sm:px-5 sm:text-base lg:border-[#e6c594] lg:bg-[#e6c594] lg:text-[#262016] lg:hover:bg-[#f0d6ad]"
          >
            Enroll<span className="hidden lg:inline">&nbsp;Now</span>
          </Link>
        </div>
      </header>

      {/* Header Spacer */}
      <div className="h-[70px] shrink-0" />

      {/* Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[70px] z-40 bg-black/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menu - matches Figma "Menu-*" frames (353:1064): a compact 217px-wide
          dropdown anchored under the hamburger, not a full-width bar. */}
      {menuOpen && (
        <nav aria-label="Main" className="fixed left-4 top-[85px] z-40 flex lg:hidden w-[217px] flex-col overflow-hidden rounded-[25px] bg-[#3d3326] shadow-lg">
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
                      ? "bg-white font-bold text-[#3d3326]"
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
