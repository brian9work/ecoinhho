import React from 'react'
import { H2, H3 } from '../general/Texts'
import imagens from 'data/imagensForCredits'

export default function BannerOfCredits() {
  return (
    <div className='block w-full '>
        <H3 className='text-center'>Aceptamos Creditos</H3>
        <div className='relative h-full w-full flex flex-row py-5'>
            <div className='absolute top-0 left-0 bg-black/20 h-full w-full'></div>
            <div className='grid grid-cols-3 w-10/12 m-auto max-w-screen-md'>
            {imagens.map((imagen, index) => {
                return (<div
                    key={index}
                    className=' w-10/12'
                    style={{
                        backgroundImage: `url("${imagen.imagen}")`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        display: 'block',
                        // width: '90%',
                        height: "27vh"
                     }}
                
                ></div>)
            })}
                {/* <img className='block w-16' src={imagens[0].imagen} alt={imagens[0].name} />
                <img className='block w-16' src={imagens[1].imagen} alt={imagens[1].name} />
                <img className='block w-16' src={imagens[2].imagen} alt={imagens[2].name} /> */}
            </div>
        </div>
    </div>
  )
}
