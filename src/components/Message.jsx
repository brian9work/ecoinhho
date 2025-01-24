"use client";
import React, { useState } from "react";
import useElementVisibility from "hooks/useElementVisibility";

export default function ScrollText() {
   const { isVisible, topPercentage, elementRef } = useElementVisibility();

   return (
      <div
         style={{ paddingTop: "200vh", paddingBottom: "200vh", marginTop: "170vh", }}
         className="transform text-center font-extrabold text-dark"
      >
         <p
            ref={elementRef}
            id="msj"
            className="text-white  "
            style={{
               fontSize: `${!isVisible ? 20 :
                     screen.availWidth * ((100 - topPercentage) * 0.0008)}px`,
            }}
         > PROMOCION </p>
      </div>
   )
}