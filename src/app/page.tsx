import { HeroSedes } from "@/components/HeroSedes";
import { MainHeader } from "@/components/MainHeader";

export default function Home() {
  return (
    <>
      <div className="section-hero min-h-[100vh] bg-cover bg-top">
        <div className="absolute inset-0 bg-black/30"></div>

        <header className="relative z-10">
          <MainHeader />
          <HeroSedes />
        </header>
     </div>
     
    </>
  );
}
