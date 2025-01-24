import Image from "next/image"
import { AnimatedCSS } from "../general/TextAnimation"
import servicesData from "data/servicesData"

export default function ServicesComponent() {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <AnimatedCSS animated='animate__zoomInRight' delay=''>
                    <h3 className='uppercase font-bold text-center text-2xl md:text-3xl lg:text-7xl text-primary-yellow'>
                        Nuestros servicios
                    </h3>
                </AnimatedCSS>

                <div className="grid md:grid-cols-3 gap-8 mt-7 w-11/12 mx-auto md:w-10/12">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="relative h-56">
                                <div style={{ backgroundImage: `url(${service.image})` }} className="h-full w-full bg-cover bg-center">
                                    </div>
                                {/* <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" /> */}
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

