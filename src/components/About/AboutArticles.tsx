import Image from "next/image";

export const AboutArticle = () => {
  return (
    <>
      <article className="flex items-center md:justify-center gap-4 text-white item-about py-6 px-6 rounded-xl">
        <Image
          src="/svg/about/icon-medico.svg"
          alt="icono tecnologia"
          width={64}
          height={64}
        />
        <p className="font-medium">
          Atención médica especializada y enfocada en el paciente
        </p>
      </article>
      <article className="flex items-center md:justify-center gap-4 text-white item-about py-6 px-6 rounded-xl">
        <Image
          src="/svg/about/icon-tecnologia.svg"
          alt="icono tecnologia"
          width={64}
          height={64}
        />
        <p className="font-medium">
        Tecnología de vanguardia y tratamientos efectivos
        </p>
      </article>
      <article className="flex items-center md:col-span-2 lg:col-span-1 md:justify-center gap-4 text-white item-about py-6 px-6 rounded-xl">
        <Image
          src="/svg/about/icon-asistencia.svg"
          alt="icono tecnologia"
          width={64}
          height={64}
        />
        <p className="font-medium">
        Consultas virtuales seguras desde cualquier lugar
        </p>
      </article>
    </>
  );
};
