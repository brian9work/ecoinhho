import React from 'react'
import { Title, SubTitle } from '../components/Text'
import { P } from '@/components/general/Texts'

export default function page() {
   return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 w-full">
         <div className="mx-auto rounded-xl w-full overflow-hidden">
            <div className="">
               <h1 className="text-center mt-5 mb-10 text-4xl lg:text-6xl text-primary-yellow font-bold">Seguro de Calidad</h1>

               <section className="mb-8">
                  <Title>¿Qué es el Seguro de Calidad?</Title>
                  <p className="">
                     El Seguro de Calidad es un requisito obligatorio para garantizar que la construcción de la vivienda cumpla
                     con los estándares de calidad y seguridad. Este seguro protege al acreditado contra posibles desperfectos
                     en la construcción, como fallas en el diseño, construcción o vicios ocultos.
                  </p>
               </section>

               <section className="mb-8">
                  <Title>Proceso Digital del Seguro de Calidad</Title>
                  <ol className="list-decimal list-inside space-y-4 ">
                     <SubTitle>Elección de la Aseguradora:</SubTitle>
                     <ul className="list-disc list-inside ml-6 mt-2">
                        <li>El constructor debe indicar a la entidad financiera con qué aseguradora desea operar.</li>
                        <li>
                           Esto se realiza a través de un correo electrónico firmado por el representante legal del
                           constructor.
                        </li>
                        <li>
                           Las aseguradoras asignadas para este seguro son dos, y el constructor puede elegir libremente entre
                           ellas.
                        </li>
                     </ul>
                     <SubTitle>Generación de la CUV (Clave Única de Vivienda):</SubTitle>
                     <ul className="list-disc list-inside ml-6 mt-2">
                        <li>La entidad financiera genera la CUV y realiza el pago correspondiente.</li>
                        <li>
                           Una vez pagada, se habilita la marca de seguro de calidad dentro del RUV (Registro Único de
                           Vivienda).
                        </li>
                     </ul>
                     <SubTitle>Carga de Documentos:</SubTitle>
                     <p className="mt-2">
                        El constructor debe cargar 7 documentos esenciales en la plataforma SOPORTE FACTEC:
                     </p>
                     <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Plano de lotificación y sembrado</li>
                        <li>Localización y delimitación de la oferta</li>
                        <li>Plantas, cortes y fachadas</li>
                        <li>Licencia de construcción</li>
                        <li>Especificaciones generales de la vivienda</li>
                        <li>Cédula Profesional del DRO (Director Responsable de Obra)</li>
                        <li>Carta responsiva estructural firmada por el DRO vigente</li>
                     </ul>
                     <SubTitle>Contratación del Seguro:</SubTitle>
                     <ul className="list-disc list-inside ml-6 mt-2">
                        <li>
                           El constructor debe notificar a la entidad financiera y a FOVISSSTE sobre la aseguradora
                           seleccionada.
                        </li>
                        <li>
                           Se debe enviar la documentación escaneada, firmada y sellada a la aseguradora elegida, con copia a
                           FOVISSSTE.
                        </li>
                     </ul>
                     <SubTitle>Finalización del Proceso:</SubTitle>
                     <ul className="list-disc list-inside ml-6 mt-2">
                        <li>
                           Una vez que la obra alcance el 85% de avance, se debe cargar el avalúo bajo hipótesis de vivienda
                           terminada en la plataforma SOPORTE FACTEC.
                        </li>
                     </ul>
                  </ol>
               </section>

               <section className="mb-8">
                  <Title>Beneficios del Seguro de Calidad</Title>
                  <ul className="list-disc list-inside space-y-2 ">
                     <li>
                        Protección a largo plazo: 10 años para la estructura, 5 años para la impermeabilización y 2 años para
                        las instalaciones.
                     </li>
                     <li>Supervisión externa: ANCSAC verifica que la construcción cumpla con los estándares de calidad.</li>
                     <li>Fianza de cumplimiento: Garantía en caso de incumplimiento por parte del constructor.</li>
                  </ul>
               </section>

               <section>
                  <Title>Contacto para el Seguro de Calidad</Title>
                  <p className=" mb-2">Correos electrónicos de FOVISSSTE:</p>
                  <ul className="list-disc list-inside space-y-1 text-blue-600">
                     <li>
                        <a href="mailto:hermilo.may@fovissste.gob.mx">hermilo.may@fovissste.gob.mx</a>
                     </li>
                     <li>
                        <a href="mailto:luis.ortega@fovissste.gob.mx">luis.ortega@fovissste.gob.mx</a>
                     </li>
                     <li>
                        <a href="mailto:fabiola.lopez@fovissste.gob.mx">fabiola.lopez@fovissste.gob.mx</a>
                     </li>
                  </ul>
               </section>
            </div>
         </div>
      </div>
   )
}
