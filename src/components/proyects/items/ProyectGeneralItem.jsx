import React from 'react'
import ProyectsGeneralData from '@/data/ProyectsGeneralData'
import Image from 'next/image'

export default function ProyectGeneralItem() {
    return (
        <>
            {ProyectsGeneralData.map((proyect, index) => {
                return (
                    <div key={index} className='mx-auto my-10'>
                        <p className='uppercase font-bold text-xl lg:text-2xl text-primary-yellow mt-9 mb-5'>
                            {proyect.title}
                        </p>
                        <div className='flex justify-around'>
                            <Image
                                src={proyect.imagen1}
                                width={200}
                                height={100}
                                alt="ecoinhho logo"
                                // fill={"contain"}
                                // layout="contain"
                                // objectFit="contain"
                                style={{ objectFit: "contain", width: "45%", height: "auto" }}
                            />
                            <Image
                                src={proyect.imagen2}
                                width={200}
                                height={100}
                                alt="ecoinhho logo"
                                style={{ objectFit: "contain", width: "45%", height: "auto" }}
                            />
                        </div>
                        <div className='h-1 w-full bg-primary-yellow my-10'></div>
                    </div>

                )
            })}
        </>
    )
}
