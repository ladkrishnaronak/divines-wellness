"use client";

import { Calendar, Monitor, PhoneCall, MapPin } from "lucide-react";
import { useState } from "react";

const items = [
  {
    Icon: Calendar,
    label: "Duration",
    value: "3 Months",
    detail: "The program is structured as a 3-month personalized wellness journey with weekly consultations and continuous support.",
  },
  {
    Icon: Monitor,
    label: "Mode",
    value: "Online/Live",
    detail: "Flexible sessions available both online and in-person in Surat. Choose what works best for your schedule.",
  },
  {
    Icon: PhoneCall,
    label: "1:1 call",
    value: "Paid",
    detail: "Personal one-on-one sessions with wellness experts. Investment in your health journey.",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Surat, India",
    detail: "Based in Surat with online access available globally. Consultations can be attended from anywhere.",
  },
];

export default function ProgramOverview() {
  const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);

  return (
    <>
      <section className="w-full bg-white flex items-center justify-center px-4 py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="flex w-full gap-4 justify-center max-w-md flex-wrap sm:flex-nowrap sm:gap-8">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => setSelectedItem(item)}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg hover:bg-[#f5edd8]/50 transition-colors w-20 sm:w-auto"
            >
              <div className="bg-[#f5edd9] border-[1.5px] border-[#b89a5a] rounded-full p-2 size-7 sm:size-9 flex items-center justify-center">
                <item.Icon size={14} strokeWidth={1.75} className="text-[#7a6a55]" />
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-[#4a3d2e] text-center uppercase tracking-[0.3px]">
                {item.label}
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#3d3326] text-center">
                {item.value}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-6 max-w-sm w-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#f5edd9] border-[1.5px] border-[#b89a5a] rounded-full p-3 size-12 flex items-center justify-center">
                <selectedItem.Icon size={20} strokeWidth={1.75} className="text-[#7a6a55]" />
              </div>
              <h3 className="text-lg font-bold text-[#3d3226]">{selectedItem.label}</h3>
            </div>
            <p className="text-sm text-[#4a3d2e] mb-2 font-semibold">{selectedItem.value}</p>
            <p className="text-sm text-[#4a3d2e] leading-relaxed mb-5">{selectedItem.detail}</p>
            <button
              onClick={() => setSelectedItem(null)}
              className="w-full bg-[#8b4e0a] text-white font-bold py-2 rounded-lg hover:bg-[#6a3c08] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
