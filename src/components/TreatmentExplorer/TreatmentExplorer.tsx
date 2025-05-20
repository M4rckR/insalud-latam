'use client'

import { useCountryDetection } from '@/hooks/useCountryDetection';
import React from 'react'

export const TreatmentExplorer = () => {

    const { country, countryCode, city, region, loading, error } = useCountryDetection();

  return (
    <div className="py-12 md:py-16 lg:py-24 bg-in-blue-dark ">
        <section className="container px-4 mx-auto max-w-7xl">
            <h2 className="text-white text-2xl font-bold">
                {country}
            </h2>
            <p className="text-white text-sm">
                {countryCode}
            </p>
            <p className="text-white text-sm"> {city} </p>
            <p className="text-white text-sm"> {region} </p>
            <p className="text-white text-sm"> {loading} </p>
            <p className="text-white text-sm"> {error} </p>
        </section>
    </div>
  )
}
