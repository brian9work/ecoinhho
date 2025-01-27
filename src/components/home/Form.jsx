import React from 'react'
import { AnimatedCSSTitle } from 'components/general/TextAnimation'
import FormComponent from './form/FormComponent'
import SocialMedia from './form/SocialMedia'
import origin from '@/config/isServer'

export default function Form() {
    return (
        <div
            className='py-28'
            style={{
                backgroundImage: `url(${origin}imagen.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='w-11/12 mx-auto'>
                <div>
                    <AnimatedCSSTitle animated='animate__zoomInUp' delay=''>
                        contacto
                    </AnimatedCSSTitle>
                </div>
                <div className='mt-14 block w-full md:w-9/12 mx-auto md:flex md:justify-center md:items-center md:flex-row-reverse'
                    style={{
                        maxWidth: '1200px',
                    }}
                >
                    <FormComponent />
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}
