import Image from "next/image"

export const CtaContactEmail = () => {
  return (
    <div className="bg-in-blue-dark px-4 py-12 md:py-24">
        <section className="mx-auto max-w-7xl">
            <div className="bg-in-cyan rounded-2xl text-white flex items-center gap-12">
                <div className="space-y-6 px-16">
                    <div>
                        <h2 className="font-in-nunito text-4xl font-semibold">Regístrate ahora y forma parte de nuestra comunidad InSalud</h2>
                        <p>Sé el primero en recibir promociones exclusivas, novedades en tratamientos y consejos de salud especializados</p>
                    </div>
                    <div className="flex gap-4 items-center cursor-pointer">
                        <input className="bg-white outline-none rounded-xl px-6 py-4 w-full text-black" type="text" name="correo" id="correo" placeholder="Correo electrónico aquí" />
                        <div className="flex gap-2 items-center w-full bg-in-orange rounded-xl px-4 py-4 hover:bg-in-orange/90 transition-all duration-300">
                            <button className="font-semibold text-white">Suscribirme</button>
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
                />
            </div>
        </section>
    </div>
  )
}
