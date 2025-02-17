import origin from "@/config/isServer";
import Image from "next/image"
import Link from "next/link"
import images from "./data/images"

export default function Home() {
   return (
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-3xl mx-auto">

            <h1 className="text-center mt-5 mb-10 text-3xl lg:text-5xl font-bold">
               Agradecemos a
               <a 
                  href="https://unsplash.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-black ml-3 uppercase"
               >
                  Unsplash
               </a>
            </h1>
            <p className="text-center text-gray-600 mb-8">
               Queremos expresar nuestro agradecimiento a Lordicon por proporcionar las siguientes imágenes utilizadas en
               nuestro proyecto:
            </p>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
               <ul className="divide-y divide-gray-200">
                  {images.map((image, key) => (
                     <li key={key} className="px-6 py-4 hover:bg-primary-yellow/5">
                        <div className="flex items-center space-x-4">
                           <div className="flex-shrink-0 w-36 h-24  rounded-lg overflow-hidden">
                              <Image
                                 src={image.image}
                                 alt={image.title}
                                 width={150}
                                 height={150}
                                 className="object-contain object-center w-full h-full"
                              />
                           </div>
                           <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{image.title}</p>
                              <p className="text-sm text-gray-500 truncate">Autor: {image.author}</p>
                           </div>
                           <div>
                              <Link
                                 href={image.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-primary-yellow bg-primary-yellow/10 hover:bg-primary-yellow/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow"
                              >
                                 Ver imagen
                              </Link>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
            <p className="mt-8 text-center text-gray-600">
               Todas las imágenes son propiedad de sus respectivos autores y se utilizan bajo la licencia de unsplash.
            </p>
         </div>
      </div>
   );
}

