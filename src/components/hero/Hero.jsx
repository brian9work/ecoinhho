import { H2, P } from "components/general/Texts"
import { ButtonLinkYellow } from "../general/Button"

export default function Hero() {
  return (
    <section className={`relative min-h-screen flex items-center z-0`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("https://raw.githubusercontent.com/brian9work/ecoinhho/refs/heads/main/src/assets/write.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container mx-auto relative z-10 px-4 py-20">
        <H2 className="text-2xl md:text-5xl font-bold text-primary-yellow max-w-3xl mb-6 font-figtree" >
          Especialistas en hipotecas, construccion, proyectos en Tlaxcala
        </H2>
        <P className="text-xl md:text-2xl text-white mb-8">
          "Construyendo tus sueños, edificando el futuro."
        </P>
        <div className='w-8/12 md:w-3/12 mt-5'>
          <ButtonLinkYellow href={``}>Contactar</ButtonLinkYellow>
        </div>
        {/* <button className="text-white py-2 rounded-xl mt-7 text-lg font-medium bg-primary-yellow w-40 hover:w-48 transition-all duration-300">
            CONTACTAR
          </button> */}
      </div>
    </section>
  )
}

