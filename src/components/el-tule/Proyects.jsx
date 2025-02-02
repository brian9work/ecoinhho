"use client"

import { useState } from "react"
import Image from "next/image"
import projects from "data/allProyectdata"
import { ButtonLinkYellow } from "../general/Button"

export default function Proyects() {
    const [currentProject, setCurrentProject] = useState(projects[0])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleProjectClick = (project, index) => {
        setCurrentProject(project)
        setSelectedIndex(index)
    }

    return (
        <section className="py-16 px-4 md:px-6 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-[#F7941D]">Proyecto mas reciente</h2>

                <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg p-6 shadow-sm">
                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={currentProject.source}
                            alt={`${currentProject.source} main image`}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-4">{currentProject.name}</h3>
                        <p className="text-gray-600 mb-6"><b>Objetivo: </b> {currentProject.objetive}</p>
                        <div className="w-block w-64 mx-auto">
                            <ButtonLinkYellow
                                href={currentProject.href}
                            >
                                VER PROYECTO
                            </ButtonLinkYellow>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
                    {projects.map((project, index) => (
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
    )
}

