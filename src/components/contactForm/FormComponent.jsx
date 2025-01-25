import React from 'react'
import { H2, P } from '../general/Texts'
import { Input, TextArea } from '../general/Input'
import { ButtonYellow } from '../general/Button'

export default function FormComponent() {
    return (
        <form className='bg-white rounded-md py-8 w-full md:w-8/12 mx-auto'>
            <div className='w-11/12 mx-auto grid gap-1'>
                <H2 className='text-center text-2xl uppercase font-bold mb-2'>Formulario de Contacto</H2>
                <P className='text-center mb-6' >Si tienes preguntas o ideas que te gustaría compartir, envíanos un mensaje.</P>
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
    )
}
