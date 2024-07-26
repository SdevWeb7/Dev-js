import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import {cn} from "@/lib/utils";
import Footer from "@/components/footer/footer";
import {SessionProvider} from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebStanSchool - Apprenez le développement web de facon ludique.",
  description: "WebStanSchool - Apprenez le développement web de facon ludique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(inter.className, 'max-w-7xl mx-auto min-h-screen overflow-y-scroll px-4 flex flex-col')}>

      <SessionProvider>
            <Header />

            {children}

          <Footer />
      </SessionProvider>
      </body>
    </html>
  );
}
