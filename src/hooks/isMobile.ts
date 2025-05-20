'use client'

import { useState, useEffect } from 'react';

/**
 * Hook personalizado que detecta si el dispositivo es móvil basado en el ancho de pantalla
 * @param {number} breakpoint - Punto de quiebre en píxeles (por defecto 768px)
 * @returns {boolean | null} - true si es móvil, false si no, null durante SSR
 */
export const useIsMobile = (breakpoint: number = 768): boolean | null => {
  // Establecemos el estado inicial como null para evitar problemas de hidratación
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Función para comprobar el tamaño de la pantalla
    const checkIsMobile = (): void => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    // Comprobar al cargar
    checkIsMobile();
    
    // Configurar el detector de redimensionamiento
    window.addEventListener('resize', checkIsMobile);
    
    // Limpiar al desmontar
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);
  
  return isMobile;
};
