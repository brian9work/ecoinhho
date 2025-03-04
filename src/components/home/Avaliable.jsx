import React from 'react'
import { AnimatedCSSTitle } from '../general/TextAnimation'
import origin from '@/config/isServer'
import RoutesFrontend from '@/config/routes'
import { ButtonLinkYellow } from '../general/Button'

export default function Avaliable() {
    const videos = [
        {
            video: "elTule.mp4",
            title: "Video de 'El Tule'",
            description: "Disfruta la vida que sueñas en tu nuevo hogar en San Lucas Cuauhtelulpan, Tlaxcala. Disfrutando los mejores momentos con tu familia y atesorar cada momento especial.",
            url: RoutesFrontend.elTule.home
        },
        {
            video: "residencial.mp4",
            title: "Video de 'Las Terrazas Residencial'",
            description: "Disfruta la vida que sueñas en un nuevo hogar seguro en nuestra zona residencial ubicada en el fraccionamiento Vista Del Sol, Tlaxcala. Disfrutando los mejores momentos con tu familia y atesorar cada momento especial.",
            url: RoutesFrontend.terrazas.home
        }
    ]
    return (
        <main className="min-h-screen p-4 md:p-8 bg-gray-50">
            <AnimatedCSSTitle
                animated='animate__zoomInUp'
                delay='faster'
            >Terrenos Disponibles</AnimatedCSSTitle>
            <div className="max-w-7xl mx-auto mt-10">
                <div className="space-y-8">
                    {/* Grid layout for videos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {videos.map((video) => (
                            <div key={video.video} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <video
                                    width="600" height="400"
                                    className="w-[100%] h-[300px] object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src={origin + `video/${video.video}`} type="video/mp4" />
                                </video>
                                <div className="p-4 mt-5">
                                    <h2 className="text-2xl font-semibold mb-2">{video.title}</h2>
                                    <p className="text-gray-600">{video.description}</p>
                                    <div className='w-11/12 mx-auto mt-5'>
                                        <ButtonLinkYellow href={video.url}>
                                            Ver más
                                        </ButtonLinkYellow>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
