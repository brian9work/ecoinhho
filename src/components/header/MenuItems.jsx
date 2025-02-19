import React from 'react'
import LinksMenu from '@/data/LinksMenu'
import Enlace from '../general/Enlace'

const PrincipalText=({url, children})=>{
   return <h4 className='text-primary-yellow font-bold text-xl md:text-2xl mb-5'>{children}</h4>
}
const CategoryText=({children})=>{
   return <h4 className='text-yellow-50 font-bold text-md md:text-lg '>{children}</h4>
}
const NormalText=({url, children})=>{
   return <h4 className='text-yellow-50 text-md md:text-lg pl-10 py-1 hover:text-primary-yellow '>{children}</h4>
}

export default function MenuItems({event}) {
   return (
      <div className='h-5/6 overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 '>
         {LinksMenu.map((link, index) => {
            if(link.type === '1') 
               return (
                  <div key={index}>
                     {link.data.map((l, i) => {
                        return (
                           <div key={i} 
                              // className='hover:bg-gray-900'
                              onClick={()=>{
                                 event(false)
                              }}
                           >
                              <CategoryText>{link.name}</CategoryText>
                              <Enlace href={l.url}>
                                 <PrincipalText>{l.text}</PrincipalText>
                              </Enlace>
                           </div>
                        )
                     })}
                  </div>
               )
            else 
               return (
                  <div key={index} className='border-t-2 border-primary-yellow pt-2 pb-5'>
                     <CategoryText>{link.name}</CategoryText>
                     {link.data.map((l, i) => {
                        return (
                           <div key={i} 
                              // className='hover:bg-gray-900'
                              onClick={()=>{
                                 event(false)
                              }}
                           >
                              <Enlace href={l.url}>
                                 <NormalText>{l.text}</NormalText>
                              </Enlace>
                           </div>
                        )
                     })}
                  </div>
               )
         })}
      </div>
   )
}
