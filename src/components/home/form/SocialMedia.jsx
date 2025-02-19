import React from 'react'
import { H2 } from 'components/general/Texts'
import socialData from 'data/socialData'

export default function SocialMedia() {
    return (
        <div className=' py-5 w-full md:w-4/12 mx-auto'>
            <div className='bg-white rounded-md py-5  '>
                <H2 className='text-center text-2xl uppercase font-bold'>Redes de Contacto</H2>
                {socialData.map((social, index) => {
                    return (
                        <a
                            href={social.url}
                            target='_blank'
                            className='w-10/12 mx-auto shadow-sm rounded-md p-5 my-2 flex justify-start items-center gap-3 hover:bg-primary-yellow/15'
                            key={index}
                        >
                            <span
                                className='text-5xl'
                                style={{}}
                            >{social.image}</span>
                            <div>
                                <h4 className='font-bold'>{social.contact}</h4>
                                <p>{social.title}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
