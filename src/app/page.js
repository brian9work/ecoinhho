import Image from "next/image";
import "./globals.css"
import Header from "@/components/header/Header";
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import Promotion from "@/components/home/Promotion";
import Obtener from "@/components/home/Obtener";
import BannerOfCredits from "@/components/banners/BannerOfCredits";
import ServicesComponent from "@/components/home/ServicesComponent";
import Form from "@/components/home/Form";
import Proyects from "@/components/home/Proyects";
import Galery from "@/components/home/Galery";
import Avaliable from "@/components/home/Avaliable";

export default function Home() {
   return (
      <div className="relative bg-gray-50 ">
         <div className="relative ">
            <Header />
            <Hero />
            <div className="h-20 md:h-32" />
            <Experience />
            <div className="h-28 md:h-48" />
            <Promotion />
            <div className="h-20 md:h-32" />
            <Avaliable />
            <div className="h-20 md:h-32" />
            <Obtener />
            <div className="h-20 md:h-32" />
            <BannerOfCredits />
            <div className="h-20 md:h-32" />
            <ServicesComponent />
            <div className="h-20 md:h-32" />
            <Form />
            <div className="h-20 md:h-60" />
            <Proyects />
            <div className="h-20 md:h-32" />
            <Galery />
            <div className="h-20 md:h-32" />
            {/* <TestimonialsCarousel />
            <div className="h-20 md:h-32" /> */}
         </div>
      </div>
   );
}
