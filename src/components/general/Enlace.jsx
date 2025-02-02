import Link from 'next/link'
import React from 'react'

export default function Enlace({ href = 'https://google.com', children }) {
   if (href.includes('http')) {
      return (
         <a
            className='hover:text-orange-400'
            href={href}
            target='_blank'
         >
            {children}
         </a>
      )
   }
   return (
      <Link
         className='hover:text-orange-400'
         href={href}
      >
         {children}
      </Link>
   )
}
