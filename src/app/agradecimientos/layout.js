"use client"
import "@/app/globals.css"
import BannerForProyect from "@/components/proyect/BannerForProyect";
import React from 'react'

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
        <BannerForProyect 
          category="Agradecimientos"
          src={"agradecimientos.jpg"} 
        >¡GRACIAS!</BannerForProyect>
        <div className=" w-11/12 max-w-1200 mx-auto">
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