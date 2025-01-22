import React from 'react'
import { P } from '@/app/components/general/Texts'
import TextAnimation from '@/app/components/general/TextAnimation'
import Message from '@/app/components/Message'

const origin = "http://localhost/ecoinhho/src/assets/gifs/"
const features = [
    {
      icon: origin + "home.webp",
      title: "Viviendas desde",
      description: "$ 700,000 MXN",
    },
    {
      icon: origin + "chart.webp",
      title: "Excelente",
      description: "Plusvalia",
    },
    {
      icon: origin + "coins.webp",
      title: "Opción de",
      description: "Creditos",
    },
    {
      icon: origin + "construction.webp",
      title: "Construcción desde",
      description: "6 meses",
    },
    {
      icon: origin + "gift.webp",
      title: "Regalo de",
      description: "Linea Blanca",
    },
  ]

export default function Promotion() {
    return (
        <div>
            <P className='text-center'>Gran</P>
            <TextAnimation>PROMOCION</TextAnimation>
            <div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto justify-center items-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center ">
                            <div className="text-orange-400 mb-4 w-7/12 h-40"
                              style={{
                                backgroundImage: `url("${feature.icon}")`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                display: 'block',
                                // width: '100px',
                                // minHeight: '100px',
                              }}
                            ></div>
                            <p className="text-md text-gray-600">{feature.title}</p>
                            <h3 className="font-bold mb-1 text-xl">{feature.description}</h3>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-8">
                    <p className="text-lg mb-4">"Una localidad tranquila, cerca de escuelas, negocios, avenidas y hospitales"</p>
                    <button className="bg-orange-400 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-orange-500 transition-colors">
                        Contactar
                    </button>
                    <p className="mt-4 text-sm text-gray-600">Ver mas informacion</p>
                </div>

                <p className="text-center text-sm text-gray-500">
                    * Escrituras, avalúos, permisos municipales y mas gestiones sin costo adicional *
                </p>
            </div>
        </div>
    )
}
