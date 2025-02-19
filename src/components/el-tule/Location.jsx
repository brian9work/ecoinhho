import React from 'react'
import { AnimatedCSSTitle } from '../general/TextAnimation'
import Image from 'next/image'
import origin from '@/config/isServer'

export default function Location() {
    return (
        <div>
            <AnimatedCSSTitle
                animated='animate__zoomInUp'
                delay='faster'
            >¿Dónde se encuentra?</AnimatedCSSTitle>
            <div className='mt-5 bg-gray-100 p-4 shadow-md w-11/12 max-w-1200 mx-auto'>
                <div className='flex gap-5'>
                    <div className='w-7/12'>
                        <Image
                            src={origin+'/location.png'}
                            alt="location"
                            width={1000}
                            height={1000}
                            objectFit="cover"
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                    <div>
                        <h2 className=' font-bold text-2xl'>Viviendas en San Lucas Cuautehlulpan Tlaxcala</h2>
                        <div className='bg-primary-yellow h-1 w-full mt-3 mb-5'></div>
                        <p>
                            Terrenos desde <b>105m2</b> con viviendas de 2, 3, 4 recamaras. <br/> 
                            Se acepta cualquier <b> tipo de crédito hipotecario </b>
                        </p>
                        <h3>Contamos con <b>CLAVE ÚNICA DE VIVIENDA</b>.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
