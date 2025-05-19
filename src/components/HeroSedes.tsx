import { TabSedes } from './CarouselHero/TabSedes'

export const HeroSedes = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 container'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-end h-[70vh]'>
        <div className='text-white font-in-nunito '>
            <h1 className='text-3xl text-center md:text-left md:text-5xl lg:text-6xl'>Atención médica de excelencia en LATAM.</h1>
            <p className='text-center md:text-left'>Contamos con sedes en Perú, Ecuador y Panamá, equipadas con tecnología de última generación y lideradas por especialistas altamente calificados.</p>
        </div>
        <TabSedes />
      </section>
    </div>
  )
}
