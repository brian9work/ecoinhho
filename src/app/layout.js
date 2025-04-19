import { Footer } from "@/components/general/Footer";
import Header from "@/components/header/Header";
import { Figtree, Playfair_Display, Merriweather, Karantina, Catamaran } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], weight: ["400", "700", "900"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700", "900"] });
const karantina = Karantina({ subsets: ["latin"], weight: ["400", "700"] });
const catamaran = Catamaran({ subsets: ["latin"], weight: ["200", "400", "700"] });


export const metadata = {
  title: "Ecoinhho",
  description: "Constructor de casas ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased max-h-screen overflow-x-hidden min-h-screen w-screen h-screen max-w-[2000px] mx-auto `}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {/* <Header /> */}
        {/* {children} */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
