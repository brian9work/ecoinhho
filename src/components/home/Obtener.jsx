import React from 'react'
import { AnimatedCSSTitle } from 'components/general/TextAnimation'
import { P } from 'components/general/Texts'
import origin from 'config/isServer'
import { ButtonLinkYellow } from 'components/general/Button'
import Image from 'next/image'

export default function Obtener() {
   return (
      <div>
         <AnimatedCSSTitle animated='animate__zoomInUp' delay=''>
            Obten un terreno mas tu casa
         </AnimatedCSSTitle>
         <div className='flex flex-col md:flex-row gap-4 w-10/12 mx-auto mt-5 md:w-8/12'>
            <div className='block w-full md:w-8/12 h-auto '>
               <Image
                  src={`${origin}house.png`}
                  alt='house'
                  width={100}
                  height={100}
                  style={{
                     objectFit: 'contain',
                     display: 'block',
                     width: '100%',
                     height: "100%",
                     margin: 'auto',
                  }}
               />
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
