import { H2, P } from "components/general/Texts"
import { ButtonLinkYellow } from "components/general/Button"
import origin from "@/config/isServer"
import Contact, { Messages } from "@/config/contact"

export default function Hero() {
  return (
    <section className={`relative min-h-screen flex items-center z-0`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${origin}write.jpg")`,
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
          <ButtonLinkYellow href={Contact(Messages.header)}>Contactar</ButtonLinkYellow>
        </div>
      </div>
    </section>
  )
}

