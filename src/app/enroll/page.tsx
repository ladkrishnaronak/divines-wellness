import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enroll Now | Divines Wellness Program",
  description:
    "Start your Divines Wellness Program enrollment — see what happens next, from filling the form to setting up your first meeting.",
};

// Content below is taken verbatim from the Figma frame
// "Divines Wellness - Enroll Now (Mobile)" (node 157:503).
//
// NOTE ON SCOPE: this is the entry / overview screen of a three-part
// registration flow in Figma. The remaining screens are not built yet:
//   - THD_Registration_Step_2 (157:555) — the registration form
//   - THD_Confirmation_Page   (157:680) — the post-submit confirmation
// TODO: once the registration form route exists, step 2 below should become
// a <Link href="..."> — it is a clickable card in the Figma prototype. It is
// rendered as static text for now so this page cannot link to a 404.
//
// TODO: there is no backend. Nothing on this page submits anywhere, and the
// future registration form will need a real submission endpoint before launch.
const steps = [
  {
    number: "1",
    title: "Payment",
    // Descriptive copy only — this page collects no payment details.
    subtitle: "(Once you get confirmation)",
  },
  { number: "2", title: "Fill Form", subtitle: null },
  { number: "3", title: "Set Meeting", subtitle: null },
];

export default function EnrollPage() {
  return (
    <div className="flex w-full flex-1 flex-col bg-[#f5edd9]">
      {/* Onboarding card — full-bleed sheet on mobile, centered card on larger screens */}
      <section className="w-full self-center rounded-t-[28px] bg-[#fffcf7] px-6 pb-12 pt-8 shadow-[0px_-10px_12px_rgba(50,37,26,0.04)] sm:my-10 sm:max-w-lg sm:rounded-[28px] sm:shadow-[0px_8px_24px_rgba(50,37,26,0.08)] lg:max-w-xl lg:px-9">
        <h1 className="text-xs font-medium leading-[1.4] tracking-[0.5px] text-[#4a3d2e]">
          What Happens Next
        </h1>

        <ol className="mt-7 flex flex-col gap-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex items-center gap-3 rounded-[16px] border border-[#7a6542] bg-[#fffcf7] px-4 py-3.5 shadow-[0px_6px_8px_rgba(50,37,26,0.04)]"
            >
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#7a6542] text-base leading-[1.6] text-white"
              >
                {step.number}
              </span>

              <div className="flex min-w-0 flex-1 flex-col gap-0.5 leading-[1.6] text-[#4a3d2e]">
                <span className="text-base">
                  <span className="sr-only">{`Step ${step.number}: `}</span>
                  {step.title}
                </span>
                {step.subtitle && (
                  <span className="text-sm opacity-90">{step.subtitle}</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Cream spacer so the footer bar sits at the bottom on tall screens */}
      <div className="flex-1" />

      <div className="flex h-[54px] w-full items-center justify-center bg-[#3d3326]">
        <p className="text-xs font-medium leading-[1.4] tracking-[0.5px] text-white opacity-80">
          Your path to healing starts here
        </p>
      </div>
    </div>
  );
}
