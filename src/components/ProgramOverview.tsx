"use client";

import { Calendar, Monitor, PhoneCall, MapPin } from "lucide-react";
import { useState } from "react";

const items = [
  {
    Icon: Calendar,
    label: "Duration",
    value: "3 Months",
  },
  {
    Icon: Monitor,
    label: "Mode",
    value: "Online/Live",
  },
  {
    Icon: PhoneCall,
    label: "1:1 call",
    value: "Paid",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Surat, India",
  },
];

export default function ProgramOverview() {
  return (
    <section className="w-full bg-white flex items-center justify-center px-4 py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="flex w-full gap-4 justify-center max-w-md flex-wrap sm:flex-nowrap sm:gap-8">
        {items.map(({ Icon, label, value }) => (
          <button
            key={label}
            className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg hover:bg-[#f5edd8]/50 transition-colors w-20 sm:w-auto"
          >
            <div className="bg-[#f5edd9] border-[1.5px] border-[#b89a5a] rounded-full p-2 size-7 sm:size-9 flex items-center justify-center">
              <Icon size={14} strokeWidth={1.75} className="text-[#7a6a55]" />
            </div>
            <p className="text-[11px] sm:text-xs font-medium text-[#4a3d2e] text-center uppercase tracking-[0.3px]">
              {label}
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#3d3326] text-center">
              {value}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
