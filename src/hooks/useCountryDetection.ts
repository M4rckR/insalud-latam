'use client'

import { getLocation } from '@/services';
import { Country } from '@/types';
import { useState, useEffect } from 'react';
/**
 * Hook para detectar el país del visitante
 * @returns Información del país y estados de carga/error
 */
export const useCountryDetection = () => {
  const [infoLocation, setInfoLocation] = useState<Country>();

  const detectCountry = async () => {
    const location = await getLocation()
    setInfoLocation(location)
  }

  useEffect(() => {
    detectCountry()
  }, []);

  return { infoLocation };
}; 