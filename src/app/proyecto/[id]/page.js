"use client"
import "@/app/globals.css"
import BannerForProyect from "@/components/proyect/BannerForProyect";
import data from "data/allProyectdata"
import { usePathname } from "next/navigation";
import NavTabs from "@/components/nav/Nav";
import Image from "next/image";
import origin from "@/config/isServer";
import { P } from "@/components/general/Texts";
import NotProyectFound from "../components/NotProyectFound";

export default function Home() {
    const pathname = usePathname()
    const newData = data.filter((item) => item.href === pathname)[0] ?? {}

    if (!newData.name) {
        return (
            <NotProyectFound />
        )
    }

    return (
        <div className="relative bg-gray-50 pb-96">
            <BannerForProyect
                src="cielo3.jpg"
            >{newData.name}</BannerForProyect>
            <div className="mt-20">
                <NavTabs data={data} origin={data[0].href} />
            </div>
            <div className="w-10/12 mx-auto max-w-900">
                <h2 className="text-center mt-16 text-primary-yellow font-bold font-Catamaran text-2xl md:text-4xl">
                    <b className="text-4xl md:text-5xl text-gray-600">"</b>
                    {newData.slogan}
                    <b className="text-4xl md:text-5xl text-gray-600">"</b>
                </h2>
            </div>
            <div className="w-11/12 max-w-1200 mx-auto ">
                <div className="mt-5">
                    <Image
                        src={newData.source}
                        alt={"Imagen"}
                        width={1200}
                        height={600}
                        className="w-full h-[75vh] object-cover"
                    />
                </div>
                <div className="mt-5">
                    <P className="text-lg md:text-xl">
                        <b>Objetivo: </b>
                        {newData.objetive}
                    </P>
                    <P className="text-lg md:text-xl">
                        <b>Rqeurimiento Basico: </b>
                        {newData.requeriment}
                    </P>
                </div>
                <div className="mt-16">
                    <h4 className="text-primary-yellow text-2xl md:text-4xl font-bold">Imagenes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                        {newData.imagens.map((img, key) => {
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
                    <h4 className="text-primary-yellow text-2xl md:text-4xl font-bold">Modelos o planos</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                        {newData.models.map((img, key) => {
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
                    <h4 className="text-primary-yellow text-2xl md:text-4xl font-bold">Mas detalles</h4>
                    <div className="grid mt-2">
                        {newData.others.map((other, key) => {
                            return (
                                <div className="" key={key}>
                                    <P className="text-lg md:text-xl">
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
