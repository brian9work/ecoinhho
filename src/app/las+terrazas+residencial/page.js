"use client"
import "@/app/globals.css"
import Header from "components/header/Header";
import { useState } from "react";
import { CaracteristicasResidencial } from "@/components/el-tule/Caracteristicas";
import BannerOfCredits from "@/components/banners/BannerOfCredits";
import Documentos from "@/components/el-tule/Documentos";
import BannerForProyect from "@/components/proyect/BannerForProyect";
import Location from "@/components/residencial/Location";
import Information from "@/components/residencial/Information";
import Activities from "@/components/residencial/Activities";
import Plano from "@/components/residencial/Plano";

const Space = () => <div className="h-60"></div>

export default function Home() {
    const menuState = useState(false)
    return (
        <div className="relative bg-gray-50 ">
            <div className="relative ">
                <Header />
                <BannerForProyect src={"residencial/residencialBanner.jpeg"}>Las Terrazas Residencial</BannerForProyect>
                <div className="h-28 md:h-48" />
                <CaracteristicasResidencial />
                <div className="h-20 md:h-32" />
                <Information />
                <div className="h-20 md:h-32" />
                <Location />
                <div className="h-20 md:h-32" />
                <Activities />
                <div className="h-20 md:h-32" />
                <Plano />
                <div className="h-20 md:h-32" />
                <BannerOfCredits />
                <div className="h-20 md:h-32" />
                <Documentos />
                <div className="h-20 md:h-32" />
                <Space />
                {/* <Proyects /> */}

            </div>
        </div>
    );
}
