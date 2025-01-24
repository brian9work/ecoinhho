import React from 'react'
import Image from "next/image";

export default function Logo() {
    return (
        <div className=' relative flex items-center justify-center flex-col '>
            <div className="relative w-28 h-12 rounded-lg overflow-hidden shadow-lg">
                <Image
                    // className=" bg-red-500"
                    src="/ecoinhho1.png"
                    alt="ecoinhho logo"
                    layout="contain"
                    width={100}
                    height={100}
                    objectFit="cover"
                />
            </div>
            <h1
                className='text-yellow-500 font-bold uppercase text-xl'
            > Ecoinhho
            </h1>
        </div>
    )
}
