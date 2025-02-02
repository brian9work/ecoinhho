import React from 'react'
import galeryData from '@/data/galeriaData'
import { AnimatedCSSTitle } from '../general/TextAnimation'
import { ButtonLinkYellowSecondary } from '../general/Button'

export default function Galery() {
    return (
        <div>
            <AnimatedCSSTitle animated='animate__zoomInLeft' delay=''>
                Galeria
            </AnimatedCSSTitle>
            <div className='mt-10 w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {galeryData.map((item, index) => {
                    return (
                        <div key={index} className="relative group">
                            <img
                                src={item.imagen}
                                alt={item.name}
                                className="w-full aspect-video object-cover"
                            />
                            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <h3 className="text-white font-bold text-xl mb-4 uppercase">{item.name}</h3>
                                <div className='w-52 h-12'>
                                    <ButtonLinkYellowSecondary href={item.href}>
                                        Ver más
                                    </ButtonLinkYellowSecondary>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
