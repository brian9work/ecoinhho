"use client"
import React from 'react'
import useElementVisibility from "@/hooks/useElementVisibility";

export default function TextAnimation({children}) {
    const { isVisible, topPercentage, elementRef } = useElementVisibility();
 
    return (
       <div
          style={{ transform: "translateY(-20px)"   }}
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
