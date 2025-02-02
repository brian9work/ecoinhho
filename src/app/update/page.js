"use client";
import "@/app/globals.css"
import Header from "components/header/Header";
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import Promotion from "@/components/home/Promotion";
import Obtener from "@/components/home/Obtener";

export default function Home() {

    return (
        <div className="relative bg-gray-50 ">
            <div className="relative ">
                <Header />
                <Hero />
                <div className="h-20 md:h-32" />
                <Experience />
                <div className="h-28 md:h-48" />
                <Promotion />
                <div className="h-20 md:h-32" />
                <Obtener />
            </div>
        </div>
    );
}
