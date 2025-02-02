import React from 'react'
import { PromotionComponent } from 'components/home/Promotion'
import features from '@/data/caracteristicasElRule'
import { AnimatedCSSTitle } from '../general/TextAnimation'
import { ButtonLinkYellow } from '../general/Button'
import Contact, { Messages } from '@/config/contact'

export default function Caracteristicas() {
   return (
      <div>
         <AnimatedCSSTitle
            animated='animate__zoomInUp'
            delay='faster'
         >Caracteristicas</AnimatedCSSTitle>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 max-w-6xl mx-auto justify-center items-center mt-14">
            {features.map((feature, index) => (
               <PromotionComponent key={index} {...feature} />
            ))}
         </div>
         <div>
            <p
               className='text-center text-xl md:text-3xl uppercase'
            >
               Desde
               <span className='text-primary-yellow font-semibold mx-2'>
                  $700,000
               </span>
               Hasta
               <span className='text-primary-yellow font-semibold mx-2'>
                  $2,000,000
               </span>
               <br />
               con enganche desde
               <span className='text-primary-yellow font-semibold mx-2'>
                  $50,000
               </span>
            </p>
         </div>
         <div className='grid grid-cols-2 mt-5 max-w-96 mx-auto'>
            <div className='w-11/12'>
               <p
                  className='text-center text-lg md:text-2xl uppercase'
               >
                  A
                  <span className='text-primary-yellow font-semibold mx-2 text-2xl md:text-4xl'>
                     10
                  </span>
                  Min.
               </p>
               <p className='text-center text-lg md:text-xl -translate-y-2'>De Tlaxcala centro</p>
            </div>
            <div className='w-11/12'>
               <p
                  className='text-center text-lg md:text-2xl uppercase'
               >
                  <span className='text-primary-yellow font-semibold mx-2 text-2xl md:text-4xl'>
                     5
                  </span>
                  de
                  <span className='text-primary-yellow font-semibold mx-2 text-2xl md:text-4xl'>
                     10
                  </span>
               </p>
               <p className='text-center text-lg md:text-xl -translate-y-2'>Terrenos disponibles</p>
            </div>
         </div>
         <div className='w-10/12 mx-auto max-w-96 mt-5'>
            <ButtonLinkYellow href={Contact(Messages.promocion)}>Contactar</ButtonLinkYellow>
         </div>
      </div>
   )
}
