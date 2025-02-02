import origin from '@/config/isServer'
import Image from 'next/image'
import React from 'react'
import { Title, SubTitle } from '../components/Text'
import { P } from '@/components/general/Texts'
import { FaCheckCircle } from "react-icons/fa";


export default function page() {
    return (
        <div className="min-h-screen py-20 ">
            {/* Header */}
            {/* <header className=" text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Image
                        src={origin + "credits/fovissste.png"}
                        alt="Logo ISSSTE"
                        width={150}
                        height={150} />
                    <Image
                        src={origin + "credits/infonavit.png"}
                        alt="Logo FOVISSSTE"
                        width={150}
                        height={150} />
                </div>
            </header> */}

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* 1. Inicio */}
                <section className="mb-16">
                    <h1 className="text-center mt-5 mb-10 text-4xl lg:text-6xl text-primary-yellow font-bold">Línea de Crédito CONSTRUYES - FOVISSSTE</h1>
                    <SubTitle>
                        Autoconstrucción Asistida para tu Vivienda
                    </SubTitle>
                    <P>
                        CONSTRUYES es una línea de crédito diseñada para que los derechohabientes del ISSSTE puedan construir su
                        vivienda de acuerdo a sus necesidades, ya sea en terreno propio o mediante la adquisición de suelo.
                    </P>
                </section>

                {/* 2. Acerca de CONSTRUYES */}
                <section className="mb-16">
                    <Title>Acerca de CONSTRUYES</Title>
                    <P className='mb-7'>
                        CONSTRUYES es un programa de autoconstrucción asistida que permite a los derechohabientes construir su
                        vivienda de manera personalizada, con la posibilidad de elegir profesionales de la construcción y controlar
                        los gastos y avances de la obra.
                    </P>
                    <SubTitle>Ventajas:</SubTitle>
                    <ul className="list-disc list-inside mb-4">
                        <li>Control sobre los recursos y gastos.</li>
                        <li>Ahorro de al menos un 20% comparado con la compra de una casa ya construida.</li>
                        <li>Elección del profesional de la construcción.</li>
                    </ul>
                </section>

                {/* 3. Modalidades de Crédito */}
                <section className="mb-16">
                    <Title>Modalidades de Crédito</Title>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <SubTitle>Construcción en Terreno Propio</SubTitle>
                            <P>100% del monto del crédito para la construcción.</P>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <SubTitle>Construcción con Adquisición de Suelo</SubTitle>
                            <P>35% para la compra del terreno.</P>
                            <P>65% para la construcción de la vivienda.</P>
                        </div>
                    </div>
                </section>

                {/* 4. Requisitos */}
                <section className="mb-16">
                    <Title>Requisitos</Title>
                    <ul className="list-none space-y-2">
                        <li className="flex items-center">
                            <span
                                className="bg-primary-yellow text-white p-1 rounded-full mr-2 text-3xl">
                                <FaCheckCircle />
                            </span>
                            Ser trabajador en activo.
                        </li>
                        <li className="flex items-center">
                            <span
                                className="bg-primary-yellow text-white p-1 rounded-full mr-2 text-3xl">
                                <FaCheckCircle />
                            </span>
                            Tener mínimo 9 bimestres cotizados en la Subcuenta de Vivienda.
                        </li>
                        <li className="flex items-center">
                            <span
                                className="bg-primary-yellow text-white p-1 rounded-full mr-2 text-3xl">
                                <FaCheckCircle />
                            </span>
                            No estar en proceso de dictamen para pensión, incapacidad o retiro voluntario.
                        </li>
                        <li className="flex items-center">
                            <span
                                className="bg-primary-yellow text-white p-1 rounded-full mr-2 text-3xl">
                                <FaCheckCircle />
                            </span>
                            No tener descuentos por pensión alimenticia que impidan el pago del crédito.
                        </li>
                    </ul>
                </section>

                {/* 5. Condiciones del Crédito */}
                <section className="mb-16">
                    <Title>Condiciones del Crédito</Title>
                    <ul className="space-y-2">
                        <li>
                            <strong>Monto:</strong> Hasta $1,257,788 pesos más el saldo de la Subcuenta de Vivienda.
                        </li>
                        <li>
                            <strong>Tasa de interés:</strong> 4% a 6%.
                        </li>
                        <li>
                            <strong>Pagos:</strong> Directo al acreditado contra avance de obra en 4 ministraciones (35%, 20%, 30%,
                            15%).
                        </li>
                    </ul>
                </section>

                {/* 6. Garantías */}
                <section className="mb-16">
                    <Title>Garantías</Title>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <SubTitle>Seguro de Calidad</SubTitle>
                            <P>
                                Protege la construcción contra desperfectos (10 años en estructura, 5 años en impermeabilización, 2 años
                                en instalaciones).
                            </P>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <SubTitle>Supervisión Externa</SubTitle>
                            <P>Vigilancia del proceso de construcción por parte de ANCSAC.</P>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <SubTitle>Fianza de Cumplimiento</SubTitle>
                            <P>Garantía en caso de incumplimiento del contrato.</P>
                        </div>
                    </div>
                </section>

                {/* 7. Proceso de Construcción */}
                <section className="mb-16">
                    <Title>Proceso de Construcción</Title>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Generación de expediente.</li>
                        <li>Asignación de vivienda.</li>
                        <li>Verificación de montos.</li>
                        <li>Instrucción notarial.</li>
                        <li>Firma de escrituras.</li>
                        <li>Armado de paquete.</li>
                        <li>Envío a Guardavalores.</li>
                        <li>Pago de la primera ministración.</li>
                        <li>Inicio de la construcción.</li>
                    </ol>
                </section>

                {/* 8. Características del Terreno */}
                <section className="mb-16">
                    <Title>Características del Terreno</Title>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Servicios básicos (agua, luz, drenaje).</li>
                        <li>Ubicado en zona urbanizada o en proceso de urbanización.</li>
                        <li>100% propiedad del acreditado o 50% en copropiedad.</li>
                        <li>Libre de gravamen y sin construcción.</li>
                        <li>Avalúo vigente.</li>
                    </ul>
                </section>

                {/* 9. Preguntas Frecuentes (FAQ) */}
                <section className="mb-16">
                    <Title>Preguntas Frecuentes (FAQ)</Title>
                    <div className="space-y-4">
                        <details className="bg-white p-4 rounded-lg shadow-md">
                            <summary className="font-semibold cursor-pointer">
                                    ¿Cuánto tiempo tarda la construcción?
                            </summary>
                            <P>
                                El tiempo de construcción puede variar dependiendo del proyecto, pero generalmente toma entre 6 y 12
                                meses.
                            </P>
                        </details>
                        <details className="bg-white p-4 rounded-lg shadow-md">
                            <summary className="font-semibold cursor-pointer">
                                    ¿Qué pasa si no cumplo con los pagos?
                            </summary>
                            <P>
                                En caso de incumplimiento, se aplicarán las políticas de cobranza establecidas por FOVISSSTE. Es
                                importante mantenerse al corriente con los pagos para evitar penalizaciones.
                            </P>
                        </details>
                        <details className="bg-white p-4 rounded-lg shadow-md">
                            <summary className="font-semibold cursor-pointer">
                                    ¿Puedo elegir mi propio constructor?
                            </summary>
                            <P>
                                Sí, puedes elegir a tu propio constructor siempre y cuando cumpla con los requisitos establecidos por
                                FOVISSSTE y esté registrado en el padrón de constructores autorizados.
                            </P>
                        </details>
                    </div>
                </section>

                {/* 10. Contacto */}
                <section className="mb-16">
                    <Title>Contacto</Title>
                    <div className="">
                        <div>
                            <SubTitle>Coordinadoras de Entidades Financieras:</SubTitle>
                            <ul className="space-y-2 mb-5">
                                <li>Lic. Linda Christell Colorado Balcázar: linda.colorado@fovissste.gob.mx</li>
                                <li>Lic. María del Carmen Gallegos Diaz: carmen.gallegos@fovissste.gob.mx</li>
                            </ul>
                            <SubTitle>Especialista Técnico:</SubTitle>
                            <P>Ing. Gibran Guillén Méndez: gibran.guillen@fovissste.gob.mx</P>
                        </div>
                    </div>
                </section>

                {/* 11. Marco Normativo */}
                <section className="mb-16">
                    <Title>Marco Normativo</Title>
                    <ul className="space-y-2">
                        <li>
                            <strong>Reglas de Otorgamiento:</strong> Acuerdos 28.1371.2020 y 34.1372.2020.
                        </li>
                        <li>
                            <strong>Reglas de Valuación:</strong> Anexo 5 del Convenio de Colaboración en Materia de Valuación
                            Inmobiliaria.
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}
