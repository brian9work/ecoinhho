import React from 'react'
import imagens from 'data/imagensForCredits'
import Image from 'next/image'
import { AnimatedCSSTitle } from 'components/general/TextAnimation'

export default function BannerOfCredits() {
    return (
        <div className='block w-full '>

            <AnimatedCSSTitle animated='animate__zoomInUp' delay=''>
                Aceptamos Creditos
            </AnimatedCSSTitle>
            <div className='relative h-full w-full flex flex-row py-5 mt-6 '>
                <div className='absolute top-0 left-0 bg-black/5 h-full w-full'></div>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center w-8/12 m-auto max-w-900 gap-y-5 gap-x-3 '>
                    {imagens.map((imagen, index) => {
                        return (
                            <Image
                                key={index}
                                src={imagen.imagen}
                                alt={imagen.name}
                                width={200}
                                height={200}
                                style={{
                                    objectFit: 'contain',
                                    display: 'block',
                                    width: '90%',
                                    height: "100px",
                                    margin: 'auto',
                                    // background: "red"
                                }}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
