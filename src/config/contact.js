export const Messages = {
    header: "Hola, vi tupágina web y me gustaría contactarte.",
    promocion: "Hola, me gustaría saber más sobre tus promocion del proyecto: *El TULE*.",
    creditos: "Hola, me gustaría saber más sobre los créditos.",
    form: (name, phone, asunto, message) => {
        return `Hola, mi nombre es *${name}*, mi teléfono es *${phone}*, me gustaría saber más sobre: *${asunto}*. ${message} `
    },
}

const Contact = (message) =>{
    const phone= "7491086498"
    const urlWhatsapp = "https://api.whatsapp.com/send?phone=52"+phone+"&text="+message

    return urlWhatsapp
}

export default Contact;