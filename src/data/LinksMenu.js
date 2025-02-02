import origin from "config/isServer"
import allProyects from "./allProyectdata"
import RoutesFrontend from "@/config/routes"
import Contact, { Developer, Messages } from "@/config/contact"

const LinksMenu = [
    {
        name: "Promoción",
        type: "1",
        data: [
            {
                text: "Obtener Promoción",
                url: RoutesFrontend.elTule
            }
        ]
    },
    {
        name: "Proyectos",
        type: "2",
        data: [
            { text: allProyects[0].name, url: allProyects[0].href },
            { text: allProyects[1].name, url: allProyects[1].href },
            { text: allProyects[2].name, url: allProyects[2].href },
            { text: allProyects[3].name, url: allProyects[3].href },
            { text: "Obtener terreno mas vivienda", url: RoutesFrontend.elTule },
            { text: "Promoción de vivienda", url: RoutesFrontend.elTule },
            { text: "Obtener producto de línea blanca", url: RoutesFrontend.elTule }
        ]
    },
    {
        name: "Financiamiento",
        type: "2",
        data: [
            { text: "Obtener crédito", url: RoutesFrontend.credito },
            { text: "Niveles de servicio de FOVISSSTE", url: RoutesFrontend.credito.fovissste },
            { text: "linea de credito CONSTRUYES", url: RoutesFrontend.credito.construyes },
            { text: "Proceso digital del seguro de calidad", url: RoutesFrontend.credito.seguroDeCalidad },
        ]
    },
    {
        name: "Sobre nosotros",
        type: "2",
        data: [
            { text: "Contacto Directo", url: Contact(Messages.header) },
            { text: "Servicios", url: Contact(Messages.header) },
            { text: "Obtener crédito", url: RoutesFrontend.credito },
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