import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import RoutesFrontend from '@/config/routes';

export default function Logo() {
    return (
        <div className=' relative flex items-center justify-center flex-col '>
            <Link href={RoutesFrontend.home}>
            <div className="relative w-28 h-12 rounded-lg overflow-hidden shadow-lg">
                <Image
                    src="/ecoinhho1.png"
                    alt="ecoinhho logo"
                    layout="contain"
                    width={150}
                    height={150}
                    objectFit="cover"
                    className='w-full h-full object-contain object-center'
                    />
            </div>
            <h1
                className='text-primary-yellow font-bold uppercase text-xl'
                > Ecoinhho
            </h1>
                </Link>
        </div>
    )
}
