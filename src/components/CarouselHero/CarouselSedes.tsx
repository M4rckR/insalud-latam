'use client'

import { sedesData } from "@/data/sedes";
import { CarouselSede } from "./CarouselSede";
import { Carousel, CarouselContent } from "../ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";


type CarouselSedesProps = {
  activeTab: string;
};

export const CarouselSedes = ({ activeTab }: CarouselSedesProps) => {
  return (
    <div className="relative carousel-container">
      <Carousel
        plugins={[
          AutoScroll({
            stopOnInteraction: false,
            speed: 1,
          }),
          WheelGesturesPlugin()
        ]}
        opts={{
          align: 'center',
          containScroll: 'trimSnaps',
          loop: true
        }}
      >
        <CarouselContent className="-ml-6">
          {sedesData
            .find((item) => item.id === activeTab)
            ?.sedes.map((item, i) => (
              <CarouselSede
                key={i}
                name={item.texto}
                image={item.imagen}
                link={item.link}
              />
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
