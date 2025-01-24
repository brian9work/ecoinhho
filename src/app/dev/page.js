"use client";
import "@/app/globals.css"
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import Experience from "components/experience/Experience";
import Promotion from "components/promotion/Promotion";
import BannerOfCredits from "components/banners/BannerOfCredits";
import Obtener from "components/obtenerTerreno/Obtener";
import ServicesComponent from "components/servicesComponent/ServicesComponent";
import Form from "@/components/contactForm/Form";
import Menu from "@/components/header/Menu";
import { useState } from "react";

const Space = () => {
    return <div className="h-60"></div>
}

export default function Home() {

    return (
        <div className="relative bg-gray-50 ">
            <div className="relative ">
                <Header />
                <Hero />
                {/* <Menu menuState={menuState} /> */}
                {/* 
                <Space />
                <Experience />
                <Space />
                <Promotion />
                <Space />
                <Obtener />
                <Space />
                <BannerOfCredits />
                <Space />
                <ServicesComponent />
                <Space />
                <Form /> */}


            </div>

            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
        </div>
    );
}
