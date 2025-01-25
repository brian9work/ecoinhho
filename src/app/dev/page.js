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
import Proyects from "@/components/proyects/Proyects";
import TestimonialsCarousel from "@/components/Testimonials/TestimonialsCarousel";
import { Footer } from "@/components/footer/Footer";

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
                <TestimonialsCarousel />
                <Space />
                <Footer />
            </div>
        </div>
    );
}
