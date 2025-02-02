import React from 'react'
import { H3, P } from 'components/general/Texts'

export default function Experience() {
    return (
        <div className='block banner-experience-content'
            style={{
                backgroundImage: `url("https://raw.githubusercontent.com/brian9work/ecoinhho/refs/heads/main/src/assets/construction.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'block',
            }}>
            <div className='banner-experience flex items-center'
                style={{
                }}
            >
                <div className='w-6/12 max-w-md ml-auto py-10'>
                    <div className='w-10/12 overflow-hidden' id='component'
                        style={{
                            maxHeight: '50vh',
                        }}
                    >
                        <H3>Experiencia</H3>
                        <P className='mt-6'>Con más de 25 años de experiencia en el sector de la construcción, hemos participado en proyectos, como viviendas y edificios comerciales. Nuestra trayectoria se ha forjado a través de un trabajo constante, superando desafíos técnicos y entregando resultados que destacan por su calidad, seguridad e innovación. Cada proyecto refleja nuestra capacidad para manejar construcciones complejas con soluciones eficientes y creativas.
                            Nuestro equipo de profesionales trabaja de la mano con los clientes, escuchando y adaptándose a sus necesidades para garantizar un buen proyecto. Construyendo espacios más allá de lo funcional.</P>
                    </div>
                </div>
            </div>
        </div>
    )
}
