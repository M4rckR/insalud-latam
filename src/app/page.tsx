import { HeroSedes } from "@/components/HeroSedes";
import { MainHeader } from "@/components/MainHeader";
import { AboutMain } from "@/components/About/AboutMain";
import { TreatmentExplorer } from "@/components/TreatmentExplorer/TreatmentExplorer";
export default function Home() {
  return (
    <>
      <div className="section-hero bg-cover bg-top">
        <div className="absolute inset-0 bg-black/30"></div>

        <header className="relative z-10">
          <MainHeader />
          <HeroSedes />
        </header>

     </div>
      <main>
        <AboutMain />
        <TreatmentExplorer />
      </main>
     
    </>
  );
}
