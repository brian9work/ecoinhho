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
                <div className='flex gap-5 min-h-[400px] items-center'>
                    <div className='w-7/12'>
                        <iframe 
                        className='w-full h-full min-h-[400px] object-cover object-center'
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3766.0411051535293!2d-98.24662402478951!3d19.280578581966573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE2JzUwLjEiTiA5OMKwMTQnMzguNiJX!5e0!3m2!1sen!2smx!4v1740083390906!5m2!1sen!2smx"></iframe>
                    </div>
                    <div className='w-5/12'>
                        <h2 className=' font-bold text-2xl'>Viviendas en Fraccionamiento Vista Del Sol, Tlaxcala</h2>
                        <div className='bg-primary-yellow h-1 w-full mt-3 mb-5'></div>
                        <p>Barrio de <b>Cazatotla</b>.</p>
                        <p>Santa María Acuitlapilco, Tlaxcala</p>
                        <p>CP: 90110.</p>
                        <p>Terrenos desde con viviendas de 2, 3, 4 recamaras.</p>
                        <p>Se acepta cualquier <b> tipo de crédito hipotecario </b> </p>
                        <h3>Contamos con <b>CLAVE ÚNICA DE VIVIENDA</b>.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
