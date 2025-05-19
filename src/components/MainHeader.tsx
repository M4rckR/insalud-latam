import Image from "next/image"
import Link from "next/link"
import { NavLinks } from "./NavLinks"

export const MainHeader = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 container">
        <header className="flex justify-between items-center py-8">
            <div className="relative w-36 h-10">
                <Link href="/">
                    <Image src="/svg/logo-insalud-white.svg" alt="logo" fill/>
                </Link>
            </div>
            <NavLinks />
            <Image src="/svg/whatsapp-white.svg" alt="whatsapp" width={40} height={40} />
        </header>
    </div>
  )
}
