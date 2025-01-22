import React from 'react'
import Image from "next/image";
import Logo from '../general/Logo';
// import imagen from "@/assets/imagen.jpg"

export default function Menu() {
    return (
        <div className='h-full'>
            <div className='relative h-full'>
                <div
                    className='w-5/12 absolute left-0 top-0 h-full'
                    style={{
                        backgroundImage: `url("http://localhost/ecoinhho/src/assets/imagen.jpg")`,
                        backgroundSize: 'cover',
                    }}
                >
                </div>
                <div className='
                    absolute top-0 right-0 
                    fondoHeader
                    w-full h-full
                    text-white
                    '>
                    <div className='bg-red-400 ml-auto mr-7 w-6/12'>
                        <div className='py-5'>
                            <Logo />
                        </div>
                        <div>
                            <h2>Promocion</h2>
                            <div>
                                <p>Terreno mas construccion</p>
                                <p>Una planta dos recamaras</p>
                                <p>Dos plantas dos recamaras</p>
                                <p>Dos plantas tres recamaras</p>
                            </div>
                            <div>
                                <p>Proyectos</p>
                                <p>Servicios</p>
                                <p>Formulario de contacto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1>Hola</h1> */}
        </div>
    )
}
