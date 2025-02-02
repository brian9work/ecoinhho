"use client"

import "@/app/globals.css"
import { BannerEdit } from "@/components/banners/Banner";
import NavTabs from "@/components/nav/Nav";
import navData from "@/data/galeriaData"

export default function RootLayout({ children }) {
   return (
      <div className="relative">
         <BannerEdit
            src="cielo2.jpg"
         >
            <div className='w-full flex items-center justify-center flex-col absolute inset-0 z-10'>
               <h3 className="text-primary-yellow text-center text-2xl md:text-5xl font-bold">
                  Banner de imagenes
               </h3>
            </div>
            
            </BannerEdit>
         <NavTabs data={navData} origin={navData[0].href} />
         <div className="">
            {children}
         </div>
      </div>
   );
}
