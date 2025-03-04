import React from 'react'
import { H1, H4, P } from '../general/Texts'
import { ButtonLinkYellow } from '../general/Button'
import Contact, { Messages } from '@/config/contact'
import origin from "@/config/isServer"


export default function BannerWhitVideo({ 
        url = "", 
        category = "PROYECTO", 
        title = "Proyecto de construccion", 
    }) {
    return (

        <div className={"relative h-[95vh] bg-cover bg-center z-0 "}
        // style={{ backgroundImage: `url(${origin + src})` }}
        >
            <video
                width="900" height="600"
                className="w-[100%] h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={origin + `video/${url}`} type="video/mp4" />
            </video>
            <div className='absolute top-0 w-full h-full flex items-center justify-center flex-col bg-black/60'>
                    <H4 className='text-lg md:text-xl font-extrabold text-white max-w-3xl mb-1 font-figtree text-center '>
                        {category}
                    </H4>
                    <h1 className="block w-10/12 text-2xl md:text-5xl font-bold text-primary-yellow mb-1 font-figtree text-center uppercase" >
                        {title}
                    </h1>
                    <P className="text-xl md:text-2xl text-white mb-8 text-center">
                        "Construyendo tus sueños, edificando el futuro."
                    </P>
                    <div className='w-8/12 max-w-96 mx-auto'>
                        <ButtonLinkYellow href={Contact(Messages.header)}>Contactar</ButtonLinkYellow>
                    </div>
            </div>
            {/* <div className='w-full flex items-center justify-center flex-col absolute bottom-20 z-10'>
                <H4 className='text-lg md:text-xl font-extrabold text-white max-w-3xl mb-1 font-figtree text-center'>{category}</H4>
                <h1 className="block w-10/12 text-2xl md:text-5xl font-bold text-primary-yellow mb-1 font-figtree text-center uppercase" >
                    {children}
                </h1>
                <P className="text-xl md:text-2xl text-white mb-8 text-center">
                    "Construyendo tus sueños, edificando el futuro."
                </P>
                <div className='w-8/12 max-w-96 mx-auto'>
                    <ButtonLinkYellow href={Contact(Messages.header)}>Contactar</ButtonLinkYellow>
                </div>
            </div> */}
        </div>
    )
}