import H1Course from "@/components/cours/h1-course";
import SpanCourse from "@/components/cours/span-course";
import LinkRessourcesUtiles from "@/components/cours/link-ressources-utiles";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";



export default function page() {

    return <LayoutCourseCustom>

        <H1Course>Protocole HTTP</H1Course>


        <LinkRessourcesUtiles href={"https://www.postman.com/"}>
            <SpanCourse>Postman</SpanCourse> - Postman simplifie chaque étape du cycle de vie des API et rationalise la collaboration afin que vous puissiez créer des API plus rapidement.
        </LinkRessourcesUtiles>


        <LinkRessourcesUtiles href={"https://jsonplaceholder.typicode.com/"}>
            <SpanCourse>JsonPlaceholder</SpanCourse> - Une API gratuite pour s&apos;entrainer à faire des requêtes HTTP.
        </LinkRessourcesUtiles>


        <LinkRessourcesUtiles href={"https://www.cloudflare.com/fr-fr/learning/dns/what-is-dns/"}>
            <SpanCourse>Cloudflare</SpanCourse> - Les DNS.
        </LinkRessourcesUtiles>

    </LayoutCourseCustom>
}
