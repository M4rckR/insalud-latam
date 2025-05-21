'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'

export const TreatmentTabs = () => {

    const [activeTab, setActiveTab] = useState<string>('treatments');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    }

  return (
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <Button variant={'normal'} className={`rounded-3xl sm:basis-1/2  bg-in-orange cursor-pointer py-5 border-2 text-white border-transparent ${activeTab === 'treatments' ? 'bg-in-orange' : 'bg-transparent border-2 border-in-orange'}`} 
                onClick={() => handleTabClick('treatments')}>
                    Tratamientos
                </Button>
                <Button variant={'normal'} className={`rounded-3xl sm:basis-1/2 text-white border-2 border-in-cyan cursor-pointer py-5 ${activeTab === 'auxiliaries' ? 'bg-in-cyan' : 'bg-transparent'}`} 
                onClick={() => handleTabClick('auxiliaries')}>
                    Exámenes auxiliares
                </Button>
        </div>
  )
}
