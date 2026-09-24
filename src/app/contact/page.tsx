import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";

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
function TwitterIcon(props: { size: number; className?: string }) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden="true">
      <path d="M3 3l7.5 9.5L3.3 21H6l5.2-6 4.7 6H21l-7.8-10L20.2 3H17.5l-4.8 5.6L8.4 3H3z" fill="currentColor" />
    </svg>
  );
}

// Content below follows the Figma "Divines Wellness - Contact Us (Mobile)"
// frame (node 25:376) for layout/style, with the real business details the
// Divines Wellness team supplied: address, phone/WhatsApp numbers, Google
// Maps link, and social profile URLs. The round icon in each row is the link
// (map, call, email); the text beside it is plain.
const contactRows = [
  {
    Icon: MapPin,
    label: "Our Location",
    action: "Open location in Google Maps",
    href: "https://maps.app.goo.gl/hE52bo27C2eADaPAA",
    lines: ["319-321, 4th Floor, Highfield Ascot, VIP Road, Vesu, Surat 395007"],
  },
  {
    Icon: Phone,
    label: "Call or WhatsApp",
    action: "Call +91 70161 00775",
    href: "tel:+917016100775",
    lines: ["+91 78620 83619 (WhatsApp)", "+91 70161 00775 (Call)"],
  },
  {
    Icon: Mail,
    label: "Email Us",
    action: "Email thedivineshealth@gmail.com",
    href: "mailto:thedivineshealth@gmail.com",
    lines: ["thedivineshealth@gmail.com"],
  },
];

const socials = [
  { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/divine.holistic.healing.world" },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/invites/contact/?i=1av3a52keth46&utm_content=4b0h5gf",
  },
  // TODO: Twitter/X handle not supplied yet — icon kept per Figma, wire up
  // once the real profile URL is shared.
  { Icon: TwitterIcon, label: "Twitter", href: null },
  { Icon: YoutubeIcon, label: "YouTube", href: "https://youtu.be/bMEUZrYnqrw?si=5jBQVGaUv7vLEcXg" },
];

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      {/* Title — Figma node 797:906: H2 (Poppins SemiBold 24px, tracking -0.2px).
          The design has no subtitle under the title, so none is shown here. */}
      <div className="flex w-full max-w-2xl flex-col items-start pb-2 pt-6 px-6 md:max-w-3xl md:px-10 lg:max-w-4xl">
        <h1 className="w-full text-2xl font-semibold leading-[1.3] tracking-[-0.2px] text-[#1a140f]">
          Contact Us
        </h1>
      </div>

      {/* Contact rows — Figma node 797:908 ("row-list") */}
      <div className="flex w-full max-w-2xl flex-col gap-6 px-6 pb-6 pt-5 md:max-w-3xl md:px-10 lg:max-w-4xl">
        {contactRows.map(({ Icon, label, action, href, lines }) => {
          const external = href.startsWith("http");
          return (
            <div key={label} className="flex w-full items-center gap-4 rounded-[16px] p-4">
              {/* The round icon is the tap target: opens Maps / dialer / email app */}
              
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={action}
                title={action}
                className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#b56f4a] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15),0px_2px_12px_0px_rgba(181,111,74,0.35)] transition-transform hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b56f4a]"
              >
                <Icon size={20} strokeWidth={2} className="text-white" aria-hidden="true" />
              </a>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="text-xl font-semibold leading-[1.4] text-[#1a140f]">{label}</p>
                {lines.map((text) => (
                  <p key={text} className="text-sm leading-[1.6] text-[#2e261c]">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom: socials + copyright — Figma node 797:931 ("bottom-container") */}
      <div className="flex w-full flex-col items-center gap-[15px] bg-[#f2ede3] pb-1.5 pt-[15px]">
        <div className="flex w-full flex-col items-center gap-3">
          <p className="text-base font-medium leading-[1.5] tracking-[0.1px] text-[#b56f4a]">
            Connect with us
          </p>
          <div className="flex items-center justify-center gap-3.5">
            {socials.map(({ Icon, label, href }) =>
              href ? (
                
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full bg-[#2e261c] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1),0px_2px_10px_0px_rgba(181,111,74,0.3)] transition-colors hover:bg-[#b56f4a]"
                >
                  <Icon size={18} className="text-white" />
                </a>
              ) : (
                <div
                  key={label}
                  aria-label={`${label} (coming soon)`}
                  title="Link coming soon"
                  className="flex size-10 items-center justify-center rounded-full bg-[#2e261c] opacity-50 shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1),0px_2px_10px_0px_rgba(181,111,74,0.3)]"
                >
                  <Icon size={18} className="text-white" />
                </div>
              )
            )}
          </div>
        </div>
        <p className="text-center text-[11px] font-medium leading-[1.4] tracking-[0.3px] text-[#2e261c] opacity-80">
          © 2026 The Divines Health. All rights reserved.
        </p>
      </div>
    </div>
  );
}
