import { sedesData } from "@/data/sedes"
import { CarouselSede } from "./CarouselSede"
import { Carousel, CarouselContent } from "../ui/carousel"

type CarouselSedesProps = {
    activeTab: string
}


export const CarouselSedes = ({activeTab}: CarouselSedesProps) => {
  return (
                
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
    >
        <CarouselContent className="-ml-4">
            {sedesData.find((item) => item.id === activeTab)?.sedes.map((item, i) => (
                <CarouselSede key={i}
                    name={item.texto}
                    image={item.imagen}
                    link={item.link}
                />
            ))}
        </CarouselContent>
    </Carousel>
  )
}
