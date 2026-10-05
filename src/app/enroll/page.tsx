import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enroll Now | Divines Wellness Program",
  description:
    "Start your Divines Wellness Program enrollment: payment, confirmation, then your wellness and assessment forms.",
};

// Built from the Figma frame "Divines Wellness - Enroll (Mobile)" (node 157:503),
// which uses the "Onboarding / Step Card" component set (896:669).
// Icons are the exact Figma assets, saved in /public/images/icons.
//
// NOTE ON SCOPE: this is the overview screen. The payment, confirmation and
// form screens of the Enroll flow are still in client review (demo), so the
// cards are informational for now and do not link anywhere.

function StepBadge({ n, locked = false }: { n: number; locked?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex size-10 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white ${
        locked ? "bg-[#c4b49a]" : "bg-[#262016]"
      }`}
    >
      {n}
    </span>
  );
}

const cardBase =
  "flex w-full items-center gap-3 rounded-[16px] p-4 shadow-[0px_6px_8px_rgba(50,37,26,0.04)]";

export default function EnrollPage() {
  return (
    <div className="flex w-full flex-1 flex-col bg-[#f5edd9]">
      {/* Onboarding card: full-bleed sheet on mobile, centred card on larger screens */}
      <section className="flex w-full flex-col gap-6 self-center bg-[#fffcf7] px-6 pb-12 pt-8 shadow-[0px_-10px_12px_rgba(50,37,26,0.04)] sm:my-10 sm:max-w-lg sm:rounded-[28px] sm:shadow-[0px_8px_24px_rgba(50,37,26,0.08)] lg:max-w-xl lg:px-9">
        <h1 className="w-full text-xs font-bold uppercase tracking-[1.2px] text-[#2e261c]">
          What Happens Next
        </h1>

        <ol className="flex w-full flex-col gap-3">
          {/* Step 1 — Payment (required) */}
          <li className={`${cardBase} min-h-[81px] border-[1.5px] border-[#7a6542] bg-[#fffcf7]`}>
            <StepBadge n={1} />
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <p className="text-base font-semibold text-[#2e261c]">
                <span className="sr-only">Step 1: </span>Payment
              </p>
              <p className="flex items-center gap-1 text-[11px] text-[#7a6542]">
                <img src="/images/icons/alert-triangle.svg" alt="" width={12} height={12} className="size-3 shrink-0" />
                Must be completed first
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end justify-center gap-2">
              <span className="rounded-[6px] bg-[#262016] px-2.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.8px] text-[#e6c594]">
                Required
              </span>
              <img src="/images/icons/chevron-down.svg" alt="" width={16} height={16} className="size-4" />
            </div>
          </li>

          {/* Step 2 — Confirm */}
          <li className={`${cardBase} min-h-[75px] border-[1.5px] border-[#7a6542] bg-[#fffcf7]`}>
            <StepBadge n={2} />
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <p className="text-base font-semibold text-[#2e261c]">
                <span className="sr-only">Step 2: </span>Confirm
              </p>
              <p className="text-[11px] text-[#7a6542]">Upload payment proof</p>
            </div>
            <img src="/images/icons/clock.svg" alt="" width={20} height={20} className="size-5 shrink-0" />
          </li>

          {/* Step 3 — Register (locked until payment is confirmed) */}
          <li className={`${cardBase} min-h-[75px] border border-[#c4b49a] bg-[#f5edd9] shadow-none`}>
            <StepBadge n={3} locked />
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <p className="text-base font-semibold text-[#9e8e74]">
                <span className="sr-only">Step 3 (unlocks after payment): </span>Register
              </p>
              <p className="text-[11px] text-[#b0a08a]">Wellness &amp; Assessment forms</p>
            </div>
            <img src="/images/icons/chevron-down.svg" alt="" width={16} height={16} className="size-4 shrink-0" />
          </li>
        </ol>
      </section>

      {/* Cream spacer so the footer bar sits at the bottom on tall screens */}
      <div className="flex-1" />

      <div className="flex h-[54px] w-full items-center justify-center bg-[#3d3326]">
        <p className="text-xs font-medium leading-4 tracking-[0.5px] text-white opacity-80">
          Your path to healing starts here
        </p>
      </div>
    </div>
  );
}
