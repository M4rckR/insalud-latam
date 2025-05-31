"use client"
import Image from "next/image"
import Link from "next/link"
import { PE, EC, PA } from 'country-flag-icons/react/3x2'


export const Footer = () => {

  return (
    <div className="bg-in-blue-dark py-12 md:py-16 lg:py-24">
        <section className="mx-auto max-w-7xl px-4 container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="flex flex-col gap-4 col-span-1 md:col-span-4">
                    <Image src="/svg/logo-insalud-white.svg" alt="logo" width={200} height={20} />
                    <p className="text-center md:text-left text-lg text-in-cyan font-medium leading-6">Más de 5,000 pacientes atendidos con éxito en LATAM</p>
                    <p className="text-center md:text-left text-sm text-white">
                        Gracias a nuestra tecnología y experiencia médica, miles de hombres han recuperado su bienestar, confianza y salud sexual
                    </p>
                    <p className="text-white pt-4">© 2025 All Rights Reserved.</p>
                </div>
                <div className="space-y-4 col-span-1 md:col-span-5">
                    <p className="text-white text-lg font-semibold leading-6">Contactos</p>
                    <div className="space-y-2">
                        {/* <p className="text-white">ejemplo@insalud.pe - ejemplo@insalud.pe</p> */}
                        <div className="flex gap-2">
                            <PE title="United States" className="w-6"/>
                            <p className="text-white">+51 976 234 160 - admision@insalud.pe</p>
                        </div>
                        <div className="flex gap-2">
                            <EC title="United States" className="w-6"/>
                            <p className="text-white">+593 983 565 987 - admision@insalud.ec</p>
                        </div>
                        <div className="flex gap-2">
                            <PA title="United States" className="w-6"/>
                            <p className="text-white">+507 633 608 88 - admision.panama@insalud.pe</p>
                        </div>
                    </div>

                    {/* <div>
                        <p className="text-white">+51 976 234 160</p>
                        <p className="text-white">+593 983 565 987</p>
                        <p className="text-white">+50 763 360 888 </p>
                    </div> */}
                </div>
                <div className="space-y-4 col-span-1 md:col-span-3">
                    <p className="text-white text-center md:text-left font-medium text-lg">Síguenos y entérate primero</p>
                    <div className="flex gap-4">
                        <Link href="https://www.facebook.com/insalud.medicinaespecializada" target="_blank">
                            <Image src="/svg/socials/facebook.svg" alt="facebook" width={25} height={25} />
                        </Link>
                        <Link href="https://www.instagram.com/insalud.medicinaespecializada/" target="_blank">
                            <Image src="/svg/socials/instagram.svg" alt="instagram" width={25} height={25} />
                        </Link>
                        <Link href="https://www.tiktok.com/@insalud_oficial?_t=ZM-8woin8JpeEg&_r=1" target="_blank">
                            <Image src="/svg/socials/tiktok.svg" alt="linkedin" width={25} height={25} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
