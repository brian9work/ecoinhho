import React from 'react'
import { PromotionComponent } from 'components/home/Promotion'
import features from '@/data/caracteristicasResidencial'
import { AnimatedCSSTitle } from '../general/TextAnimation'
import { ButtonLinkYellow } from '../general/Button'
import Contact, { Messages } from '@/config/contact'
import useShuffle from 'hooks/useShuffleArray'

export function CaracteristicasResidencial() {
   return (
      <div>
         <AnimatedCSSTitle
            animated='animate__zoomInUp'
            delay='faster'
         >Caracteristicas</AnimatedCSSTitle>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 max-w-6xl mx-auto justify-center items-center mt-14">
            {/* {features.map((feature, index) => ( */}
            {useShuffle(features).map((feature, index) => (
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
                     5
                  </span>
                  Min.
               </p>
               <p className='text-center text-lg md:text-xl -translate-y-2'>De Tlaxcala centro</p>
            </div>
            <div className='w-11/12'>
               <p
                  className='text-center text-lg md:text-2xl uppercase'
               >
                  A
                  <span className='text-primary-yellow font-semibold mx-2 text-2xl md:text-4xl'>
                     3
                  </span>
                  Min.
               </p>
               <p className='text-center text-lg md:text-xl -translate-y-2'>Galerias Tlaxcala</p>
            </div>
         </div>
         <div className='mt-5 w-11/12 mx-auto max-w-1200'>

            <p className='text-center text-lg md:text-xl lg:text-2xl font-Catamaran flex gap-2'>
               <b className='text-xl md:text-3xl lg:text-5xl text-primary-yellow'>"</b>
               Disfruta la vida que sueñas en un nuevo hogar seguro en nuestra zona residencial ubicada en el fraccionamiento Vista Del Sol, Tlaxcala. Disfrutando los mejores momentos con tu familia y atesorar cada momento especial.
               <b className='text-xl md:text-3xl lg:text-5xl text-primary-yellow'>"</b>
            </p>
         </div>
         <div className='w-10/12 mx-auto max-w-96 mt-5'>
            <ButtonLinkYellow href={Contact(Messages.promocion)}>Contactar</ButtonLinkYellow>
         </div>
      </div>
   )
}