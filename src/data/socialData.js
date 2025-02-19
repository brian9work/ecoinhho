// const origin = "https://raw.githubusercontent.com/brian9work/ecoinhho/refs/heads/main/src/assets/gifs/"
import origin from "config/isServer"
import { Facebook, Gmail, Phone, WhatsApp } from "./icons"

const socialData = [
    {
        image: <WhatsApp />,
        title: "Whatsapp",
        contact: "246 141 2794",
        url: " https://api.whatsapp.com/send?phone=522461412794&text=Hola+me+gustaria+saber+que+proyectos+tienes+disponibles.",
    }, {
        image: <Phone />,
        title: "Telefono",
        contact: "246 141 2794",
        url: "tel:+522461412794"
    }, {
        image: <Gmail />,
        title: "Correo",
        contact: "ingenieria_construccion@ecoinhho.net",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=ingenieria_construccion@ecoinhho.net"
    }, {
        image: <WhatsApp />,
        title: "Whatsapp",
        contact: "246 135 1996",
        url: " https://api.whatsapp.com/send?phone=522461351996&text=Hola+me+gustaria+saber+que+proyectos+tienes+disponibles."
    }, {
        image: <Phone />,
        title: "Telefono",
        contact: "246 135 1996",
        url: "tel:+522461351996"
    }, {
        image: <Gmail />,
        title: "Correo",
        contact: "administracion@ecoinhho.net",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=administracion@ecoinhho.net"
    },
     
    // {
    //     image: <WhatsApp />,
    //     title: "Whatsapp",
    //     contact: "749 108 6498",
    // },
    // {
    //     image: <Facebook />,
    //     title: "Whatsapp",
    //     contact: "749 108 6498",
    // },
    // {
    //     image: <Gmail />,
    //     title: "Whatsapp",
    //     contact: "749 108 6498",
    // },
    // {
    //     image: <Phone />,
    //     title: "Whatsapp",
    //     contact: "749 108 6498",
    // },
]

export default socialData
