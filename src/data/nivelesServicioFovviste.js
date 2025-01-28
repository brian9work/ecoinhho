const LinksMenu = [
    {
        etapa: "Registro y asignación",
        color: "#a90000",
        niveles: [
            {
                letra: "A",
                entidad: "Entidad financiera (SOFOM)",
                concepto: "Registro del crédito, CUV y documentos técnicos",
                dias_habiles: "Inicio",
                inicio: " --- "
            }, {
                letra: "B",
                entidad: "Soporte FACTEC MR",
                concepto: "Revisión de presupuesto, cumple con 18 partidas",
                dias_habiles: 3,
                inicio: "Del registro en Plataforma Digital FACTEC MR"
            }, {
                letra: "C",
                entidad: "Soporte FACTEC MR",
                concepto: "Emisión de invitación a supervisora externa",
                dias_habiles: 1,
                inicio: "Revisión y cumple del Presupuesto con 18 partidas"
            }, {
                letra: "D",
                entidad: "Supervisora externa",
                concepto: "Aceptación de invitación para supervisar; asignación en firme",
                dias_habiles: 2,
                inicio: "De recepción del correo de invitación"
            },

        ]
    }, {
        etapa: "Validación inicial del terreno",
        color: "#ff7417",
        niveles: [
            {
                letra: "E",
                entidad: "Supervisora externa",
                concepto: "Primer contacto de supervisora externa con el constructor",
                dias_habiles: 1,
                inicio: "De la aceptación de la invitación para supervisión, a través de la plataforma"
            }, {
                letra: "F",
                entidad: "Supervisora externa",
                concepto: "Visita de validación inicial",
                dias_habiles: 5,
                inicio: "De la aceptación de la invitación para supervisión, a través de la plataforma"
            }, {
                letra: "G",
                entidad: "Supervisora externa",
                concepto: "Registra resultados de la visita de validación inicial",
                dias_habiles: 7,
                inicio: "De la aceptación de la invitación para supervisión, a través de la plataforma"
            }, {
                letra: "H",
                entidad: "Entidad financiera (SOFOM)",
                concepto: "Envío del comprobante de pago del servicio de supervisión externa al correo soporte@factec.mx",
                dias_habiles: 3,
                inicio: "De la notificación vía correo soporte@factec, indicando el resultado de CUMPLE para la VALIDACIÓN INICIAL"
            }, {
                letra: "I",
                entidad: "Soporte FACTEC MR",
                concepto: "Confirmación del pago del servicio de supervisión y notifica a la empresa supervisora externa para inicio del servicio",
                dias_habiles: 1,
                inicio: "De la notificación de pago, mediante el correo de la Entidad Financiera enviado a soporte@factec.mx, incluyendo la evidencia de la operación bancaria, depósito o transferencia"
            },
        ]
    }, {
        etapa: "Revisión de documentos técnicos",
        color: "#00a00b",
        niveles: [
            {
                letra: "J",
                entidad: "Supervisora externa",
                concepto: "Primera revisión documental y su registro",
                dias_habiles: 5,
                inicio: "De la notificación de pago, vía correo soporte@factec.mx"
            }, {
                letra: "K",
                entidad: "Entidad financiera (SOFOM)",
                concepto: "Atención a las observaciones en los documentos, en su primera revisión",
                dias_habiles: 5,
                inicio: "De la notificación en correo soporte@factec.mx"
            }, {
                letra: "L",
                entidad: "Supervisora externa",
                concepto: "Revisiones documentales subsecuentes",
                dias_habiles: 3,
                inicio: "De la notificación en correo soporte@factec.mx"
            }, {
                letra: "M",
                entidad: "Entidad financiera (SOFOM)",
                concepto: "Atención a las observaciones en los documentos, en las revisiones subsecuentes",
                dias_habiles: 5,
                inicio: "De la notificación en correo soporte@factec.mx"
            },
        ]
    },{
        etapa: " Visitas de Supervisión de avance y ministración",
        color: "#58afff",
        niveles: [
            {
                entidad: "Supervisora externa",
                concepto: "Visita de supervisión solicitada por el constructor, para validar avance y ministración",
                dias_habiles: 5,
                inicio: "De la solicitud por parte del constructor, vía correo electrónico, con al menos 5 días hábiles de anticipación"
            },{
                entidad: "Supervisora externa",
                concepto: "Registro de resultados de la visita de supervisión",
                dias_habiles: 2,
                inicio: "De la realización de la visita de supervisión, de avance o de avance con ministración"
            }
        ]
    }
]




export default LinksMenu;