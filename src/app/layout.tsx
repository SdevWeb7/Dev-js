import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import {cn} from "@/lib/utils";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebStanSchool - Learn to code",
  description: "WebStanSchool is a platform to learn web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(inter.className, 'max-w-6xl mx-auto min-h-screen overflow-y-scroll px-4 flex flex-col')}>

        <Header />

        {children}

      <Footer />
      </body>
    </html>
  );
}
