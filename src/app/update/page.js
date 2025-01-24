"use client"
import "@/app/globals.css"
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import Experience from "components/experience/Experience";
import Menu from "components/header/Menu";
import { useState } from "react";

const Space = () => <div className="h-60"></div>

export default function Home() {
    const menuState = useState(false)
    return (
        <div className="relative bg-gray-50 ">
            <div className="relative ">
                <Header menuState={menuState} />
                <Menu menuState={menuState} />
                <Hero menuState={menuState} />
                <Space />
                <Experience />
                <Space />


            </div>

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
            <br />
            <br />
        </div>
    );
}
