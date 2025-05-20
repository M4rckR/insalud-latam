'use client'

import { TabSedes } from './CarouselHero/TabSedes'
import SplitText from './ui/SplitText'
import { useIsMobile } from '@/hooks/isMobile'

export const HeroSedes = () => {
  const isMobile = useIsMobile();
  return (
    <div className='max-w-7xl mx-auto px-4 container pb-12 md:pb-16 lg:pb-24'>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-end lg:h-[70vh]'>
        <div className='text-white font-in-nunito pt-6 md:pt-12 lg:pt-0 space-y-4'>
          <h1 className='text-3xl text-center font-semibold font-in-nunito lg:text-left md:text-4xl lg:text-5xl'>
            {
              isMobile ? (
                <SplitText
                  text='Atención médica de excelencia en LATAM'
                  delay={0}
                />
              ) : (
                <SplitText
                  text='Atención médica de excelencia en LATAM'
                  delay={50}
                />
              )
            }
          </h1>
            <p className='text-center lg:text-left lg:pr-10'>Contamos con sedes en Perú, Ecuador y Panamá, equipadas con tecnología de última generación y lideradas por especialistas altamente calificados.</p>
        </div>
        <TabSedes />
      </section>
    </div>
  )
}
