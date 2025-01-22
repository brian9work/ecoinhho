import { H2, P } from "../general/Texts"

export default function Hero() {
    return (
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("http://localhost/ecoinhho/src/assets/write.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto relative z-10 px-4 py-20">
          <H2 className="text-4xl md:text-6xl font-bold text-primary-yellow max-w-3xl mb-6 font-figtree" >
            Especialistas en hipotecas, construccion, proyectos en Tlaxcala
          </H2>
          <P className="text-xl md:text-2xl text-white mb-8">
            "Construyendo tus sueños, edificando el futuro."
          </P>
          <button className="text-white py-2 rounded-xl text-lg font-medium bg-primary-yellow w-40 hover:w-48 transition-all duration-300">
            CONTACTAR
          </button>
        </div>
      </section>
    )
  }
  
  