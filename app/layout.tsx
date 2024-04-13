import type { Metadata } from "next";
import { Urbanist } from "next/font/google"; // Tipografia de la pagina web
import "./globals.css";
import Navbar from "@/components/navbar" // El @ es necesario
import Header from "@/components/header"

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cristian LP", //Nombre de la Pagina
  description: "Landing Page made by Cristian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
