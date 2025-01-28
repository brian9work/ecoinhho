import credito from "data/nivelesServicioFovviste"

export default function Home() {
   return (
      <div>
         <h1 className="text-center mt-10 text-2xl lg:text-4xl text-primary-yellow font-bold">Niveles de Servicio FOVISSSTE</h1>
         <div className="mt-10 w-11/12 max-w-900 mx-auto">
            {credito.map((etapa, index) => {
               return (
                  <div className="md:flex" key={index}>
                     <div 
                     style={{zIndex: 1}}
                        className="w-full md:w-52 flex items-center sticky top-24 bg-white md:bg-white/0 rounded-lg shadow-md md:shadow-none px-3 translate-y-1 py-3">
                        <h2 className="text-md md:text-lg text-center md:text-left font-bold">{etapa.etapa}</h2>
                     </div>
                     <div className="h-3 mb-5 md:mb-0 md:h-auto md:w-6" style={{ background: etapa.color }}></div>
                     <div style={{ width: "100%" }}>
                        {etapa.niveles.map((nivel, index) => {
                           return (
                              <div
                                 style={{ fontSize: "16px" }}
                                 className="w-auto my-4 p-3 rounded-tr-lg rounded-br-lg shadow-md relative overflow-hidden border-2 " key={index}>
                                 <h3 className="font-bold text-lg">{nivel.entidad}</h3>
                                 <p className="text-md">{nivel.concepto}</p>
                                 <p className="text-sm absolute top-0 right-0 bg-gray-200 py-1 px-4"><b>{nivel.dias_habiles}</b> dias habiles aprox.</p>
                                 <p className="text-sm"><b>Inicio:</b> {nivel.inicio}</p>
                              </div>
                           )
                        })}
                     </div>
                  </div>
               )
            })}
         </div>

      </div>
   );
}
