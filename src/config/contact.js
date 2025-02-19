export const Messages = {
    header: "Hola, vi tu página web y me gustaría contactarte.",
    servicios: "Hola, vi tu página web y me gustaría saber que servicios ofreces.",
    promocion: "Hola, me gustaría saber más sobre tus promocion del proyecto: *El TULE*.",
    creditos: "Hola, me gustaría saber más sobre los créditos para mi vivienda.",
    obtenerTerrenoMasCasa: "Hola, me gustaría saber más sobre como obtener un terreno mas mi vivienda.",
    form: (name, phone, asunto, message) => {
        return `Hola, mi nombre es *${name}*, mi teléfono es *${phone}*, me gustaría saber más sobre: *${asunto}*. ${message} `
    },
}

export const Call = () => {
    return "tel:+522461412794"
}

export const Mail = () => {
    return "https://mail.google.com/mail/?view=cm&fs=1&to=ingenieria_construccion@ecoinhho.net"
}

const Contact = (message) =>{
    const phone= "2461412794"
    const urlWhatsapp = "https://api.whatsapp.com/send?phone=52"+phone+"&text="+encodeURIComponent(message)

    return urlWhatsapp
}
export const Developer = () =>{
    const message = "Hola, me gustaría saber más sobre el desarrollador de la página web."
    const phone= "7491086498"
    const urlWhatsapp = "https://api.whatsapp.com/send?phone=52"+phone+"&text="+encodeURIComponent(message)

    return urlWhatsapp
}

export default Contact;