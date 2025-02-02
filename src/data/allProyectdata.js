import origin from "config/isServer"
import RutasFrontend from "@/config/routes";

const allProyects = [
    {
        id: "1",
        href: RutasFrontend.proyectos.home+"1",
        name: "Residencia rustica en el corazon de tlaxcala",
        slogan: "Quiero un hogar contemporáneo, combina diseño innovador, eficiencia energética y confort en cada detalle.",
        isImagen: true,
        source: origin + "cielo.jpg",
        objetive: "Crear un hogar moderno y funcional que cumpla con las necesidades del cliente, priorizando la sostenibilidad y el uso eficiente de los recursos.",
        requeriment: "Espacios abiertos, tres recámaras, cocina integral y terraza con vistas.",
        imagens: [
            origin + "proyects/name_of_proyect/image.jpg",
            origin + "proyects/name_of_proyect/image.jpg",
            origin + "proyects/name_of_proyect/image.jpg",
            origin + "proyects/name_of_proyect/image.jpg",
            origin + "proyects/name_of_proyect/image.jpg",
            origin + "proyects/name_of_proyect/image.jpg",
        ],
        models: [
            origin + "proyects/name_of_proyect/image.jpg",
            origin + "proyects/name_of_proyect/image.jpg",
            origin + "proyects/name_of_proyect/image.jpg",
            origin + "proyects/name_of_proyect/image.jpg",
            origin + "proyects/name_of_proyect/image.jpg",
            origin + "proyects/name_of_proyect/image.jpg",
        ],
        others: [
            { text: "Año", content: "2024" },
            { text: "Duracion", content: "8 meses" },
            { text: "Ubicación", content: "Tlaxcala Mexico" },
            { text: "Área construida", content: "180 m2" },
            { text: "Materiales principales", content: "Concreto armado, cristal templado y acero." },
            { text: "Eficiencia energética", content: "Paneles solares y sistema de captación de agua pluvial integrados." },
        ]
    },
    {
        id: "2",
        href: RutasFrontend.proyectos.home+"2",
        name: "Casa minimalista en las montañas",
        slogan: "Diseño simple y elegante que se integra con la naturaleza, ofreciendo vistas espectaculares y máxima comodidad.",
        isImagen: true,
        source: origin + "cielo2.jpg",
        objetive: "Construir una casa que ofrezca tranquilidad y conexión con la naturaleza, con materiales de bajo impacto ambiental.",
        requeriment: "Grandes ventanales, dos niveles, terraza panorámica y chimenea ecológica.",
        imagens: [
            origin + "proyects/mountain_house/image1.jpg",
            origin + "proyects/mountain_house/image2.jpg",
            origin + "proyects/mountain_house/image3.jpg",
            origin + "proyects/mountain_house/image4.jpg"
        ],
        models: [
            origin + "proyects/mountain_house/draw1.jpg",
            origin + "proyects/mountain_house/draw2.jpg"
        ],
        others: [
            { text: "Año", content: "2023" },
            { text: "Duración", content: "10 meses" },
            { text: "Ubicación", content: "Valle de Bravo, México" },
            { text: "Área construida", content: "220 m2" },
            { text: "Materiales principales", content: "Madera, piedra natural y vidrio." },
            { text: "Eficiencia energética", content: "Sistema pasivo de calefacción y aislamiento térmico avanzado." }
        ]
    },
    {
        id: "3",
        href: RutasFrontend.proyectos.home+"3",
        name: "Departamento urbano sostenible",
        slogan: "Un espacio moderno en la ciudad con diseño inteligente y enfoque en la eficiencia energética.",
        isImagen: true,
        source: origin + "cielo3.jpg",
        objetive: "Crear un departamento funcional y sustentable que optimice el uso del espacio sin sacrificar el confort.",
        requeriment: "Un dormitorio, oficina en casa, balcón con jardín vertical y domótica integrada.",
        imagens: [
            origin + "proyects/urban_apartment/image1.jpg",
            origin + "proyects/urban_apartment/image2.jpg"
        ],
        models: [
            origin + "proyects/urban_apartment/draw1.jpg"
        ],
        others: [
            { text: "Año", content: "2025" },
            { text: "Duración", content: "6 meses" },
            { text: "Ubicación", content: "Ciudad de México, México" },
            { text: "Área construida", content: "75 m2" },
            { text: "Materiales principales", content: "Hormigón, acero y vidrio reciclado." },
            { text: "Eficiencia energética", content: "Iluminación LED y sensores de consumo eléctrico." }
        ]
    },
    {
        id: "4",
        href: RutasFrontend.proyectos.home+"4",
        name: "Cabaña ecológica en el bosque",
        slogan: "Un refugio sostenible rodeado de naturaleza, diseñado para la desconexión total.",
        isImagen: true,
        source: origin + "cielo.jpg",
        objetive: "Crear una cabaña autosuficiente que aproveche los recursos naturales del entorno.",
        requeriment: "Estructura de madera, amplios ventanales, sistema de recolección de agua de lluvia y energía solar.",
        imagens: [
            origin + "proyects/eco_cabin/image1.jpg",
            origin + "proyects/eco_cabin/image2.jpg",
            origin + "proyects/eco_cabin/image3.jpg"
        ],
        models: [
            origin + "proyects/eco_cabin/draw1.jpg",
            origin + "proyects/eco_cabin/draw2.jpg"
        ],
        others: [
            { text: "Año", content: "2024" },
            { text: "Duración", content: "12 meses" },
            { text: "Ubicación", content: "Hidalgo, México" },
            { text: "Área construida", content: "95 m2" },
            { text: "Materiales principales", content: "Madera certificada y adobe." },
            { text: "Eficiencia energética", content: "Totalmente autosustentable con energía solar y compostaje." }
        ]
    },
    {
        id: "5",
        href: RutasFrontend.proyectos.home+"5",
        name: "Centro cultural contemporáneo",
        slogan: "Un espacio de arte y cultura con arquitectura vanguardista que fomenta la creatividad.",
        isImagen: true,
        source: origin + "cielo2.jpg",
        objetive: "Construir un centro cultural con espacios flexibles para exposiciones, conferencias y talleres.",
        requeriment: "Salas de exposición, auditorio, cafetería y jardines interiores.",
        imagens: [
            origin + "proyects/cultural_center/image1.jpg",
            origin + "proyects/cultural_center/image2.jpg",
            origin + "proyects/cultural_center/image3.jpg"
        ],
        models: [
            origin + "proyects/cultural_center/draw1.jpg",
            origin + "proyects/cultural_center/draw2.jpg"
        ],
        others: [
            { text: "Año", content: "2026" },
            { text: "Duración", content: "18 meses" },
            { text: "Ubicación", content: "Puebla, México" },
            { text: "Área construida", content: "500 m2" },
            { text: "Materiales principales", content: "Concreto, acero y vidrio." },
            { text: "Eficiencia energética", content: "Iluminación natural optimizada y ventilación pasiva." }
        ]
    }
]

export default allProyects