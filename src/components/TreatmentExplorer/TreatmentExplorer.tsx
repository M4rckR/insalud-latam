import Image from 'next/image';
import { TreatmentTabs } from './TreatmentTabs';
import { TreatmentCountryTabs } from './TreatmentCountryTabs';
export const TreatmentExplorer = () => {

  return (
    <div className="py-12 md:py-16 lg:py-24 bg-in-blue-dark ">
        <section className="container px-4 mx-auto max-w-7xl"> 
            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold font-in-nunito text-center mb-8">
                Lo que hacemos por tu salud
            </h2>
            <div className='mx-auto flex justify-center items-center gap-10 mb-10'>
              <Image className='hidden md:block' src="/svg/treatment-explorer/icon-love.svg" alt="treatment-explorer" width={48} height={48} />
              <TreatmentTabs />
              <Image className='hidden md:block' src="/svg/treatment-explorer/icon-bio.svg" alt="treatment-explorer" width={48} height={48} />
            </div>
            <TreatmentCountryTabs />
        </section>
    </div>
  )
}
