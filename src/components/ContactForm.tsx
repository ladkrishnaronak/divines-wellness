"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

// TODO: This form has NO backend. `handleSubmit` only updates local UI state —
// nothing is sent anywhere and no enquiry is stored or delivered. Before launch,
// wire this to a real submission endpoint (a Next.js route handler, or the team's
// CRM/email provider) and handle server-side validation + error states.
//
// NOTE: The Figma frame for the Contact Us page (node 25:376) contains no form
// fields at all — only the CTA banner and footer. The fields below are the
// minimum needed to answer the design's promise that "our team will reach out
// within 24 hours". Deliberately limited to contact details only: do not add
// health, symptom, or medical-history questions here.

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClasses =
  "min-h-[48px] w-full rounded-[12px] border border-[#e8d9be] bg-[#fffcf7] px-3.5 py-3 text-sm leading-[1.6] text-[#4a3d2e] outline-none transition-colors placeholder:text-[#bfa882] focus:border-[#8b4e0a] focus:ring-2 focus:ring-[#8b4e0a]/20";

const errorInputClasses = "border-[#a33a0f] focus:border-[#a33a0f] focus:ring-[#a33a0f]/20";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(): Errors {
    const next: Errors = {};

    if (!name.trim()) {
      next.name = "Please enter your name.";
    }

    if (!email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      next.email = "Please enter a valid email address, e.g. name@example.com.";
    }

    if (!message.trim()) {
      next.message = "Please tell us a little about what you are looking for.";
    }

    return next;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // No network call happens here — see the TODO at the top of this file.
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex w-full max-w-md flex-col items-center gap-3 rounded-[20px] border border-[#ebe3cf] bg-[#fffdf8] px-6 py-10 text-center shadow-[0_8px_24px_rgba(61,50,38,0.06)] lg:max-w-lg"
      >
        <CheckCircle2 size={40} strokeWidth={1.75} className="text-[#8b4e0a]" aria-hidden="true" />
        <h3 className="text-lg font-bold text-[#3d3326]">Thank you, {name.trim().split(" ")[0]}.</h3>
        <p className="max-w-sm text-sm leading-[1.7] text-[#4a3d2e]">
          Your details have been captured on this page. Our team aims to reach out within 24 hours
          to talk through your goals and answer your questions.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-2 min-h-[44px] rounded-[16px] border-[1.5px] border-[#3d3326] px-6 text-sm font-bold text-[#3d3326] transition-colors hover:bg-[#3d3326] hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full max-w-md flex-col gap-5 rounded-[20px] border border-[#ebe3cf] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(61,50,38,0.06)] lg:max-w-lg lg:p-8"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-sm font-semibold text-[#3d3326]">
          Full name <span className="text-[#8b4e0a]">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          aria-required="true"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={`${inputClasses} ${errors.name ? errorInputClasses : ""}`}
        />
        {errors.name && (
          <p id="contact-name-error" className="text-xs text-[#a33a0f]">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-sm font-semibold text-[#3d3326]">
          Email address <span className="text-[#8b4e0a]">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          aria-required="true"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={`${inputClasses} ${errors.email ? errorInputClasses : ""}`}
        />
        {errors.email && (
          <p id="contact-email-error" className="text-xs text-[#a33a0f]">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-phone" className="text-sm font-semibold text-[#3d3326]">
          Phone <span className="font-normal text-[#7d6e5e]">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Where we can call you"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-semibold text-[#3d3326]">
          How can we help? <span className="text-[#8b4e0a]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you would like to know about the program."
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`${inputClasses} resize-y`}
        />
        {errors.message && (
          <p id="contact-message-error" className="text-xs text-[#a33a0f]">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="flex min-h-[48px] items-center justify-center gap-2 rounded-[16px] bg-[#3d3326] px-6 text-sm font-bold text-white transition-colors hover:bg-[#2a1f19] disabled:opacity-70"
      >
        {submitting && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
        {submitting ? "Sending..." : "Send message"}
      </button>

      <p className="text-center text-xs leading-[1.6] text-[#7d6e5e]">
        🔒 Your details stay private. We never share them.
      </p>
    </form>
  );
}
