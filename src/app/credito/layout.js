"use client"
import "@/app/globals.css"
import NavTabs from "@/components/nav/Nav";
import BannerForProyect from "@/components/proyect/BannerForProyect";
import React from 'react'
import navData from "./data"
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const pathname = usePathname()
    const newData = navData.filter((item) => item.href === pathname)[0] ?? {}
  return (
    <div className="min-h-screen bg-gray-50">
        <BannerForProyect 
          category="CREDITOS"
          src={"cielo2.jpg"} 
        >{newData.name}</BannerForProyect>
        <NavTabs data={navData} origin={navData[0].href} /> 
        <div className=" w-11/12 max-w-900 mx-auto">
          {children}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  );
}

{/* <NavTabs data={navData} origin={navData[0].href} /> */}