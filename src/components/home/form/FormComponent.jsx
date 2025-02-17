"use client"
import React, { useState } from 'react'
import { H2, P } from 'components/general/Texts'
import { Input, TextArea } from 'components/general/Input'
import { ButtonLinkYellow, ButtonYellow } from 'components/general/Button'
import Contact, { Messages } from '@/config/contact'

export default function FormComponent() {
    const [values, setValues] = useState({
        name: "",
        phone: "",
        assunt: "",
        message: ""
    })
    return (
        <form className='bg-white rounded-md py-8 w-full md:w-8/12 mx-auto'>
            <p>name: {values.name}</p>
            <p>phone: {values.phone}</p>
            <p>assunt: {values.assunt}</p>
            <p>message: {values.message}</p>
            <div className='w-11/12 mx-auto grid gap-1'>
                <H2 className='text-center text-2xl uppercase font-bold mb-2'>Formulario de Contacto</H2>
                <P className='text-center mb-6' >Si tienes preguntas o ideas que te gustaría compartir, envíanos un mensaje.</P>
                <Input
                    type='text'
                    label="Nombre:"
                    name='name'
                    placeholder='Carlos Javier'
                    onBlur={(e)=>{
                        setValues({
                            ...values,
                            name: e.target.value,
                        })
                    }}
                />
                <Input
                    type='tel'
                    label="Telefono:"
                    name='phone'
                    placeholder='Tengo una idea para un proyecto'

                    onBlur={(e)=>{
                        setValues({
                            ...values,
                            phone: e.target.value,
                        })
                    }}
                />
                <Input
                    type='text'
                    label="Asunto:"
                    name='affair'
                    placeholder='Tengo una idea para un proyecto'

                    onBlur={(e)=>{
                        setValues({
                            ...values,
                            assunt: e.target.value,
                        })
                    }}
                />
                <TextArea
                    type='text'
                    label="Mensaje:"
                    name='message'
                    placeholder='Me gustaría saber si es posible llevar a cabo un proyecto que tengo en mente'

                    onBlur={(e)=>{
                        setValues({
                            ...values,
                            message: e.target.value,
                        })
                    }}
                />
                <P className='mt-3'>La informacion del correo lo redireccionara a whatsapp.</P>
                <div className='w-10/12 md:w-6/12 mx-auto mt-5'>
                    <ButtonLinkYellow
                        href={Contact(Messages.
                            form(
                                values.name,
                                values.phone,
                                values.assunt,
                                values.message,
                            )
                        )}
                    >Contactar</ButtonLinkYellow>
                </div>
            </div>
        </form>
    )
}
