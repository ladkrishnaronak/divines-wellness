import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Divines Wellness Program",
  description:
    "Get in touch with The Divines Health — our location, phone/WhatsApp number, email address, and social profiles.",
};

// lucide-react no longer ships social brand glyphs, so these are minimal
// hand-authored icons matching the simple pictograms Figma shows.
function FacebookIcon(props: { size: number; className?: string }) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden="true">
      <path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v3.5H8V21h3.5v-7.5h2.7l.3-3.5h-3V7.5c0-.83.67-1.5 1.5-1.5H15V3z" fill="currentColor" />
    </svg>
  );
}
function InstagramIcon(props: { size: number; className?: string }) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={props.className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YoutubeIcon(props: { size: number; className?: string }) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="4" stroke="currentColor" strokeWidth={2} />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
    </svg>
  );
}

// Content below follows the Figma "Divines Wellness - Contact Us (Mobile)"
// frame (node 25:376) for layout/style, with the real business details the
// Divines Wellness team supplied: address, phone/WhatsApp numbers, Google
// Maps link, and social profile URLs. Each line links to the matching action
// (map, call, WhatsApp chat, email) instead of the row as a whole.
const contactRows = [
  {
    Icon: MapPin,
    label: "Our Location",
    lines: [
      {
        text: "319-321, 4th Floor, Highfield Ascot, VIP Road, Vesu, Surat 395007",
        href: "https://maps.app.goo.gl/hE52bo27C2eADaPAA",
      },
    ],
  },
  {
    Icon: Phone,
    label: "Call or WhatsApp",
    lines: [
      { text: "+91 78620 83619 (WhatsApp)", href: "https://wa.me/917862083619" },
      { text: "+91 70161 00775 (Call)", href: "tel:+917016100775" },
    ],
  },
  {
    Icon: Mail,
    label: "Email Us",
    lines: [{ text: "thedivineshealth@gmail.com", href: "mailto:thedivineshealth@gmail.com" }],
  },
];

const socials = [
  { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/divine.holistic.healing.world" },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/invites/contact/?i=1av3a52keth46&utm_content=4b0h5gf",
  },
  { Icon: YoutubeIcon, label: "YouTube", href: "https://youtu.be/bMEUZrYnqrw?si=5jBQVGaUv7vLEcXg" },
];

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      {/* Title */}
      <div className="flex w-full max-w-2xl flex-col items-start gap-0.5 px-6 pb-2 pt-6 md:max-w-3xl md:px-10 lg:max-w-4xl">
        <h1 className="text-[22px] font-bold text-[#1a140f]">Contact Us</h1>
        <p className="text-sm font-medium text-[#7a6642]">
          The Divines Health · Internationally Registered Yoga School
        </p>
      </div>

      {/* Contact rows */}
      <div className="flex w-full max-w-2xl flex-col gap-6 px-6 pb-6 pt-5 md:max-w-3xl md:px-10 lg:max-w-4xl">
        {contactRows.map(({ Icon, label, lines }) => (
          <div key={label} className="flex w-full items-center gap-4 rounded-[16px] p-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#b56f4a] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15),0px_2px_12px_0px_rgba(181,111,74,0.35)]">
              <Icon size={20} strokeWidth={2} className="text-white" aria-hidden="true" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="text-[15px] font-bold text-[#1a140f]">{label}</p>
              {lines.map(({ text, href }) => (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm leading-[1.4] text-[#2e261c] underline decoration-[#2e261c]/25 underline-offset-2 transition-colors hover:text-[#b56f4a] hover:decoration-[#b56f4a]"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom: socials + copyright */}
      <div className="flex w-full flex-col items-center gap-6 bg-[#f2ede3] pb-8 pt-5">
        <div className="flex w-full flex-col items-center gap-3">
          <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#b56f4a]">
            Connect with us
          </p>
          <div className="flex items-center justify-center gap-3.5">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full bg-[#2e261c] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1),0px_2px_10px_0px_rgba(181,111,74,0.3)] transition-colors hover:bg-[#b56f4a]"
              >
                <Icon size={18} className="text-white" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-[11px] font-medium tracking-[0.5px] text-[#2e261c] opacity-80">
          © 2026 The Divines Health. All rights reserved.
        </p>
      </div>
    </div>
  );
}
