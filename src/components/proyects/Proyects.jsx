import React from 'react'
import { H3 } from 'components/general/Texts'
import { AnimatedCSSTitle } from 'components/general/TextAnimation'
import ProyectGeneralItem from './items/ProyectGeneralItem'

const url = "/house.png"

export default function Proyects() {
    return (
        <div>
            <AnimatedCSSTitle animated='animate__zoomInUp' delay=''>
                Nuestros Proyectos
            </AnimatedCSSTitle>
            <H3 className='mt-1 w-11/12 mx-auto'>Promocion en el costo de la vivienda por preventa, con un regalo en linea blanca a la entrega de su nueva casa</H3>
            <div className='w-11/12 md:w-full mx-auto max-w-1200 mt-10'
                style={{}}
            >
                <ProyectGeneralItem />
            </div>
        </div>
    )
}
