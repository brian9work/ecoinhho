import { useState, useEffect, useRef } from "react";

function useElementVisibilityWithScroll() {
  const [isVisible, setIsVisible] = useState(false);
  const [topPercentage, setTopPercentage] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calcula el porcentaje del top del elemento relativo al viewport
      const percentage = ((rect.top / viewportHeight) * 100).toFixed(2);
      setTopPercentage(percentage);

      // Envía un mensaje por consola
    //   console.log(`Top Percentage: ${percentage}%`);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Determina si el elemento está visible
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          // Ejecutar una vez para asegurar que se calcula al entrar al viewport
          handleScroll();
        }
      },
      { threshold: 0.1 } // Se activa si el 10% del elemento es visible
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Escucha el evento de scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isVisible, topPercentage, elementRef };
}

export default useElementVisibilityWithScroll;
