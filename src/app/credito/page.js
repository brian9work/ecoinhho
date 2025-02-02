import { P } from "@/components/general/Texts";
import { SubTitle, Title } from "./components/Text";
import credits from "./data"
import { ButtonLinkYellow } from "@/components/general/Button";

export default function Home() {
   return (
      <div className="relative bg-gray-50 ">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {credits.map((credit, key) => {
               return (
                  <div 
                     key={key}
                     className="
                        bg-white shadow-md 
                        rounded-xl p-6 py-10 w-full 
                        flex justify-center flex-col
                     " 
                  >
                     <Title>{credit.name}</Title>
                     <P 
                        className="overflow-ellipsis line-clamp-6"
                     >{credit.descripcion}</P>
                     <div className="max-w-80 w-full mx-auto mt-4">
                        <ButtonLinkYellow href={credit.href}>Conocer Credito</ButtonLinkYellow>
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   );
}
