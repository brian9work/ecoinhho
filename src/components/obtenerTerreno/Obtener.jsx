import React from 'react'
import { AnimatedCSS, TextAnimation, TextAnimationLeft } from '../general/TextAnimation'
import { P } from '../general/Texts'
import origin from '@/config/isServer'
import { ButtonLinkYellow } from '../general/Button'

export default function Obtener() {
   return (
      <div>
         <AnimatedCSS animated='animate__zoomInDown' delay=''>
            <h3 className='uppercase font-bold text-center text-2xl md:text-3xl lg:text-7xl text-primary-yellow'>
               Obten un terreno mas tu casa
            </h3>
         </AnimatedCSS>
         <div className='flex flex-col md:flex-row gap-4 w-10/12 mx-auto mt-5 md:w-8/12'>
            <div
               className='w-full md:w-8/12 h-96'
               style={{
                  backgroundImage: `url("${origin}house.png")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'block',
               }}>

            </div>
            <div className='w-full md:w-4/12 h-96'>
               <P>El programa de creditos hipotecarios consta de pagar con tu mismo dinero del credito el terreno y la construccion con la vivienda y la distribucion de acuerdo a tus necesidades, el proyecto se hace a tu medida familiar y recurso. A diferencia de una vivienda ya terminada que no tiene los espacios que tu requieres o las condiciones de vida que necesitas.</P> 
               <div className='w-full mt-5'>
                  <ButtonLinkYellow href={``}>Contactar</ButtonLinkYellow>
               </div>
            </div>
         </div>
      </div>
   )
}
