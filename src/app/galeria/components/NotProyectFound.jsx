import RoutesFrontend from '@/config/routes'
import Link from 'next/link'
import React from 'react'

export default function NotProyectFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">204</h1>
                <h2 className="text-4xl font-bold text-gray-700 mt-4">Categoria de galeria no encontrada</h2>
                <p className="text-gray-600 mt-4 mb-8">Lo sentimos, la categoria de galeria que estás buscando no existe o ha sido movido.</p>
                <Link
                    href={RoutesFrontend.galeria.acabados}
                    className="inline-flex items-center px-4 py-2 bg-primary-yellow/80 text-white rounded-md hover:bg-primary-yellow transition-colors duration-300"
                >
                    Regresar al menu de galeria
                </Link>
            </div>
        </div>
    )
}
