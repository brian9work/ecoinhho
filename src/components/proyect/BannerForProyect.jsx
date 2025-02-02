import React from 'react'
import { BannerEdit } from '../banners/Banner'
import { H4, P } from '../general/Texts'
import { ButtonLinkYellow } from '../general/Button'
import Contact, { Messages } from '@/config/contact'

export default function BannerForProyect({children="Proyecto de construccion", src="cielo.jpg"}) {
    return (
        <BannerEdit
            src={src}
        >
            <div className='w-full flex items-center justify-center flex-col absolute bottom-20 z-10'>
                <H4 className='text-lg md:text-xl font-extrabold text-white max-w-3xl mb-1 font-figtree text-center'>PROYECTO</H4>
                <h1 className="block w-10/12 text-2xl md:text-5xl font-bold text-primary-yellow mb-1 font-figtree text-center uppercase" >
                    {children}
                </h1>
                <P className="text-xl md:text-2xl text-white mb-8 text-center">
                    "Construyendo tus sueños, edificando el futuro."
                </P>
                {/* <H1>RESIDENCIA RUSTICA EN EL CORAZON DE TLAXCALA</H1>
                <h3>"Construyendo tus sueños, edificando el futuro."</h3> */}
                <div className='w-8/12 max-w-96 mx-auto'>
                    <ButtonLinkYellow href={Contact(Messages.header)}>Contactar</ButtonLinkYellow>
                </div>
            </div>
        </BannerEdit>
    )
}
