"use client";
import { useState, useEffect } from "react";

export default function ScrollText() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fontSize = Math.min(4.7, 0.3 + scrollY / 100);

  return (
    <div className="">
      <div
        className=" transform text-center font-extrabold text-gray-800"
        style={{
          fontSize: `${fontSize}rem`,
        }}
      >
        <p className="text-dark dark:text-white"> PROMOCION </p>
      </div>
    </div>
  );
}
