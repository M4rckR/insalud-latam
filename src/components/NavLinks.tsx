import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export const NavLinks = () => {
  return (

    <section>
      <div className="hidden sm:flex gap-8 text-base text-white font-semibold">
        <Link href="#nosotros" id="nosotros-link">
          Nosotros
        </Link>
        <Link href="#servicios" id="servicios-link">
          Servicios
        </Link>
        <Link href="#contacto" id="contacto-link">
          Contacto
        </Link>
        {/* <Link href="#academia" id="academia-link">
          Academy
        </Link>
        <Link href="#think" id="think-link">
          Think
        </Link>
        <Link href="#co-crear" id="co-crear-link">
          Co-crear
        </Link> */}
      </div>

      <section className="sm:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify className="text-white" size={36} />
          </SheetTrigger>
          <SheetContent className="bg-in-blue-dark border-none px-4 py-8">
            <SheetHeader>
              <SheetTitle className="text-white text-lg">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4">
              <SheetClose asChild>
                <Link href="#nosotros" className="text-white text-lg">Nosotros</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#servicios" className="text-white text-lg">Servicios</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#contacto" className="text-white text-lg">Contacto</Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </section>

    </section>
  );
}; 