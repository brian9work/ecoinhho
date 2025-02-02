import Link from 'next/link'
import React from 'react'

export default function Enlace({ href = '', children }) {

   if (href === '') {
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
