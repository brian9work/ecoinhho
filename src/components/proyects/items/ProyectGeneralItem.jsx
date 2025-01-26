import React from 'react'
import ProyectsGeneralData from '@/data/ProyectsGeneralData'
import Image from 'next/image'

export default function ProyectGeneralItem() {
    return (
        <>
            {ProyectsGeneralData.map((proyect, index) => {
                return (
                    <div key={index} className=' w-11/12 max-w-96 p-3 shadow-sm shadow-primary-yellow rounded-lg'>
                        <p className='uppercase font-bold text-xl lg:text-2xl text-primary-yellow  mb-5 '>
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
                                style={{ objectFit: "cover", width: "47%", height: "250", }}
                            />
                            <Image
                                src={proyect.imagen2}
                                width={200}
                                height={100}
                                alt="ecoinhho logo"
                                style={{ objectFit: "cover", width: "47%", height: "250", }}
                            />
                        </div>
                        {/* <div className='h-1 w-full bg-primary-yellow my-10'></div> */}
                    </div>

                )
            })}
        </>
    )
}
