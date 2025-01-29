import { Footer } from "@/components/general/Footer";
import Header from "@/components/header/Header";

export default function RootLayout({ children }) {
   return (
      <div className="relative">
         <Header />
         <div>
            {children}
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
         <Footer />
      </div>
   );
}
