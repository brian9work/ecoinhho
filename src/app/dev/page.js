"use client";
import "@/app/globals.css"
import Header from "components/header/Header";
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import Promotion from "@/components/home/Promotion";
import BannerOfCredits from "components/banners/BannerOfCredits";
import Obtener from "components/home/Obtener";
import ServicesComponent from "@/components/home/ServicesComponent";
import Form from "@/components/home/Form";
import Proyects from "@/components/home/Proyects";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import { Footer } from "@/components/general/Footer";
import Galery from "@/components/home/Galery";

const Space = () => {
    return <div className="h-60"></div>
}

export default function Home() {

    return (
        <div className="relative bg-gray-50 ">
            <div className="relative ">
                <Header />
                <Hero />
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
                <Form />
                <Space />
                <Proyects />
                <Space />
                <Galery />
                <Space />
                <TestimonialsCarousel />
                <Space />
            </div>
        </div>
    );
}
