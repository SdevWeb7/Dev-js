import H1Course from "@/components/cours/h1-course";
import SpanCourse from "@/components/cours/span-course";
import LinkRessourcesUtiles from "@/components/cours/link-ressources-utiles";

export default function page() {

    return <>

        <H1Course>Next.js</H1Course>



        <LinkRessourcesUtiles href={"https://nextjs.org/"}><SpanCourse>Next.js</SpanCourse> - Le site officiel.</LinkRessourcesUtiles>

        <LinkRessourcesUtiles href={"https://vercel.com/"}><SpanCourse>Vercel</SpanCourse> - Le site officiel.</LinkRessourcesUtiles>

        <LinkRessourcesUtiles href={"https://tailwindcss.com/" }><SpanCourse>Tailwind CSS</SpanCourse> - Le site officiel.</LinkRessourcesUtiles>


    </>
}
