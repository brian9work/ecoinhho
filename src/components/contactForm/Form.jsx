import React from 'react'
import { H2, H3, P } from 'components/general/Texts'
import { Input, TextArea } from 'components/general/Input'
import { Button, ButtonYellow } from '../general/Button'
import socialData from 'data/socialData'

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
                    <H2 className='text-center uppercase'>contacto</H2>
                    <P className='text-center' >Si tienes preguntas o ideas que te gustaría compartir, envíanos un mensaje.</P>
                </div>
                <div className='mt-14 block w-full md:w-6/12 mx-auto md:flex md:justify-center md:items-center md:flex-row-reverse'
                    style={{
                        maxWidth: '1200px',
                    }}
                >
                    <form className='bg-white rounded-md py-5 w-11/12 md:w-8/12 mx-auto'>
                        <div className='w-11/12 mx-auto grid gap-1'>
                            <H2 className='text-center'>Formulario de Contacto</H2>
                            <Input
                                type='text'
                                label="Nombre"
                                name='name'
                                placeholder='Carlos Javier'
                            />
                            <Input
                                type='tel'
                                label="Telefono"
                                name='phone'
                                placeholder='Tengo una idea para un proyecto'
                            />
                            <Input
                                type='text'
                                label="Asunto"
                                name='affair'
                                placeholder='Tengo una idea para un proyecto'
                            />
                            <TextArea
                                type='text'
                                label="Mensaje"
                                name='message'
                                placeholder='Me gustaría saber si es posible llevar a cabo un proyecto que tengo en mente'
                            />
                            <P className='mt-3'>La informacion del correo lo redireccionara a whatsapp.</P>
                            <div className='w-10/12 md:w-6/12 mx-auto mt-5'>
                                <ButtonYellow>Contactar</ButtonYellow>
                            </div>
                        </div>
                    </form>
                    <div className=' py-5 w-11/12 md:w-4/12 mx-auto'>
                        <div className='bg-white rounded-md py-5  '>
                            <H2 className='text-center'>Redes de Contacto</H2>
                            {socialData.map((social, index) => {
                                return (
                                    <div
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
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
