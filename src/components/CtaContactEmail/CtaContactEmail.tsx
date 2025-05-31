import Image from "next/image"

export const CtaContactEmail = () => {
  return (
    <div className="bg-in-blue-dark px-4 py-12 md:py-24">
        <section className="mx-auto max-w-7xl">
            <div className="bg-in-gray-dark rounded-2xl text-white flex items-center gap-12 py-8 px-6 lg:py-0 lg:px-0 md:px-12 md:py-12">
                <div className="space-y-6 lg:pl-16">
                    <div className="text-center lg:text-left space-y-2">
                        <h2 className="font-in-nunito text-2xl md:text-4xl font-bold">Regístrate ahora y forma parte de nuestra comunidad InSalud</h2>
                        <p>Sé el primero en recibir promociones exclusivas, novedades en tratamientos y consejos de salud especializados</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 lg:gap-6 items-center ">  
                        <input className="bg-white w-full lg:max-w-[400px] outline-none rounded-2xl px-6 py-4 text-black" type="text" name="correo" id="correo" placeholder="Correo electrónico aquí" />
                        <div className="flex gap-2 items-center cursor-pointer  bg-in-orange rounded-2xl px-8 py-4 hover:bg-in-orange/90 transition-all duration-300">
                            <button className="font-semibold text-white cursor-pointer">Suscribirme</button>
                            <Image
                                src="/svg/form-cta/icons-send.svg"
                                alt="icon-send"
                                width={24}
                                height={24} 
                            />
                        </div>
                    </div>
                </div>
                <Image
                    src="/images/email-contact/doctor-cta.png"
                    alt="doctor-cta"
                    width={300}
                    height={300}
                    unoptimized
                    className="hidden lg:block pr-12"
                />
            </div>
        </section>
    </div>
  )
}
