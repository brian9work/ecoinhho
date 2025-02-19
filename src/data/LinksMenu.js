import origin from "config/isServer"
import allProyects from "./allProyectdata"
import RoutesFrontend from "@/config/routes"
import Contact, { Developer, Messages } from "@/config/contact"

const LinksMenu = [
    {
        name: "Terrenos disponibles",
        type: "2",
        data: [
            {
                text: "El tule",
                url: RoutesFrontend.elTule.home
            }
        ]
    },
    {
        name: "Financiamiento",
        type: "2",
        data: [
            { text: "Obtener crédito", url: RoutesFrontend.credito.home },
            { text: "Niveles de servicio de FOVISSSTE", url: RoutesFrontend.credito.fovissste },
            { text: "linea de credito CONSTRUYES", url: RoutesFrontend.credito.construyes },
            { text: "Proceso digital del seguro de calidad", url: RoutesFrontend.credito.seguroDeCalidad },
        ]
    },
    {
        name: "Promociones",
        type: "2",
        data: [
            { text: "Obtener producto de línea blanca", url: RoutesFrontend.elTule.home,
              description: "¡Obtén un producto de línea blanca al adquirir tu terreno con nosotros!." 
            },
            
        ]
    },
    // {
    //     name: "Proyectos",
    //     type: "2",
    //     data: [
    //         // { text: allProyects[0].name, url: allProyects[0].href },
    //         // { text: allProyects[1].name, url: allProyects[1].href },
    //         // { text: allProyects[2].name, url: allProyects[2].href },
    //         // { text: allProyects[3].name, url: allProyects[3].href },
    //         { text: "Obtener terreno mas vivienda", url: RoutesFrontend.elTule.home },
    //         { text: "Promoción de vivienda", url: RoutesFrontend.elTule.home },
    //         { text: "Obtener producto de línea blanca", url: RoutesFrontend.elTule.home }
    //     ]
    // },
    {
        name: "Sobre nosotros",
        type: "2",
        data: [
            { text: "Contacto Directo", url: Contact(Messages.header) },
            { text: "Servicios", url: Contact(Messages.header) },
            { text: "Obtener crédito", url: RoutesFrontend.credito.home },
        ]
    },
    {
        name: "Agradecimientos",
        type: "2",
        data: [
            { text: "Imágenes por Freepik", url: RoutesFrontend.agradecimientos.freepik },
            { text: "Iconos por lordicon", url: RoutesFrontend.agradecimientos.lordIcon },
            { text: "Imagenes por Unsplash", url: RoutesFrontend.agradecimientos.unsplash },
            { text: "Desarrollador de la página web", url: Developer() },
        ]
    }
]



export default LinksMenu