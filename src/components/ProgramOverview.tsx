"use client";

import { Calendar, Monitor, PhoneCall, MapPin } from "lucide-react";
import { useState } from "react";

const items = [
  {
    Icon: Calendar,
    label: "Duration",
    value: "3 Months",
    detail:
      "6 consultations of yoga, mind coaching, doctor and dietician. Starting date flexible.",
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

export default function ProgramOverview() {
  const [selectedItem, setSelectedItem] = useState<(typeof items)[0] | null>(null);

  return (
    <>
      <section className="w-full bg-white flex items-center justify-center px-3 py-3.5 shadow-[0px_2px_4px_rgba(0,0,0,0.04)] sm:px-6 sm:py-5 lg:py-7">
        {/* Single row, matches Figma "Program Overview" card-duration/card-mode/card-paid/card-location */}
        <div className="flex w-full max-w-md items-center justify-center gap-2 sm:max-w-2xl sm:gap-5 lg:max-w-3xl lg:gap-8">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => setSelectedItem(item)}
              className="flex w-1/4 max-w-[92px] flex-1 flex-col items-center justify-center gap-[3px] rounded-[8px] border border-[#e8dcc8] bg-white py-[7px] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:bg-[#f5edd8]/40 sm:py-2.5 lg:py-3.5"
            >
              <div className="flex size-[27px] items-center justify-center rounded-full border-[1.5px] border-[#b89a5a] bg-[#f5edd9] sm:size-9 lg:size-10">
                <item.Icon size={14} strokeWidth={1.75} className="text-[#7a6a55] sm:size-[18px] lg:size-5" />
              </div>
              <p className="w-full text-center text-[9px] font-medium uppercase tracking-[0.3px] text-[#4a3d2e] sm:text-xs lg:text-sm">
                {item.label}
              </p>
              <p className="w-full text-center text-[11px] font-bold leading-tight text-[#3d3326] sm:text-sm lg:text-base">
                {item.value}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Detail card — matches Figma "Info - ..." components */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-sm flex-col items-center gap-[5px] rounded-[12px] bg-white px-5 py-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)]"
          >
            <div className="h-[2px] w-10 rounded-full bg-[#b89959]" />
            <div className="flex w-full items-center justify-center gap-2 pt-1">
              <selectedItem.Icon size={16} strokeWidth={2} className="shrink-0 text-[#3d3326]" />
              <p className="text-sm font-bold text-[#3d3326]">{selectedItem.label}</p>
            </div>
            <p className="pb-1 text-center text-[13px] leading-[1.6] text-[#4a3d2e]">
              {selectedItem.detail}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
