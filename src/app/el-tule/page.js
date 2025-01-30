"use client"
import "@/app/globals.css"
import Header from "components/header/Header";
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import Menu from "components/header/Menu";
import { useState } from "react";
import Banner, { BannerEdit } from "@/components/banners/Banner";
import Caracteristicas from "@/components/el-tule/Caracteristicas";
import BannerOfCredits from "@/components/banners/BannerOfCredits";
import Documentos from "@/components/el-tule/Documentos";
import origin from "@/config/isServer";
import BannerForProyect from "@/components/proyect/BannerForProyect";

const Space = () => <div className="h-60"></div>

export default function Home() {
    const menuState = useState(false)
    return (
        <div className="relative bg-gray-50 ">
            <div className="relative ">
                <Header />
                <BannerForProyect src={"familia.jpg"}>El Tule</BannerForProyect>
                <Space />
                <Caracteristicas />
                <BannerOfCredits />
                <Space />
                <Documentos />

            </div>
        </div>
    );
}
