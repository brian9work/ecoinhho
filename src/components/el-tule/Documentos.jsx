import origin from '@/config/isServer'
import React from 'react'

export default function Documentos() {
  return (
    <>
      <div className='w-full h-5/6 py-5 flex flex-col items-center justify-center '
        style={{
          backgroundImage: `url(${origin + "docs.jpg"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <div className='bg-white w-11/12 max-w-[700px] mr-auto ml-5 p-5 rounded-lg'>
          <h2 className='uppercase text-xl font-bold'>DOCUMENTOS QUE SE REQUIEREN PARA LA CONSTRUCCION Y CONTENIDO  TECNICO</h2>
          <ol className='text-md mt-2'>
            <li><b>1.</b> Planos arquitectónicos firmados por el municipio y DRO. </li>
            <li><b>2.</b> Planos poligonales firmado por el DRO. </li>
            <li><b>3.</b> Planos croquis firmado por el DRO. </li>
            <li><b>4.</b> Planos hidráulicos firmado por el DRO </li>
            <li><b>5.</b> Planos Sanitario firmado por el DRO. </li>
            <li><b>6.</b> Planos Eléctrico firmado por el DRO. </li>
            <li><b>7.</b> Planos Estructurales firmado por el DRO. </li>
            <li><b>8.</b> Planos Acabados firmado por el DRO. </li>
            <li><b>9.</b> Planos Cimentación firmado por el DRO. </li>
            <li><b>10.</b> Planos Gas firmados por el DRO. </li>
            <li><b>11.</b>  Memoria Técnica, Firma DRO. </li>
            <li><b>12.</b> Cálculos estructurales de obra firma DRO </li>
            <li><b>13.</b> Responsiva estructural. </li>
            <li><b>14.</b> Documentos municipales, Uso de suelo, Factibilidad, Numero oficial, Alineamiento, Licencia de construcción, Protección civil </li>
            <li><b>15.</b> Avaluó </li>
            <li><b>16.</b> Supervisión ANCSAC </li>
            <li><b>17.</b> Terminación de obra </li>
            <li><b>18.</b> Certificado de Calidad. </li>
            <li><b>19.</b> Seguro de Póliza. </li>
            <li><b>20.</b> Notaria #3 LIC. ANTONIO FLORES SANCHEZ. DIRECCION: AVENIDA INDEPENDENCIA No.30, COLONIA OCOTLAN TLAXCALA TELEFONO: 246 688 8964</li>
          </ol>
        </div>
      </div>
      <div className='w-full h-5/6 py-44 mt-40 flex flex-col items-center justify-center '
        style={{
          backgroundImage: `url(${origin + "pareja2.jpg"})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <div className='bg-white w-11/12 max-w-[500px] ml-auto mr-5 p-5 rounded-lg'>
          <h2 className='uppercase text-xl font-bold'>DOCuMENTOS QUE SE REQUIEREN DEL ACREDITADO.</h2>
          <ol className='text-md mt-2'>
            <li><b>1.</b> Acta de nacimiento. </li>
            <li><b>2.</b> Curp. </li>
            <li><b>3.</b> Ine.</li>
            <li><b>4.</b> Comprobante de domicilio (no mayor a 3 meses). </li>
            <li><b>5.</b> Talón de pago. </li>
            <li><b>6.</b> Constancia de situación fiscal (SAT) </li>
            <li><b>7.</b> Estado de cuenta bancari</li>
          </ol>
        </div>
      </div>
    </>
  )
}
