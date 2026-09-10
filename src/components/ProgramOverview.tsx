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
      <section className="w-full bg-white flex flex-col items-center px-4 py-3.5 shadow-[0px_2px_4px_rgba(0,0,0,0.04)]">
        {/* Row 1: Duration / Mode / 1:1 Call */}
        <div className="flex w-full max-w-md items-center justify-center">
          {items.slice(0, 3).map((item, i) => (
            <div key={item.label} className="flex items-center">
              {i > 0 && (
                <div className="h-10 w-px bg-[#c9b89a] opacity-60 mx-2 sm:mx-4" />
              )}
              <button
                onClick={() => setSelectedItem(item)}
                className="flex w-20 flex-col items-center justify-center gap-[3px] py-1"
              >
                <div className="flex size-9 items-center justify-center rounded-full border-[1.5px] border-[#b89a5a] bg-[#f5edd8]">
                  <item.Icon size={18} strokeWidth={1.75} className="text-[#7a6a55]" />
                </div>
                <p className="w-[76px] text-center text-[9px] font-semibold uppercase tracking-[0.3px] text-[#8c7a5e]">
                  {item.label}
                </p>
                <p className="w-[76px] text-center text-[13px] font-bold text-[#3d3226]">
                  {item.value}
                </p>
              </button>
            </div>
          ))}
        </div>

        {/* Row 2: Location, centered */}
        <div className="mt-2 flex justify-center">
          <button
            onClick={() => setSelectedItem(items[3])}
            className="flex w-20 flex-col items-center justify-center gap-[3px] py-1"
          >
            <div className="flex size-9 items-center justify-center rounded-full border-[1.5px] border-[#b89a5a] bg-[#f5edd8]">
              <MapPin size={18} strokeWidth={1.75} className="text-[#7a6a55]" />
            </div>
            <p className="w-[76px] text-center text-[9px] font-semibold uppercase tracking-[0.3px] text-[#8c7a5e]">
              Location
            </p>
            <p className="w-[76px] text-center text-[13px] font-bold text-[#3d3226]">
              Surat, India
            </p>
          </button>
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
