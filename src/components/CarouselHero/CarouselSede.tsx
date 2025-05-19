import { CarouselItem } from "../ui/carousel"
import Image from "next/image"


type CarouselSedeProps = {
    name: string
    image: string
    link: string
}


export const CarouselSede = ({name, image}: CarouselSedeProps) => {
  return (
      <CarouselItem className="basis-1/2 pl-4">
        <div className="rounded-xl overflow-hidden p-4 relative item-sede h-[180px] flex items-end">
          <Image className="absolute right-4 top-4" src="/svg/arrow-blank.svg" alt="arrow-blank" width={24} height={24} />
          <p className="text-lg text-white leading-6 font-in-inter">SEDE <span className="font-semibold block">{name}</span></p>
          <Image className="absolute left-0 top-0 -z-10" src={image} alt={name} fill />
        </div>
      </CarouselItem>
  )
}
