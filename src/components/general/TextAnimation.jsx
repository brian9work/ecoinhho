"use client"
import React from 'react'
import useElementVisibility from "hooks/useElementVisibility";

export function TextAnimation({ children }) {
    const { isVisible, topPercentage, elementRef } = useElementVisibility();

    return (
        <div
            style={{ transform: "translateY(-25%)" }}
            className="transform text-center font-extrabold text-dark"
        >
            <p
                ref={elementRef}
                className="text-dark text-primary-yellow font-figtree font-bold "
                style={{
                    fontSize: "15vw",
                    transform: `scale(${topPercentage < -20 ? 1 : !isVisible ? 0.2 : (1 - topPercentage * 0.01)})`,
                }}
            > {children} </p>
        </div>
    )
}

export function TextAnimationLeft({ children }) {
    const { isVisible, topPercentage, elementRef } = useElementVisibility();

    console.log('topPercentage', (100 - topPercentage))
    return (
        <div
            style={{ transform: "translateY(-25%)" }}
            className="transform text-center font-extrabold text-dark"
        >
            <span>{topPercentage}</span>
            <p
                ref={elementRef}
                className="
                    w-11/12
                    block 
                    uppercase
                    mx-auto
                    text-dark 
                    text-primary-yellow 
                    font-figtree font-bold 
                    whitespace-nowrap
                    text-[10vw]
                "
                // overflow-hidden text-ellipsis
                style={{
                    // fontSize: "10vw",
                    transition: "transform 1s all",
                    transform: `translateX(${topPercentage < -20 || topPercentage > 100 ? 0 : -(250 - (topPercentage * 3))}%)`,
                    // transform: "translateX(-300%)",
                    // transform: "translateX(0%)",
                    // transform: `TranslateX(${topPercentage < 0 ? 1 : !isVisible ? 0.1 : (1 - topPercentage * 0.01)})`,
                }}
            > {children} </p>
        </div>
    )
}

export function AnimatedCSS({ children = "No hay texto", animated = "animate__fadeInUp", delay = "animate__slower" }) {
    const { isVisible, topPercentage, elementRef } = useElementVisibility();
    return (
        <div
            ref={elementRef}
            className={`animate__animated 
                ${isVisible && topPercentage < 90 ?
                    `${animated} ${delay}`
                    :
                    "opacity-0"
                }
                `}>
            {children}
            {/* <h3 className={`font-bold mb-1 text-xl`}>{children}</h3> */}
        </div>
    )
}

export function AnimatedCSSTitle({ children = "No hay texto", animated = "animate__fadeInUp", delay = "animate__slower" }) {
    const { isVisible, topPercentage, elementRef } = useElementVisibility();
    return (
        <div
            ref={elementRef}
            className={`animate__animated 
                ${isVisible && topPercentage < 90 ?
                    `${animated} ${delay}`
                    :
                    "opacity-0"
                }
        `}>
            <h3 className='uppercase font-bold text-center text-5xl md:text-6xl lg:text-7xl text-primary-yellow'>
                {children}
            </h3>
        </div>
    )
}




export const SplitTextComponent = ({ text, delay = 150, className = "text-2xl font-semibold" }) => {
    return (
        <div className='block w-full'>
        </div>
    )
}
