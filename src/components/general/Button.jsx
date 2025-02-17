import Link from 'next/link'
import React from 'react'

const clases = {
    parent: 'w-full h-full grid place-items-center ',
    button: 'w-full h-full text-gray-50 py-2  font-bold  rounded-xl px-8  border-white border-2 grid place-items-center'
}

export function Button({ type = "submit", children }) {
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

export function ButtonLink({ href, children }) {
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

export function ButtonLinkYellow({ href = 'https://google.com', children }) {
    if (href.includes('http')) {
        return (
            <div className={`w-full h-full grid place-items-center `}>
                <a
                    about='blank'
                    href={href}
                    className={`
                        w-10/12 h-full 
                        text-gray-50 font-bold uppercase text-center
                        border-transparent border-4 py-2 rounded-xl 
                        bg-primary-yellow 
                        transition-all
                        opacity-80
                         hover:border-primary-yellow hover:-translate-y-1 hover:w-full hover:opacity-100
                    `}
                >
                    {children}
                </a>
            </div>
        )

    }
    return (
        <div className={`w-full h-full grid place-items-center `}>
            <Link
                about='blank'
                href={href}
                className={`
                    w-10/12 h-full 
                    text-gray-50 font-bold uppercase text-center
                    border-transparent border-4 py-2 rounded-xl 
                    bg-primary-yellow 
                    transition-all
                    opacity-80
                     hover:border-primary-yellow hover:-translate-y-1 hover:w-full hover:opacity-100
                    `}
            // hover:bg-white/90 hover:text-primary-yellow
            >
                {children}
            </Link>
        </div>
    )
}
export function ButtonLinkYellowSecondary({ href = 'https://google.com', children }) {
    if (href.includes('http')) {
        return (
            <div className={`w-full h-full grid place-items-center `}>
                <a
                    about='blank'
                    href={href}
                    className={`
                        w-10/12 h-full 
                        text-primary-yellow font-bold uppercase text-center
                         border-4 py-2 rounded-xl 
                        border-primary-yellow 
                        transition-all
                        opacity-80
                         hover:bg-primary-yellow hover:-translate-y-1 hover:w-full hover:opacity-100 hover:text-black
                    `}
                >
                    {children}
                </a>
            </div>
        )
    }
    return (
        <div className={`w-full h-full grid place-items-center `}>
            <Link
                about='blank'
                href={href}
                className={`
                    w-10/12 h-full 
                    text-primary-yellow font-bold uppercase text-center
                     border-4 py-2 rounded-xl 
                    border-primary-yellow 
                    transition-all
                    opacity-80
                     hover:bg-primary-yellow hover:-translate-y-1 hover:w-full hover:opacity-100 hover:text-white
                    `}
            // hover:bg-white/90 hover:text-primary-yellow
            >
                {children}
            </Link>
        </div>
    )
}
export function ButtonYellow({ href = "", children }) {
    return (
        <div className={`w-full h-full grid place-items-center `}>
            <button
                type='submit'
                className={`
                    w-10/12 h-full 
                    text-gray-50 font-bold uppercase text-center
                    border-transparent border-4 py-2 rounded-xl 
                    bg-primary-yellow 
                    transition-all
                    opacity-80
                     hover:border-primary-yellow hover:-translate-y-1 hover:w-full hover:opacity-100
                    `}
            // hover:bg-white/90 hover:text-primary-yellow
            >
                {children}
            </button>
        </div>
    )
}

