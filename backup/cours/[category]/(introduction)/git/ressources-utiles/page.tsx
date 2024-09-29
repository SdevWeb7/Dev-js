import H1Course from "@/components/cours/h1-course";
import SpanCourse from "@/components/cours/span-course";
import LinkRessourcesUtiles from "@/components/cours/link-ressources-utiles";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";



export default function Page() {

    return <LayoutCourseCustom>
        <H1Course>Git</H1Course>



        <LinkRessourcesUtiles href={"https://git-scm.com/"}>
            <SpanCourse>Git</SpanCourse> - Télécharger.
        </LinkRessourcesUtiles>



        <LinkRessourcesUtiles href={"https://github.com/"}>
            <SpanCourse>GitHub</SpanCourse> - Le site officiel de GitHub.
        </LinkRessourcesUtiles>



        <LinkRessourcesUtiles href={"https://www.youtube.com/watch?v=rP3T0Ee6pLU&list=PLjwdMgw5TTLXuY5i7RW0QqGdW0NZntqiP"}>
            La playlist de <SpanCourse>Grafikart</SpanCourse> sur Git.
        </LinkRessourcesUtiles>

    </LayoutCourseCustom>
}
