// const origin = "https://raw.githubusercontent.com/brian9work/ecoinhho/refs/heads/main/src/assets/gifs/"
import origin from "config/isServer"
import allProyects from "./allProyectdata"

const LinksMenu = [
    {
        name: "Promoción",
        type: "1",
        data: [
            {
                text: "Obtener Promoción",
                url: ""
            }
        ]
    },
    {
        name: "Proyectos",
        type: "2",
        data: [
            { text: allProyects[0].name, url: "" },
            { text: allProyects[1].name, url: "" },
            { text: allProyects[2].name, url: "" },
            { text: allProyects[3].name, url: "" },
            { text: "Obtener terreno mas vivienda", url: "" },
            { text: "Promoción de vivienda", url: "" },
            { text: "Obtener producto de línea blanca", url: "" }
        ]
    },
    {
        name: "Financiamiento",
        type: "2",
        data: [
            { text: "Niveles de servicio de FOVISSSTE", url: "" },
            { text: "Obtener crédito", url: "" }
        ]
    },
    {
        name: "Agradecimientos",
        type: "2",
        data: [
            { text: "Obtención de imágenes", url: "" },
            { text: "Iconos", url: "" },
            { text: "Desarrollador de la página web", url: "" }
        ]
    }
]



export default LinksMenu