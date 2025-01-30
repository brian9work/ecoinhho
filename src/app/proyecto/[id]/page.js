"use client"
import "@/app/globals.css"
import BannerForProyect from "@/components/proyect/BannerForProyect";
import data from "data/allProyectdata"
import { usePathname } from "next/navigation";
import NavTabs from "@/components/nav/Nav";
import { AnimatedCSSTitle } from "@/components/general/TextAnimation";
import Image from "next/image";
import origin from "@/config/isServer";
import { P } from "@/components/general/Texts";

export default function Home() {
    const pathname = usePathname()
    const newData = data.filter((item) => item.href === pathname)[0] ?? {}
    return (
        <div className="relative bg-gray-50 pb-96">
            <BannerForProyect
                src="cielo3.jpg"
            >{newData.name}</BannerForProyect>
            <div className="mt-20">
                <NavTabs data={data} origin={data[0].href} />
            </div>
            <div className="w-10/12 mx-auto max-w-900">
                <h2 className="text-center mt-16 text-primary-yellow font-bold text-lg md:text-2xl">
                    <b className=" font-extrabold text-2xl md:text-5xl font-serif text-gray-600">"</b>
                    {newData.slogan}
                    <b className=" font-extrabold text-2xl md:text-5xl font-serif text-gray-600">"</b>
                </h2>
            </div>
            <div className="w-11/12 max-w-1200 mx-auto ">
                <div className="mt-5">
                    <Image
                        src={origin + "cielo3.jpg"}
                        alt={"Imagen"}
                        width={1200}
                        height={600}
                        className="w-full h-[75vh] object-cover"
                    />
                </div>
                <div className="mt-10">
                    <P>
                        <b>Objetivo: </b> 
                        {newData.objetive}
                    </P>
                    <P>
                        <b>Rqeurimiento Basico: </b> 
                        {newData.requeriment}
                    </P>
                </div>
                <div className="mt-16">
                    <h4 className="text-primary-yellow text-lg md:text-2xl font-bold">Imagenes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                        {newData.imagens.map((img, key) =>{
                            return (
                                <div className="" key={key}>
                                    <Image
                                        src={origin + "cielo2.jpg"}
                                        alt={"Imagen"}
                                        width={1200}
                                        height={600}
                                        className="w-auto h-auto rounded-md object-cover"

                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-16">
                    <h4 className="text-primary-yellow text-lg md:text-2xl font-bold">Modelos o planos</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                        {newData.models.map((img, key) =>{
                            return (
                                <div className="" key={key}>
                                    <Image
                                        src={origin + "draw.png"}
                                        alt={"Imagen"}
                                        width={1200}
                                        height={600}
                                        className="w-auto h-auto rounded-md object-cover"

                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-16">
                    <h4 className="text-primary-yellow text-lg md:text-2xl font-bold">Mas detalles</h4>
                    <div className="grid mt-2">
                        {newData.others.map((other, key) =>{
                            return (
                                <div className="" key={key}>
                                    <P>
                                        <b className="mr-2">{other.text}:</b>
                                        {other.content}
                                    </P>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}
