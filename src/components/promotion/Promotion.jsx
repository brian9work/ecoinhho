"use client"
import React from 'react'
import { H3, P } from 'components/general/Texts'
import { AnimatedCSS, SplitTextComponent, TextAnimation } from 'components/general/TextAnimation'
import 'animate.css';
import useElementVisibility from 'hooks/useElementVisibility'
import features from 'data/promotions'
import { ButtonLinkYellow } from '../general/Button';
// import Message from 'components/Message'

const PromotionComponent = ({ title, description, icon }) => {
   const { isVisible, topPercentage, elementRef } = useElementVisibility();
   return (
      <div
         className="flex flex-col items-center text-center">
         <div className="text-orange-400 mb-4 w-7/12 h-40"
            style={{
               backgroundImage: `url("${icon}")`,
               backgroundSize: 'contain',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               display: 'block',
            }}
         ></div>
         <p className="text-md text-gray-600">{title}</p>
         <AnimatedCSS>
            <h3 className={`font-bold mb-1 text-xl`}>{description}</h3>
         </AnimatedCSS>
         {/* <div
            ref={elementRef}
            className={`animate__animated 
               ${isVisible && topPercentage<90  ? 
                  "animate__fadeInUp animate__slower anima " 
               :  
                  "opacity-0"
               }`}
         >
         </div> */}
      </div>
   )
}

export default function Promotion() {
   return (
      <div>
         <P className='text-center'>Gran</P>
         <TextAnimation>PROMOCION</TextAnimation>
         <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto justify-center items-center">
               {features.map((feature, index) => (
                  <PromotionComponent key={index} {...feature} />
               ))}
            </div>

            <div className="text-center mb-8">
               <H3 className=''>
                  <b className='text-5xl font-playfair'>"</b>
                  Una localidad tranquila, cerca de escuelas, negocios, avenidas y hospitales
                  <b className='text-5xl font-playfair'>"</b>
               </H3>
               {/* <SplitTextComponent 
                    text={'"Una localidad tranquila, cerca de escuelas, negocios, avenidas y hospitales"'} 
                    delay={50} 
                    className='text-lg font-medium text-gray-600 pb-5'
                /> */}
               <br />
               <div className='w-8/12 md:w-3/12 mt-5 mx-auto'>
                  <ButtonLinkYellow href={``}>Contactar</ButtonLinkYellow>
               </div>
               <p className="mt-4 text-sm text-gray-600">Ver mas informacion</p>
            </div>

            <p className="text-center text-sm text-gray-500">
               * Escrituras, avalúos, permisos municipales y mas gestiones sin costo adicional *
            </p>
         </div>
      </div>
   )
}
