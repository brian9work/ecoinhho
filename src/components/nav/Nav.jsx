"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavTabs({data, origin}) {
   const pathname = usePathname()

   const isHome = pathname === origin

   const tabs=data

   return (
      <div className="w-full">
         <div className="max-w-7xl mx-auto px-4 ">
            <div className="overflow-x-auto -mx-4 px-4 py-3 scrollbar-hide bg-white">
               <nav className="flex space-x-1 border-b-0 min-w-max bg-gray-100 rounded-xl">
                  {tabs.map((tab, index) => (
                     <Link
                        key={index}
                        href={tab.href}
                        className={"inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 " + 
                           (isHome && tab.href === "/galeria/acabados" || pathname === tab.href ? "bg-primary-yellow text-gray-800  shadow-lg shadow-primary-yellow/50 " : " hover:bg-primary-yellow/10 hover:text-primary-yellow shadow-sm hover:shadow-primary-yellow/90  ")
                        }
                     >
                        {tab.name}
                     </Link>
                  ))}
               </nav>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
         </div>
      </div>
   )
}

