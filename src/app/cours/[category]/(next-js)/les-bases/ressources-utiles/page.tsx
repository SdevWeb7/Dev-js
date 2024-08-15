import H1Course from "@/components/cours/h1-course";
import Link from "next/link";

export default function page() {

    return <>

        <H1Course>Next.js - Les Bases - Ressources utiles</H1Course>



        <Link href="https://nextjs.org/" target="_blank"><b>Next.js</b> - Le site officiel.</Link>

        <Link href="https://vercel.com/" target="_blank"><b>Vercel</b> - Le site officiel.</Link>

        <Link href="https://tailwindcss.com/" target="_blank"><b>Tailwind CSS</b> - Le site officiel.</Link>


    </>
}
