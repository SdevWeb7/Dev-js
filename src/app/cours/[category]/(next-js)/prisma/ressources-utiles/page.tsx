import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import H1Course from "@/components/cours/h1-course";
import LinkRessourcesUtiles from "@/components/cours/link-ressources-utiles";
import SpanCourse from "@/components/cours/span-course";

export default function page() {

    return <LayoutCourseCustom>


        <H1Course>Prisma</H1Course>


        <LinkRessourcesUtiles href={"https://www.prisma.io/"}>Site officiel de Prisma</LinkRessourcesUtiles>


        <LinkRessourcesUtiles href={"https://www.youtube.com/watch?v=Sdd1ScMHzrI"}>Tuto Youtube - ByteGrad</LinkRessourcesUtiles>

        <LinkRessourcesUtiles href={"https://www.youtube.com/watch?v=RebA5J-rlwg&t=3178s"}>Tuto Youtube - Web Dev Simplified</LinkRessourcesUtiles>

        <LinkRessourcesUtiles href={"https://neon.tech/"}>Neon.tech - 1 Database Postgresql gratuite</LinkRessourcesUtiles>

        <LinkRessourcesUtiles href={"https://vercel.com/sdevwebs-projects/~/stores"}><SpanCourse>New</SpanCourse> - Database Blob (image)- Vercel.com</LinkRessourcesUtiles>
    </LayoutCourseCustom>
}
