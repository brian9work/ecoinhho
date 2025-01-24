import React from 'react'
import { Button, ButtonLink } from 'components/general/Button'
import Logo from 'components/general/Logo';
import { TiThMenu } from "react-icons/ti";
import Menu from './Menu';

export default function Header() {
    return (
        // <Menu />
        <header className='absolute left-0 top-0 w-full z-50 bg-black/80 py-3'>
            <div className='grid grid-cols-12 w-11/12 m-auto place-items-center'>
                <div className='col-span-3 max-h-10 w-28'>
                    <ButtonLink href={"./"}>Contactar</ButtonLink>
                </div>
                <div className='col-span-6 w-full flex items-center justify-center '>
                    <Logo />
                </div>
                <div className='col-span-3 flex justify-end'>
                    <div>
                        <TiThMenu
                            className='text-white text-4xl'
                            />
                    </div>
                </div>
            </div>
        </header>
    )
}
