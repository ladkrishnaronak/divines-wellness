"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Stories", href: "#stories" },
  { label: "Articles", href: "#articles" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
  { label: "Enroll Now", href: "#enroll" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    setMenuOpen(false);

    // "Home" always returns to the top of the page
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Only query when there is an actual id after the "#"
    const id = href.slice(1);
    if (!id) return;

    const element = document.getElementById(id);
    if (element) {
      // Offset for the 70px fixed header
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

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
          onClick={() => handleNavClick("Enroll Now", "#enroll")}
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

      {/* Mobile Menu - Rounded Corner Card */}
      {menuOpen && (
        <nav className="fixed left-4 right-4 top-[85px] z-40 flex flex-col bg-[#3d2a1f] rounded-2xl shadow-lg overflow-hidden">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.label, link.href)}
              className={`px-5 py-4 text-sm font-semibold text-left transition-all ${
                activeLink === link.label
                  ? "bg-[#8b4e0a] text-white"
                  : "text-white hover:bg-[#4a3a2a]"
              } ${link !== navLinks[navLinks.length - 1] ? "border-b border-[#594d40]" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </>
  );
}
