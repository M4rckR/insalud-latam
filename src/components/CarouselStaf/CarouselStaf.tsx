import { CarouselContent } from "./CarouselContent"

export const CarouselStaf = () => {
  return (
    <div className="bg-in-blue-dark py-12 md:py-16 lg:py-24 px-4">
        <section className="container mx-auto max-w-7xl px-4 py-12 bg-in-gray-dark rounded-3xl space-y-8">
            <div className="text-center text-white space-y-4">
                <h2 className="font-in-nunito text-4xl font-semibold">Nuestro staff médico regional</h2>
                <p className="max-w-[600px] mx-auto">Un equipo de especialistas certificados en toda Latinoamérica, comprometidos con tu salud, bienestar y atención personalizada.</p>            
            </div>
            <CarouselContent />
        </section>
    </div>
  )
}
