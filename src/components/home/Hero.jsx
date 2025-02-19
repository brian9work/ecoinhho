import { H2, P } from "components/general/Texts"
import { ButtonLinkYellow, ButtonLinkYellowSecondary } from "components/general/Button"
import origin from "@/config/isServer"
import Contact, { Call, Messages } from "@/config/contact"

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
        <div className='w-8/12 md:w-6/12 mt-5 grid md:flex gap-y-4'>
          <ButtonLinkYellow href={Contact(Messages.header)}>Contactar</ButtonLinkYellow>

          <div className={`w-full h-full grid place-items-center `}>
            <a
              about='_blank'
              href={Call()}
              className={`
                bg-black/40
                w-10/12 h-full 
                text-primary-yellow font-bold uppercase text-center
                 border-4 py-2 rounded-xl 
                border-primary-yellow 
                transition-all
                opacity-80
                 hover:bg-primary-yellow hover:-translate-y-1 hover:w-full hover:opacity-100 hover:text-black
                    `}
            >
              Llamar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

