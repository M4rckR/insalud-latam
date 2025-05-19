import { CarouselItem } from "../ui/carousel"
import Image from "next/image"
import Link from "next/link"


type CarouselSedeProps = {
    name: string
    image: string
    link: string
}


export const CarouselSede = ({name, image, link}: CarouselSedeProps) => {
  return (
      <CarouselItem className="basis-1/2 pl-4">
        <div className="rounded-xl overflow-hidden p-4 relative bg-gradient-to-b from-transparent to-black/50">
          <Image className="absolute right-4 top-4" src="/svg/arrow-blank.svg" alt="arrow-blank" width={24} height={24} />
          <p className="pt-24 text-lg text-white leading-6">SEDE <span className="font-semibold block">{name}</span></p>
          <Image className="absolute left-0 top-0 -z-10" src={image} alt={name} fill />
        </div>
      </CarouselItem>
  )
}
