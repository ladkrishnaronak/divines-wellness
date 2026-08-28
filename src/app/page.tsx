import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgramOverview from "@/components/ProgramOverview";
import SymptomChecker from "@/components/SymptomChecker";
import ProgramJourney from "@/components/ProgramJourney";
import Sessions from "@/components/Sessions";
import Founders from "@/components/Founders";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center bg-[#f5edd8]">
      <Header />
      <Hero />
      <ProgramOverview />
      <SymptomChecker />
      <ProgramJourney />
      <Sessions />
      <Founders />
    </div>
  );
}
