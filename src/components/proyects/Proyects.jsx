import React from 'react'
import { H3, P } from '../general/Texts'
import { AnimatedCSS } from '../general/TextAnimation'
import Image from 'next/image'

const url = "/house.png"

export default function Proyects() {
    return (
        <div>
            <AnimatedCSS animated='animate__zoomInLeft' delay=''>
                <h3 className='uppercase font-bold text-center text-2xl md:text-3xl lg:text-7xl text-primary-yellow'>
                    Nuestros Proyectos
                </h3>
            </AnimatedCSS>
            <H3 className='mt-5'>Promocion en el costo de la vivienda por preventa, con un regalo en linea blanca a la entrega de su nueva casa</H3>
            <div className='w-full mx-auto max-w-1200 mt-10'
                style={{}}
            >
                <div>
                    <div className='flex justify-around'>
                        <Image
                            src={url}
                            width={500}
                            height={100}
                            alt="ecoinhho logo"
                            layout="contain"
                            objectFit="contain"
                        />
                        <Image
                            src={url}
                            width={500}
                            height={100}
                            alt="ecoinhho logo"
                            layout="contain"
                            objectFit="contain"
                        />
                    </div>
                    
                    <p className='uppercase font-bold text-center text-xl my-5'>
                        Una planta dos recamaras
                    </p>
                </div>
            </div>
        </div>
    )
}
