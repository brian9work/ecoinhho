// const origin = "https://raw.githubusercontent.com/brian9work/ecoinhho/refs/heads/main/src/assets/gifs/"
// const origin = "http://localhost/ecoinhho/src/assets/credits/"
// const origin = "http://localhost/ecoinhho/src/assets/credits/"

import origin from "config/isServer"
const imagensForCredits = [
    {
        name: "Infonavit",
        imagen: origin + "credits/infonavit.png",
    },
    {
        name: "fovisste",
        imagen: origin + "credits/fovissste.png",
    },
    {
        name: "inmobiliaria",
        imagen: origin + "credits/inmobiliaria.png",
    }
]

export default imagensForCredits