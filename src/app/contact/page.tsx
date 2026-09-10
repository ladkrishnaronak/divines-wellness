import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Divines Wellness Program",
  description:
    "Ready to begin your journey? Send the Divines Wellness team a message and we will reach out within 24 hours to confirm your spot.",
};

// TODO: The Figma design (node 25:376) shows "WhatsApp" and "Call Us" buttons and
// the location "Surat, Gujarat, India", but contains NO phone number, email
// address or social handle anywhere. Nothing has been invented here — the two
// buttons below are intentionally inert until the team supplies real details.
// Once provided, turn them into <a href="https://wa.me/..."> and <a href="tel:...">.
const CONTACT_DETAILS_AVAILABLE = false;

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col items-center bg-[#f5edd9]">
      {/* Final CTA banner — Figma node 25:401 */}
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        {/* TODO: contact-hero.png is not yet in public/images/ — export it from Figma node 25:402. */}
        <img
          src="/images/contact-hero.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(60,40,20,0.55)]" />

        <div className="relative flex w-full max-w-2xl flex-col items-center justify-center gap-5 px-7 py-12 text-white sm:py-16 lg:max-w-3xl lg:py-24">
          <p className="text-xs font-medium leading-[1.4] tracking-[0.5px]">Begin Today</p>
          <h1 className="max-w-[300px] text-center text-[32px] font-bold leading-[1.2] tracking-[-0.5px] sm:max-w-none sm:text-[40px] lg:text-[48px]">
            Ready to begin your journey?
          </h1>
          <p className="max-w-[300px] text-center text-sm leading-[1.6] sm:max-w-md">
            Complete your enrollment below and our team will reach out within 24 hours to confirm
            your spot.
          </p>

          <a
            href="#contact-form"
            className="flex min-h-[48px] items-center justify-center rounded-[30px] bg-white px-10 py-4 text-center text-sm font-semibold leading-[1.4] tracking-[0.2px] text-[#3d3326] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#fffdf8]"
          >
            Enroll Now - Start Your Journey
          </a>

          <a
            href="#contact-form"
            className="flex min-h-[44px] items-center justify-center rounded-[30px] border border-white px-7 py-3 text-center text-sm font-semibold leading-[1.4] tracking-[0.2px] text-white transition-colors hover:bg-white/15"
          >
            Or book a free 1:1 call
          </a>

          <p className="max-w-[300px] text-center text-xs font-medium leading-[1.4] tracking-[0.5px]">
            🔒 Your details stay private. We never share them.
          </p>
        </div>
      </section>

      {/* Enquiry form — not present in the Figma frame, see ContactForm.tsx */}
      <section
        id="contact-form"
        className="flex w-full scroll-mt-20 flex-col items-center gap-6 bg-[#faf7f2] px-6 pb-12 pt-11"
      >
        <div className="flex w-full max-w-md flex-col items-center gap-3">
          <h2 className="text-center text-2xl font-bold text-[#3d3326] sm:text-3xl">
            Send us a message
          </h2>
          <p className="max-w-md text-center text-sm leading-[1.6] text-[#4a3d2e]">
            Share a few details and our team will get back to you within 24 hours.
          </p>
        </div>

        <ContactForm />
      </section>

      {/* Footer — Figma node 25:414 */}
      <footer className="flex w-full flex-col items-center justify-center gap-4 bg-[#3d3326] px-6 pb-8 pt-9">
        <p className="text-xs font-semibold leading-[1.4] tracking-[1.5px] text-white">
          🌿 DIVINES WELLNESS PROGRAM
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            disabled={!CONTACT_DETAILS_AVAILABLE}
            title="WhatsApp number coming soon"
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-[24px] bg-white px-5 py-3 text-sm font-semibold leading-[1.4] tracking-[0.2px] text-[#4a3d2e] disabled:cursor-not-allowed disabled:opacity-80"
          >
            <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
            WhatsApp
          </button>

          <button
            type="button"
            disabled={!CONTACT_DETAILS_AVAILABLE}
            title="Phone number coming soon"
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-[24px] bg-white px-5 py-3 text-sm font-semibold leading-[1.4] tracking-[0.2px] text-[#4a3d2e] disabled:cursor-not-allowed disabled:opacity-80"
          >
            <Phone size={18} strokeWidth={2} aria-hidden="true" />
            Call Us
          </button>
        </div>

        <div className="h-px w-full max-w-2xl bg-white/60" />

        <p className="max-w-[300px] text-center text-xs font-medium leading-[1.4] tracking-[0.5px] text-white">
          📍 Surat, Gujarat, India
        </p>
        <p className="max-w-[300px] text-center text-base leading-[1.6] text-white">
          You don&apos;t just heal - you return to balance.
        </p>
        <p className="max-w-[300px] text-center text-xs font-medium leading-[1.4] tracking-[0.5px] text-white">
          Prototype · Research Version B winner · A/B test
        </p>
      </footer>
    </div>
  );
}
