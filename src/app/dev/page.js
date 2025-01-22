import Image from "next/image";
import "@/app/globals.css"
import Message from "@/app/components/Message";
import Header from "@/app/components/header/Header";
import Hero from "@/app/components/hero/Hero";
import Experience from "@/app/components/experience/Experience";
import Promotion from "@/app/components/promotion/Promotion";

const Space = ()=>{
  return <div className="h-60"></div>
}

export default function Home() {
  return (
    // flex flex-col items-center justify-center min-h-screen max-w-screen-2xl py-2
    <div className="relative bg-gray-50 ">
      <div className="relative ">
        <Header />
        <Hero />
        
      {/* <h1 className="text-4xl font-figtree">Figtree Heading</h1>
      <p className="text-lg font-playfair">Playfair Display Paragraph</p>
      <p className="text-lg font-merriweather">Merriweather Paragraph</p> */}
        <Space />
        <Experience />
        <Space />
        <Promotion />
      </div>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
