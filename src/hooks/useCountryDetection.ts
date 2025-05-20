'use client'

import { useState, useEffect } from 'react';

type CountryInfo = {
  country: string;
  countryCode: string;
  city?: string;
  region?: string;
  loading: boolean;
  error: string | null;
}

/**
 * Hook para detectar el país del visitante
 * @returns Información del país y estados de carga/error
 */
export const useCountryDetection = () => {
  const [countryInfo, setCountryInfo] = useState<CountryInfo>({
    country: '',
    countryCode: '',
    loading: true,
    error: null
  });

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/', {
          cache: 'no-store'
        });
        
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de localización');
        }
        
        const data = await response.json();
        
        setCountryInfo({
          country: data.country_name,
          countryCode: data.country_code,
          city: data.city,
          region: data.region,
          loading: false,
          error: null
        });
      } catch (error) {
        console.error('Error al detectar el país:', error);
        setCountryInfo(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Error desconocido'
        }));
      }
    };

    detectCountry();
  }, []);

  return countryInfo;
}; 