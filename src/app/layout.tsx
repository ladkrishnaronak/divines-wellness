import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Divines Wellness Program",
  description:
    "A 3-month holistic wellness journey to restore your body, retrain your habits, and prevent disease before it starts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f5edd9] font-sans">
        <Header />
        {/* Phones: full width. Tablet & desktop: the same phone layout in a
            600px centre column, with plain background on the left and right. */}
        <div className="mx-auto flex w-full max-w-[600px] flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
