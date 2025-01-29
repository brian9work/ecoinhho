// const origin = "https://raw.githubusercontent.com/brian9work/ecoinhho/refs/heads/main/src/assets/gifs/"
// const origin = "http://localhost/ecoinhho/src/assets/credits/"
// const origin = "http://localhost/ecoinhho/src/assets/credits/"

import origin from "config/isServer"
const imagensForCredits = [
    {
        name: "Infonavit",
        imagen: origin + "credits/infonavit.png",
    }, {
        name: "fovisste",
        imagen: origin + "credits/fovissste.png",
    }, {
        name: "inmobiliaria",
        imagen: origin + "credits/inmobiliaria.png",
    }, {
        name: "sofom",
        imagen: origin + "credits/sofom.png",
    }, {
        name: "ruv",
        imagen: origin + "credits/ruv.png",
    }, {
        name: "citybanamex",
        imagen: origin + "credits/citybanamex.png",
    }, {
        name: "hsbc",
        imagen: origin + "credits/hsbc.png",
    }, {
        name: "santander",
        imagen: origin + "credits/santander.png",
    }
]

export default imagensForCredits