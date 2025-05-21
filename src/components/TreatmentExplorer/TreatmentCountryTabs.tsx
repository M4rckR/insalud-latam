'use client'
import { useEffect } from 'react'
import { Badge } from '../ui/badge'
import { useTreatmentStore } from '@/store/store'

export const TreatmentCountryTabs = () => {

    const location = useTreatmentStore((state) => state.location)
    const fetchLocation = useTreatmentStore((state) => state.fetchLocation)
    const setLocation = useTreatmentStore((state) => state.setLocation)

    useEffect(() => {
        fetchLocation()
    }, [fetchLocation])

    
  return (
    <div className='bg-in-gray-dark py-6 px-8 rounded-xl max-w-[800px] mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center'>
        <p className='text-white font-medium'>Encuentra tu sede</p>
        <div className='text-white flex gap-4 md:gap-6'>
            <Badge 
            className={`bg-transparent border border-in-white px-4 w-16 md:w-20 cursor-pointer rounded-full ${location === 'PE' ? 'border-in-orange' : ''}`}
            onClick={() => setLocation(location)}
            >Perú
            </Badge>
            <Badge 
            className={`bg-transparent border border-in-white px-4 w-16 md:w-20 cursor-pointer rounded-full ${location === 'EC' ? 'border-in-orange' : ''}`}
            onClick={() => setLocation(location)}
            >Ecuador
            </Badge>
            <Badge 
            className={`bg-transparent border border-in-white px-4 py-1 w-16 md:w-20 cursor-pointer rounded-full ${location === 'PA' ? 'border-in-orange' : ''}`}
            onClick={() => setLocation(location)}
            >Panamá
            </Badge>
        </div>

    </div>
  )
}
