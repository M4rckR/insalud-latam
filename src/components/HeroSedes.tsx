import { TabSedes } from './CarouselHero/TabSedes'

export const HeroSedes = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 container'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-end h-[70vh]'>
        <div className='text-white font-in-nunito'>
            <h1 className='text-5xl md:text-7xl'>Nuestras sedes</h1>
            <p>Atención médica especializada en urología, salud sexual y medicina regenerativa. Sedes modernas, especialistas certificados y tecnología avanzada.</p>
        </div>
        <TabSedes />
      </section>
    </div>
  )
}
