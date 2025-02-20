import origin from '@/config/isServer'
import Image from 'next/image'
import React from 'react'
import { AnimatedCSSTitle } from '../general/TextAnimation'

export default function Plano() {
    return (
        <div>
            <div>
                <AnimatedCSSTitle animated='animate__zoomInLeft' delay=''>
                    Plano arquitectónico
                </AnimatedCSSTitle>
                <div className='mx-auto max-w-[900px] w-11/12 aspect-w-16 aspect-h-9'>
                    <Image
                        src={origin + "residencial/plano.jpg"}
                        alt='Plano arquitectonico'
                        width={900}
                        height={600}
                    />
                </div>

            </div>
        </div>
    )
}
