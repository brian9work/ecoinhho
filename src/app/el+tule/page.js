"use client"
import "@/app/globals.css"
import Header from "components/header/Header";
import { useState } from "react";
import { CaracteristicasElTule } from "@/components/el-tule/Caracteristicas";
import BannerOfCredits from "@/components/banners/BannerOfCredits";
import Documentos from "@/components/el-tule/Documentos";
import BannerForProyect from "@/components/proyect/BannerForProyect";
import Proyects from "@/components/el-tule/Proyects";
import Location from "@/components/el-tule/Location";
import BannerWhitVideo from "@/components/banners/BannerWhitVideo";
import Video from "@/components/el-tule/Video";

const Space = () => <div className="h-60"></div>

export default function Home() {
    const menuState = useState(false)
    return (
        <div className="relative bg-gray-50 ">
            <div className="relative ">
                <Header />
                <BannerWhitVideo
                    url="elTule.mp4"
                    category="Proyecto"
                    title="El tule"
                />
                <div className="h-28 md:h-48" />
                <CaracteristicasElTule />
                <div className="h-20 md:h-32" />
                <BannerOfCredits />
                <div className="h-20 md:h-32" />
                <Location />
                <div className="h-20 md:h-32" />
                <Video />
                <div className="h-20 md:h-32" />
                <Documentos />
                <div className="h-20 md:h-32" />
                <Space />
                {/* <Proyects /> */}

            </div>
        </div>
    );
}
