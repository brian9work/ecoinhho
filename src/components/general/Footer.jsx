import { Facebook, Gmail, WhatsApp, Phone } from "data/icons"
import Logo from "components/general/Logo"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <Logo />
            {/* <img src="/logo.png" alt="ECOINHO S.A.S. DE C.U." className="h-24 w-auto" /> */}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-orange-400 pb-2">Promociones</h3>
            <ul className="space-y-2">
              <li>Terreno y casa</li>
              <li>Preventa de Lotes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-orange-400 pb-2">Servicios</h3>
            <ul className="space-y-2">
              <li>Construccion</li>
              <li>Diseño</li>
              <li>Creditos</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-6">"Construyendo tus sueños, edificando el futuro."</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-orange-400">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange-400">
              <WhatsApp className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange-400">
              <Gmail className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange-400">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

