import React from 'react'
import { H1, H2, H3, P } from '../general/Texts'
import SplitText from '@/hooks/SplitText'
import { SplitTextComponent } from '@/app/components/general/TextAnimation'
// import { Home, TrendingUp, PiggyBank, Building2, Gift } from "lucide-react"


export default function Experience() {
    return (
        <div className='block'
            style={{
                backgroundImage: `url("http://localhost/ecoinhho/src/assets/construction.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'block',
                minHeight: '75vh',
            }}>
            <div className='banner-experience flex items-center'
                style={{
                    height: "75vh"
                }}
            >
                <div className='w-6/12 max-w-md ml-auto py-10'>
                    <div className='w-10/12'>
                     <SplitTextComponent text="Experiencia" />
                        {/* <H3>Experiencia</H3> */}
                        {/* <div className='text-center'>
                            <SplitText
                                text="Experiencia"
                                className="text-2xl font-semibold text-center"
                                delay={150}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                easing="easeOutCubic"
                                threshold={0.4}
                                rootMargin="-50px"
                            // onLetterAnimationComplete={handleAnimationComplete()}
                            />
                        </div> */}
                        <P className='mt-6'>Con más de 25 años de experiencia en el sector de la construcción, hemos participado en proyectos, como viviendas y edificios comerciales. Nuestra trayectoria se ha forjado a través de un trabajo constante, superando desafíos técnicos y entregando resultados que destacan por su calidad, seguridad e innovación. Cada proyecto refleja nuestra capacidad para manejar construcciones complejas con soluciones eficientes y creativas.
                            Nuestro equipo de profesionales trabaja de la mano con los clientes, escuchando y adaptándose a sus necesidades para garantizar un buen proyecto. Construyendo espacios más allá de lo funcional.</P>
                    </div>
                </div>
            </div>
        </div>
    )
}
