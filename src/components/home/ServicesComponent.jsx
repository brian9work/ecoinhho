import Image from "next/image"
import { AnimatedCSSTitle } from "components/general/TextAnimation"
import servicesData from "data/servicesData"

export default function ServicesComponent() {
   return (
      <section className="py-20 bg-black">
         <div className="container mx-auto px-4">
            <AnimatedCSSTitle animated='animate__zoomInDown' delay=''>
               Nuestros servicios
            </AnimatedCSSTitle>
            <div className="grid md:grid-cols-3 gap-8 mt-7 w-11/12 mx-auto md:w-10/12">
               {servicesData.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                     <div className="relative h-56">
                        <div className="h-full w-full bg-cover bg-center">
                           <Image
                              width={450}
                              height={450}
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              className="object-cover w-full h-full"
                           />
                        </div>
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

