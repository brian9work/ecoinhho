"use client"
import React from 'react'
import { H3 } from 'components/general/Texts'
import { AnimatedCSS,  TextAnimation } from 'components/general/TextAnimation'
import 'animate.css';
import features from 'data/promotions'
import { ButtonLinkYellow, ButtonLinkYellowSecondary } from 'components/general/Button';
import Image from 'next/image';
import Contact, { Messages } from '@/config/contact';
import RoutesFrontend from '@/config/routes';

export const PromotionComponent = ({ title, description, icon }) => {
   return (
      <div
         className="flex flex-col items-center text-center">
         <div className="text-orange-400 mb-4 w-9/12 h-32 lg:h-44 ">
            <Image
               src={icon}
               alt={title}
               width={100}
               height={100}
               unoptimized={true}
               style={{
                  objectFit: 'contain',
                  display: 'block',
                  width: '100%',
                  height: "100%",
                  margin: 'auto',
               }}
            />
         </div>
         <p className="text-md text-gray-600 ">{title}</p>
         <AnimatedCSS>
            <h3 className={`font-bold mb-1 text-xl`}>{description}</h3>
         </AnimatedCSS>
      </div>
   )
}

export default function Promotion() {
   return (
      <div>
         <H3 className='text-center'>Gran vivienda en</H3>
         <TextAnimation>PROMOCION</TextAnimation>
         <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto justify-center items-center">
               {features.map((feature, index) => (
                  <PromotionComponent key={index} {...feature} />
               ))}
            </div>

            <div className="text-center mb-8">
               <p className='text-center text-lg md:text-xl lg:text-2xl font-Catamaran'>
                  <b className='text-5xl'>"</b>
                  Una localidad tranquila, cerca de escuelas, negocios, avenidas y hospitales
                  <b className='text-5xl'>"</b>
               </p>
               <br />
               <div className='w-8/12 md:w-3/12 mt-5 mx-auto'>
                  <ButtonLinkYellow href={Contact(Messages.promocion)}>Contactar</ButtonLinkYellow>
               </div>
               <div className='w-8/12 md:w-3/12 mt-5 mx-auto'>
                  <ButtonLinkYellowSecondary href={RoutesFrontend.elTule.production}>
                     Ver mas informacion del proyecto
                  </ButtonLinkYellowSecondary>
               </div>
            </div>

            <p className="text-center text-sm text-gray-500">
               * Escrituras, avalúos, permisos municipales y mas gestiones sin costo adicional *
            </p>
         </div>
      </div>
   )
}
