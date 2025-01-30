import "./globals.css"
import NotFound from '@/components/general/NotFound'
import React from 'react'

export const metadata = {
  title: "Ecoinhho",
  description: "Constructor de casas ",
};

export default function notFound() {
  return (
    <div>
      <NotFound />
    </div>
  )
}
