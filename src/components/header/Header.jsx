"use client"
import React, { useState } from 'react'
import { ButtonLink } from 'components/general/Button'
import Logo from 'components/general/Logo';
import { TiThMenu, TiChevronRight } from "react-icons/ti";
import Menu from './Menu';

export default function Header() {
    const [menu, setMenu] = useState(false)
    // const [menu, setMenu] = menuState
    return (
        // <Menu />
        <div className='fixed left-0 top-0 z-10 w-full'>
            <header className={`absolute left-0 top-0 w-full ${menu ? "bg-black" : "bg-black/80"} py-3 z-30`}>
                <div className='grid grid-cols-12 w-11/12 m-auto place-items-center'>
                    <div className='col-span-3 max-h-14 w-28'>
                        <ButtonLink href={"./"}>Contactar</ButtonLink>
                    </div>
                    <div className='col-span-6 w-full flex items-center justify-center '>
                        <Logo />
                    </div>
                    <div className='col-span-3 flex justify-end cursor-pointer'>
                        <div onClick={() => setMenu(!menu)}>
                            {menu ?
                                <TiChevronRight 
                                    className='text-white text-6xl'
                                />
                            :
                                <TiThMenu
                                    className='text-white text-6xl'
                                />
                            }
                        </div>
                    </div>
                </div>
            </header>
            <Menu menuState={[menu, setMenu]} />
        </div>
    )
}
