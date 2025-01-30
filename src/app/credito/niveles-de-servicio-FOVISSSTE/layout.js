
import "@/app/globals.css"
import Banner from "@/components/banners/Banner";
import { Footer } from "@/components/general/Footer";
import Header from "@/components/header/Header";
import BannerForProyect from "@/components/proyect/BannerForProyect";

export default function RootLayout({ children }) {
  return (
    <div>
        <BannerForProyect src={"cielo2.jpg"} >Creditos</BannerForProyect>
        {children}
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
