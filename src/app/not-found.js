import "./globals.css"
import NotFound from '@/components/general/NotFound'
import React from 'react'

export const metadata = {
  title: "Erorr 404 - Ecoinhho",
  description: " ",
};

export default function notFound() {
  return (
    <div>
      <NotFound />
    </div>
  )
}
