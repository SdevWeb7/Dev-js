import H1Course from "@/components/cours/h1-course";
import SpanCourse from "@/components/cours/span-course";
import LinkRessourcesUtiles from "@/components/cours/link-ressources-utiles";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";



export default function Page() {

    return <LayoutCourseCustom>

        <H1Course>Base de données</H1Course>


        <LinkRessourcesUtiles href={"https://sql.sh/"}><SpanCourse>SQL.sh</SpanCourse> - SQL.sh permet d&apos;apprendre le langage SQL.</LinkRessourcesUtiles>


        <LinkRessourcesUtiles href={"https://wampserver.aviatechno.net/"}><SpanCourse>WAMP</SpanCourse> - Site internet pour télécharger WAMP.</LinkRessourcesUtiles>
    </LayoutCourseCustom>
}
