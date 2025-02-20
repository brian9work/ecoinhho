import Image from "next/image"
import { AnimatedCSSTitle } from "components/general/TextAnimation"
import origin from "@/config/isServer"

const ActivitiesData = [
    {
        title: "Ciclo pista infantil.",
        description: "Servicios profesionales de construcción de planos arquitectonicos",
        image: origin + "residencial/ciclopistaInfantil.jpg",
    },
    {
        title: "Areas Sociales",
        description: "Servicios profesionales de construcción con los más altos estándares de calidad y seguridad.",
        image: origin + "residencial/gimnacio.jpg",
    },
    {
        title: "Gimnacio al aire libre",
        description: "Diseños modernos y funcionales adaptados a tus necesidades y preferencias.",
        image: origin + "residencial/gimnacio.jpg",
    },
    {
        title: "Parque para mascotas (petpark)",
        description: "Asesoría y gestión de créditos hipotecarios con las mejores instituciones financieras.",
        image: origin + "residencial/petPark.jpg",
    }
]

// src/assets/residencial/ciclopistaInfantil.jpg 
// src/assets/residencial/gimnacio.jpg 
// src/assets/residencial/gimnacio.jpg 
// src/assets/residencial/petPark.jpg
export default function Activities() {
   return (
      <section className="py-20 bg-black">
         <div className="container mx-auto px-4">
            <AnimatedCSSTitle animated='animate__zoomInDown' delay=''>
               Contariamos
            </AnimatedCSSTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 w-11/12 mx-auto ">
               {ActivitiesData.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                     <div className="relative h-56">
                        <div className="h-full w-full bg-cover bg-center">
                           <Image
                              width={450}
                              height={450}
                              src={service.image}
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
