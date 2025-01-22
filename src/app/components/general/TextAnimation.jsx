"use client"
import React from 'react'
import useElementVisibility from "@/hooks/useElementVisibility";
import SplitText from '@/hooks/SplitText'

export function TextAnimation({ children }) {
    const { isVisible, topPercentage, elementRef } = useElementVisibility();

    return (
        <div
            style={{ transform: "translateY(-20px)" }}
            className="transform text-center font-extrabold text-dark"
        >
            <p
                ref={elementRef}
                className="text-dark text-primary-yellow font-figtree font-bold "
                style={{
                    fontSize: `${topPercentage < -20 ? screen.availWidth * (100 * 0.0008) : !isVisible ? 20 :
                        screen.availWidth * ((100 - topPercentage) * 0.0008)}px`,
                }}
            > {children} </p>
        </div>
    )
}

export const SplitTextComponent = ({ text, delay=150, className="text-2xl font-semibold text-center" }) => {
    return (
        <div className='block w-full'>
            <SplitText
                text={text}
                className={className}
                delay={delay}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.4}
                rootMargin="-50px"
            // onLetterAnimationComplete={handleAnimationComplete()}
            />
        </div>
    )
}
