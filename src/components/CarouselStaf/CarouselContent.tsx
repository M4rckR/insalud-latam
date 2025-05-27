'use client'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { imagesStafCarousel } from '@/data/imagesStafCarousel';
import Image from 'next/image';
import { useState } from 'react';


export const CarouselContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView="auto"
    loop={true}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 120,
      modifier: 2,
      slideShadows: false,
    }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[EffectCoverflow, Autoplay]}
    className="w-full max-w-4xl mx-auto"
    onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
    onInit={swiper => setActiveIndex(swiper.realIndex)}
  >
    {imagesStafCarousel.map((src, idx) => (
      <SwiperSlide
        key={idx}
        className={`!flex !justify-center max-w-[360px] min-h-[220px] transition-opacity duration-300 ${activeIndex === idx ? 'opacity-100' : 'opacity-50'}`}
      > 
        <Image
            src={src}
            alt={`Staff ${idx + 1}`}
            width={320}
            height={220}
            className="rounded-xl object-cover w-full h-full shadow-lg"
        />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}
