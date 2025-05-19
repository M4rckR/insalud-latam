import Link from "next/link";

export const NavLinks = () => {
  return (
    <div className="hidden md:flex gap-8 text-base text-white font-semibold">
      <Link href="#nosotros" id="nosotros-link">
        Nosotros
      </Link>
      <Link href="#servicios" id="servicios-link">
        Servicios
      </Link>
      <Link href="#contacto" id="contacto-link">
        Contacto
      </Link>
      <Link href="#academia" id="academia-link">
        Academy
      </Link>
      <Link href="#think" id="think-link">
        Think
      </Link>
      <Link href="#co-crear" id="co-crear-link">
        Co-crear
      </Link>
    </div>
  );
}; 