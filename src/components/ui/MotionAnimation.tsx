// src/components/ui/MotionAnimation.tsx
'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

interface MotionAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  variants?: Variants
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'zoom' | 'rotate' | 'bounce'
  amount?: number
  once?: boolean
}

export default function MotionAnimation({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.5,
  variants,
  animation = 'fadeIn',
  amount = 0.2,
  once = true
}: MotionAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })
  
  // Biblioteca de animaciones predefinidas
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    rotate: {
      hidden: { opacity: 0, rotate: -15 },
      visible: { opacity: 1, rotate: 0 }
    },
    bounce: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.5
        }
      }
    }
  }
  
  // Usar variantes personalizadas o seleccionar de predefinidas
  const selectedVariants = variants || animations[animation]
  
  return (
    <motion.div
      ref={ref}
      variants={selectedVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}