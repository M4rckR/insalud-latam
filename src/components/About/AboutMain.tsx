import MotionAnimation from "../ui/MotionAnimation";
import { AboutArticle } from "./AboutArticles";

export const AboutMain = () => {
  return (
    <div className="py-12 md:py-16 lg:py-24 bg-in-blue-dark ">
      <MotionAnimation animation="slideUp" delay={0.2}>
      <section className="container px-4 mx-auto max-w-7xl">
        <div className="space-y-6">
          <h2 className="text-center text-white  font-bold font-in-nunito text-2xl md:text-3xl lg:text-5xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-center text-white pb-12">
            Más de <span className="text-in-orange">10 años </span>liderando la
            salud especializada en América Latina.
            <span className="block">
              Brindamos atención integral en urología, salud sexual, medicina
              regenerativa y estética avanzada, con enfoque médico personalizado
              y resultados comprobados.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AboutArticle />
        </div>
      </section>
      </MotionAnimation>
    </div>
  );
};
