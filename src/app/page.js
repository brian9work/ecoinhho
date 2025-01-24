import Image from "next/image";
import "./globals.css"
import Message from "components/Message";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-black py-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/ecoinhho1.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold text-center text-white">
        Ecoinhho
        </h1>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-200">
        <p>Pagina en reparacion </p>
      </footer>
      <Message />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}
