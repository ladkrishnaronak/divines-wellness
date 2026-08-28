import { Calendar, Monitor, PhoneCall, MapPin } from "lucide-react";
import type { ComponentType } from "react";

const items: {
  Icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  label: string;
  value: string;
}[] = [
  { Icon: Calendar, label: "Duration", value: "3 Months" },
  { Icon: Monitor, label: "Mode", value: "Online/Live" },
  { Icon: PhoneCall, label: "Paid consultation", value: "1:1 Call" },
  { Icon: MapPin, label: "Location", value: "Surat, India" },
];

export default function ProgramOverview() {
  return (
    <section className="flex w-full items-center justify-between bg-white px-4 py-3.5 shadow-[0_2px_4px_rgba(0,0,0,0.04)] sm:justify-center sm:gap-x-12 sm:px-8 sm:py-6">
      {items.map(({ Icon, label, value }, i) => (
        <div key={label} className="flex items-center">
          <div className="flex w-20 flex-col items-center justify-center gap-[3px] sm:w-28">
            <div className="flex size-9 items-center justify-center rounded-full border-[1.5px] border-[#b89a5a] bg-[#f5edd8] sm:size-12">
              <Icon size={18} strokeWidth={1.75} className="text-[#7a6a55]" />
            </div>
            <p className="w-19 text-center text-[9px] font-semibold uppercase text-[#8c7a5e] sm:text-xs">
              {label}
            </p>
            <p className="w-19 text-center text-[13px] font-bold text-[#3d3226] sm:text-base">
              {value}
            </p>
          </div>
          {i < items.length - 1 && (
            <div className="ml-6 hidden h-10 w-px bg-[#c9b89a] opacity-60 sm:block lg:ml-12" />
          )}
        </div>
      ))}
    </section>
  );
}
