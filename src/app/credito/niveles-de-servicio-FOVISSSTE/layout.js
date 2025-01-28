
import "@/app/globals.css"
import Banner from "@/components/banners/Banner";
import { Footer } from "@/components/general/Footer";
import Header from "@/components/header/Header";

export default function RootLayout({ children }) {
  return (
    <div>
        <Header />
        <Banner>Creditos</Banner>
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
        <Footer />
    </div>
  );
}
