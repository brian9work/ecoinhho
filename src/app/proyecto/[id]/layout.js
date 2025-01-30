"use client"
import Header from "@/components/header/Header";

export default function RootLayout({ children }) {
   return (
      <div className="relative">
            {children}
      </div>
   );
}
