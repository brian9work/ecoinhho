"use client"
import "@/app/globals.css"
import Header from "components/header/Header";
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import Menu from "components/header/Menu";
import { useState } from "react";

const Space = () => <div className="h-60"></div>

export default function Home() {
    const menuState = useState(false)
    return (
        <div className="relative bg-gray-50 ">
            <div className="relative ">
                <Header />
                <Hero />
                <Space />
                <Experience />


            </div>
        </div>
    );
}
