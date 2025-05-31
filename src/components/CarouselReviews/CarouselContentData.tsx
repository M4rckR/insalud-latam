'use client'
import { carouselReviews } from "@/data/carouselReviews"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import Image from "next/image"
import AutoScroll from "embla-carousel-auto-scroll"

export const CarouselContentData = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        AutoScroll({
          speed: 0.5,
          stopOnInteraction: false,
        })
      ]}
      orientation="vertical"
      className="w-full overflow-hidden"
    >
      <CarouselContent className="h-[320px] -mb-8">
        {carouselReviews.map((review, i) => (
          <CarouselItem className="space-y-4 text-white basis-1/2 pb-8" key={i}>
              <p className="text-xl">&quot;{review.title}&quot;</p>
              <div className="flex items-center gap-4">
                <Image
                  alt="Imagen de usuario"
                  src={review.imageLocation}
                  width={40}
                  height={40}
                />
                <div>
                  <p>{review.name}</p>
                  <p className="text-xs">{review.description}</p>
                </div>
              </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
