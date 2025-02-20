import React, { useState } from 'react'
import { AnimatedCSSTitle } from '../general/TextAnimation'
import Image from 'next/image'
import projects from "data/allProyectdata"
import { ButtonLinkYellow } from '../general/Button'
import origin from '@/config/isServer'

const galery = [
    {
        id: "3",
        title: "Entrada",
        description: "Referencia de la entrada al fraccionamiento",
        source: origin + "residencial/entrada.jpeg",
    }, 
    {
        id: "2",
        title: "Parque",
        description: "Referencia del parque dentro del fraccionamiento ",
        source: origin + "residencial/referencia2.jpeg",
    }, 
    {
        id: "1",
        title: "Vista Aérea",
        description: "Referencia del fraccionamiento de residencias",
        source: origin + "residencial/residencialBanner.jpeg",
    }, 
    {
        id: "4",
        title: "Mapa del fraccionamiento",
        description: "Referencia de la organización  del fraccionamiento",
        source: origin + "residencial/map.jpeg",
    },
    {
        id: "5",
        title: "Imagen aérea",
        description: "Imagen aérea del fraccionamiento en su estado actual",
        source: origin + "residencial/terreno.jpeg",
    },
    {
        id: "6",
        title: "Imagen aérea",
        description: "Imagen aérea del fraccionamiento en su estado actual",
        source: origin + "residencial/terreno2.jpeg",
    },
]

export default function Information() {
    
    const [currentProject, setCurrentProject] = useState(galery[0])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleProjectClick = (project, index) => {
        setCurrentProject(project)
        setSelectedIndex(index)
    }
  return (
    <div>
             <AnimatedCSSTitle
                animated='animate__zoomInUp'
                delay='faster'
             >Planeacion del Terreno</AnimatedCSSTitle>
             <div>

             <section className="py-16 px-4 md:px-6 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg p-6 shadow-sm">
                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={currentProject.source}
                            alt={`${currentProject.source} main image`}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex flex-col justify-center max-w-[400px]">
                        <h3 className="text-3xl font-bold mb-4">{currentProject.title}</h3>
                        <p className="text-gray-600 mb-6"><b></b> {currentProject.description}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
                    {galery.map((project, index) => (
                        <div
                            key={project.id}
                            className={`relative aspect-[4/3] w-full cursor-pointer transition-all duration-200 ${selectedIndex === index ? "ring-4 ring-[#F7941D] ring-offset-2" : ""
                                }`}
                            onClick={() => handleProjectClick(project, index)}
                        >
                            <Image
                                src={project.source}
                                alt={`${project.name} thumbnail`}
                                fill
                                className="object-cover rounded-lg hover:opacity-80 transition-opacity"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
             </div>
    </div>
  )
}
