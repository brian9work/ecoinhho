import React from 'react'
import { H3 } from 'components/general/Texts'
import { AnimatedCSSTitle } from 'components/general/TextAnimation'
import ProyectGeneralItem from './items/ProyectGeneralItem'
import { ButtonLinkYellowSecondary } from '../general/Button'

const url = "/house.png"

export default function Proyects() {
    return (
        <div>
            <AnimatedCSSTitle animated='animate__zoomInUp' delay=''>
                Nuestros Proyectos
            </AnimatedCSSTitle>
            <H3 className='mt-1 w-11/12 mx-auto'>Promocion en el costo de la vivienda por preventa, con un regalo en linea blanca a la entrega de su nueva casa</H3>
            <div className='w-11/12 md:w-full mx-auto max-w-1400 mt-10 flex flex-wrap justify-center gap-4'
                style={{}}
            >
                <ProyectGeneralItem />
            </div>
            <div className='mt-10 w-8/12 max-w-96 mx-auto'>
                <ButtonLinkYellowSecondary href='' className='mt-10'>Ver mas proyectos</ButtonLinkYellowSecondary>

            </div>
        </div>
    )
}
