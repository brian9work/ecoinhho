"use client"

import "@/app/globals.css"
import Banner from "@/components/banners/Banner";
import { Footer } from "@/components/general/Footer";
import Header from "@/components/header/Header";
import NavTabs from "@/components/nav/Nav";
import navData from "@/data/galeriaData"

export default function RootLayout({ children }) {
   return (
      <div className="relative">
         <Header />
         <Banner>Banner de imagenes</Banner>
         <NavTabs data={navData} origin={navData[0].href} />
         <div className="mb-96">
            {children}
         </div>
         <Footer />
      </div>
   );
}
