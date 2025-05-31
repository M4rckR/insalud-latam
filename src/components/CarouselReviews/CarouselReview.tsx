import { CarouselContentData } from "./CarouselContentData"


export const CarouselReview = () => {
  return (
    <div className="bg-in-blue-dark">
        <section className="max-w-7xl mx-auto container px-4 py-12 md:py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="text-white">
                <h2 className="text-center md:text-left text-4xl font-semibold font-in-nunito">Lo que dicen
                nuestros pacientes</h2>
                <p className="text-center md:text-left text-lg mt-4">
                    en Perú, Ecuador y Panamá comparten su experiencia con InSalud.
                </p>
            </div>
            <CarouselContentData />
        </section>
    </div>
  )
}
