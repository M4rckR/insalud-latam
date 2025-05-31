"use client";

import { sedesData } from "@/data/sedes";
import { CarouselSede } from "./CarouselSede";
import { Carousel, CarouselContent } from "../ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Link from "next/link";
import Image from "next/image";

type CarouselSedesProps = {
  activeTab: string;
};

export const CarouselSedes = ({ activeTab }: CarouselSedesProps) => {
  const activeSede = sedesData.find((item) => item.id === activeTab);

  return (
    <div className="relative carousel-container">
      <Carousel
        plugins={[
          AutoScroll({
            stopOnInteraction: false,
            speed: 1,
          }),
          WheelGesturesPlugin(),
        ]}
        opts={{
          align: "center",
          containScroll: "trimSnaps",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-6">
          {
            activeSede?.sedes.length === 1 ? (
              <div className="basis-full max-w-[340px] mx-auto lg:ml-auto lg:mr-0 pl-6">
                <Link href={"link"} target="_blank">
                  <div className="rounded-xl overflow-hidden p-4 relative item-sede h-[180px] flex items-end">
                    <Image className="absolute right-4 top-4" src="/svg/arrow-blank.svg" alt="arrow-blank" width={24} height={24} />
                    <p className="text-lg text-white leading-6 font-in-inter">SEDE <span className="font-semibold block">{activeSede.nombre}</span></p>
                    <Image className="absolute bg-cover left-0 top-0 -z-10" src={activeSede.sedes.map(item => item.imagen).toString()} alt={activeSede.sedes.map(item => item.imagen).toString()} fill />
                  </div>
                </Link>
              </div>
            ) : (
              activeSede?.sedes.map((item, i) => (
                <CarouselSede
                  key={i}
                  name={item.texto}
                  image={item.imagen}
                  link={item.link}
                />
              ))
            )
          }
        </CarouselContent>
      </Carousel>
    </div>
  );
};
