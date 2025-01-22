import Link from 'next/link'
import React from 'react'

const clases = {
    parent : 'w-full h-full grid place-items-center', 
    button : 'w-full h-full text-gray-50  font-bold  rounded-xl  border-white border-2 grid place-items-center'
} 

export function Button({type="submit", children}) {
    return (
        <div className={clases.parent}>
            <button 
                type={type}
                className={clases.button}>
                {children}
            </button>
        </div>
    )
}

export function ButtonLink({href, children}) {
    return (
        <div className={clases.parent}>
            <Link 
                href={href}
                className={clases.button}>
                {children}
            </Link>
        </div>
    )
}

