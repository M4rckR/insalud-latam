import { HeroSedes } from "@/components/HeroSedes";
import { MainHeader } from "@/components/MainHeader";

export default function Home() {
  return (
    <>
      <div className="section-hero min-h-[100vh] bg-cover bg-top">
        <MainHeader />
        <HeroSedes />
     </div>
     
    </>
  );
}
