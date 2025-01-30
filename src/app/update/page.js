"use client";
import "@/app/globals.css"
import Header from "components/header/Header";
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import Promotion from "@/components/home/Promotion";

const Space = () => {
    return <div className="h-40"></div>
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
            </div>
        </div>
    );
}
