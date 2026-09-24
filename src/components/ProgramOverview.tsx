"use client";

import { Calendar, Monitor, PhoneCall, MapPin, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    Icon: Calendar,
    label: "Duration",
    value: "3 Months",
    detail:
      "6 one-hour consultations of yoga, mind coaching, doctor and dietician within 3 months. Starting date flexible.",
  },
  {
    Icon: Monitor,
    label: "Mode",
    value: "Online/Live",
    detail:
      "In-person / online. Join from anywhere via Zoom sessions. Time is scheduled as per your convenience.",
  },
  {
    Icon: PhoneCall,
    label: "1:1 call",
    value: "Paid",
    detail:
      "Type: 1:1 personal call. One-on-one guidance tailored specifically to your wellness needs.",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Surat, India",
    detail: "319-321, Highfield Ascot, VIP Road, Vesu, Surat, Gujarat, 395007, India",
  },
];

const DURATION = 550; // ms — keep in sync with duration-[550ms] below

/** Front of a card: the small stat button exactly as it looks at rest. */
function CardFace({ item }: { item: (typeof items)[number] }) {
  return (
    <>
      <div className="flex size-[27px] items-center justify-center rounded-full border-[1.5px] border-[#b89a5a] bg-[#f5edd9] sm:size-9 lg:size-10">
        <item.Icon size={14} strokeWidth={1.75} className="text-[#7a6a55] sm:size-[18px] lg:size-5" />
      </div>
      <p className="w-full text-center text-[9px] font-medium uppercase tracking-[0.3px] text-[#4a3d2e] sm:text-xs lg:text-sm">
        {item.label}
      </p>
      <p className="w-full text-center text-[11px] font-bold leading-tight text-[#3d3326] sm:text-sm lg:text-base">
        {item.value}
      </p>
    </>
  );
}

export default function ProgramOverview() {
  const rowRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // active = which card is lifted; expanded = whether it has flipped open.
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [origin, setOrigin] = useState({ left: 0, width: 0 });

  function open(index: number) {
    const row = rowRef.current;
    const card = cardRefs.current[index];
    if (!row || !card) return;
    const r = row.getBoundingClientRect();
    const c = card.getBoundingClientRect();
    setOrigin({ left: c.left - r.left, width: c.width });
    setActive(index);
    setExpanded(false);
    // Two frames so the panel paints at the card's spot before animating out.
    requestAnimationFrame(() => requestAnimationFrame(() => setExpanded(true)));
  }

  function close() {
    setExpanded(false);
    window.setTimeout(() => setActive(null), DURATION);
  }

  function toggle(index: number) {
    if (active === null) open(index);
    else close();
  }

  // Esc closes the panel.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const item = active !== null ? items[active] : null;

  return (
    <section className="w-full bg-white flex items-center justify-center px-3 py-3.5 shadow-[0px_2px_4px_rgba(0,0,0,0.04)] sm:px-6 sm:py-5 lg:py-7">
      {/* The row keeps its layout; it only grows a little taller while a card is open */}
      <div
        ref={rowRef}
        className={`relative flex w-full max-w-md items-center justify-center gap-2 transition-[min-height] duration-[550ms] ease-out [perspective:1200px] motion-reduce:transition-none sm:max-w-2xl sm:gap-5 lg:max-w-3xl lg:gap-8 ${
          expanded ? "min-h-[96px] sm:min-h-[104px]" : "min-h-0"
        }`}
      >
        {items.map((it, idx) => (
          <button
            key={it.label}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            type="button"
            onClick={() => toggle(idx)}
            aria-expanded={active === idx}
            aria-controls="program-overview-detail"
            className={`flex w-1/4 max-w-[92px] flex-1 flex-col items-center justify-center gap-[3px] self-center rounded-[8px] border border-[#e8dcc8] bg-white py-[7px] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:bg-[#f5edd8]/40 sm:py-2.5 lg:py-3.5 ${
              active === idx ? "invisible" : ""
            }`}
          >
            <CardFace item={it} />
          </button>
        ))}

        {/* Flip panel: starts on top of the tapped card, flips 180° while growing
            to fill the whole row, then reverses back into the card on close. */}
        {item && (
          <div
            id="program-overview-detail"
            role="region"
            aria-live="polite"
            aria-label={`${item.label} details`}
            onClick={close}
            className="absolute inset-y-0 z-10 cursor-pointer transition-all duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] motion-reduce:transition-none"
            style={{
              left: expanded ? 0 : origin.left,
              width: expanded ? "100%" : origin.width,
              transform: expanded ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front face = the small card */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[3px] rounded-[8px] border border-[#e8dcc8] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.04)] [backface-visibility:hidden]">
              <CardFace item={item} />
            </div>

            {/* Back face = Figma "Info - …" panel */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[5px] overflow-hidden rounded-[12px] bg-white px-5 py-2.5 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="h-[2px] w-10 shrink-0 rounded-[2px] bg-[#b89959]" />
              <div className="flex w-full items-center gap-2">
                <item.Icon size={16} strokeWidth={2} className="shrink-0 text-[#8b4e0a]" aria-hidden="true" />
                <p className="text-sm font-semibold leading-5 tracking-[0.1px] text-[#3d3326]">{item.label}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    close();
                  }}
                  aria-label="Close details"
                  className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full text-[#7a6a55] hover:bg-[#f5edd9]"
                >
                  <X size={14} strokeWidth={2} />
                </button>
              </div>
              <p className="w-full text-xs font-medium leading-4 tracking-[0.4px] text-[#4a3d2e]">
                {item.detail}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
