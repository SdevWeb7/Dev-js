import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import {cn} from "@/lib/utils";
import Footer from "@/components/footer/footer";
import {Toaster} from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev.js - Apprenez le développement web de facon ludique.",
  description: "Dev.js - Apprenez le développement web de facon ludique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(inter.className, 'min-h-screen overflow-y-scroll flex flex-col')}>

            <Header />

            {children}

          <Footer />

      <Toaster />
      </body>
    </html>
  );
}
