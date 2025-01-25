"use client"

import { useState } from "react"
import Image from "next/image"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import ProyectsGeneralData from "@/data/ProyectsGeneralData"
import { AnimatedCSS } from "components/general/TextAnimation"
import testimonials from "@/data/testimonials"


export default function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    function next() {
        setCurrentIndex((prevIndex) => (prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2))
    }

    function prev() {
        setCurrentIndex((prevIndex) => (prevIndex - 2 < 0 ? testimonials.length - 2 : prevIndex - 2))
    }

    function goToSlide(index) {
        setCurrentIndex(index * 2)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <AnimatedCSS animated='animate__zoomInDown' delay=''>
                <h3 className='uppercase font-bold text-center text-2xl md:text-3xl lg:text-7xl text-primary-yellow'>
                    {/* Nuestros clientes hablan por nosotros */}
                    Testimonios de nuestros clientes
                </h3>
            </AnimatedCSS>

            <div className="relative">
                <div className="flex gap-8 items-start">
                    {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
                        <div key={testimonial.id} className="flex-1 bg-white rounded-lg p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                                    <Image
                                        // src={testimonial.avatar || "/placeholder.svg"}
                                        src={testimonial.avatar}
                                        alt={`Avatar de ${testimonial.name}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                                    <p className="text-gray-500">{testimonial.date}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                    aria-label="Previous testimonials"
                >
                    <FiChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                    aria-label="Next testimonials"
                >
                    <FiChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === idx * 2 ? "bg-gray-800" : "bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

