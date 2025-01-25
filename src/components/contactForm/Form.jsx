import React from 'react'
import { H2, H3, P } from 'components/general/Texts'
import { Input, TextArea } from 'components/general/Input'
import { Button, ButtonYellow } from '../general/Button'
import socialData from 'data/socialData'
import { AnimatedCSS } from '../general/TextAnimation'
import FormComponent from './FormComponent'
import SocialMedia from './SocialMedia'

export default function Form() {
    return (
        <div
            className='py-28'
            style={{
                backgroundImage: 'url(https://raw.githubusercontent.com/brian9work/ecoinhho/refs/heads/main/src/assets/imagen.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}
        >
            <div className='w-11/12 mx-auto'>
                <div>

                    <AnimatedCSS animated='animate__zoomInUp' delay=''>
                        <h3 className='uppercase font-bold text-center text-2xl md:text-3xl lg:text-7xl text-primary-yellow'>
                        contacto
                        </h3>
                    </AnimatedCSS>
                    {/* <H3 className='text-center uppercase'></H3> */}
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
