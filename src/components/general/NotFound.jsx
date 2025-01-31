import Link from "next/link"
// import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-4xl font-bold text-gray-700 mt-4">Página no encontrada</h2>
        <p className="text-gray-600 mt-4 mb-8">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-primary-yellow/80 text-white rounded-md hover:bg-primary-yellow transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}