import { Facebook, Gmail, WhatsApp, Phone } from "data/icons"
import menu from "data/LinksMenu"
import Image from "next/image"
import Link from "next/link"
import RoutesFrontend from "@/config/routes"
import Enlace from "./Enlace"

const Item = ({ items }) => {
   const { name, data } = items
   return (
      <div>
         <h3 className="text-xl font-bold mb-4 border-b border-orange-400 pb-2">{name}</h3>
         <ul className="space-y-2">
            {data.map((link, index) => {
               return (
                  <li key={index}>
                     <Enlace
                        href={link.url}
                     >{link.text}</Enlace>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export function Footer() {
   return (
      <footer className="bg-black text-white py-12">
         <div className="container mx-auto px-4 max-w-1100">
            <div className="w-full max-w-[200px] mx-auto mb-8">
               <Link href={RoutesFrontend.home}>
                  <div className="w-full h-full rounded-lg">
                     <Image
                        src="/ecoinhho1.png"
                        alt="ecoinhho logo"
                        layout="contain"
                        width={3000}
                        height={3000}
                        className='w-full h-full object-contain object-center'
                     />
                  </div>
                  <h1
                     className='text-primary-yellow font-bold uppercase text-xl md:text-3xl lg:text-4xl text-center'
                  > Ecoinhho
                  </h1>
               </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-center">
               <div className="grid gap-8">
                  <Item items={menu[0]} />
                  <Item items={menu[1]} />
               </div>
               <div className="grid gap-8">
                  <Item items={menu[2]} />
                  <Item items={menu[3]} />
               </div>
               <div className="grid gap-8">
                  <Item items={menu[4]} />
               </div>
            </div>

            <div className="text-center mt-12">
               <p className="text-lg mb-6">"Construyendo tus sueños, edificando el futuro."</p>
               <div className="flex justify-center gap-6">
                  <a href="#" className="hover:text-orange-400">
                     <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-orange-400">
                     <WhatsApp className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-orange-400">
                     <Gmail className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-orange-400">
                     <Phone className="w-6 h-6" />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   )
}

