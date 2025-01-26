"use client"
import { usePathname } from "next/navigation"
import galeriaData from "data/galeriaData"
import Image from "next/image"

export default function Home() {
    const pathname = usePathname()
    const newData = galeriaData.filter((item) => item.href === pathname)[0]
    return (
        <div className="relative ">
            <div className="relative mt-10 mx-auto w-11/12 max-w-1200">
                <h1 className="text-2xl uppercase mb-5">
                    Galeria de: <span className="text-primary-yellow font-bold"> {newData.name}({newData.data.length}) </span> </h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {newData.data.map((item, index) => (
                        <div key={index}>
                            <Image 
                                src={item.src} 
                                alt={item.alt}
                                width={100}
                                height={100}
                                className="w-full h-80 object-cover object-center rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
