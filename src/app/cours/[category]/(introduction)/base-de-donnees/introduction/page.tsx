import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";


export default function Page() {

    return <LayoutCourseCustom>

        <H1Course>Base de données</H1Course>

        <PCourse>Une base de données est un ensemble de données organisées et structurées. </PCourse>
        <PCourse>Ces données sont stockées dans un système de gestion de base de données (SGBD) qui permet de les manipuler.</PCourse>

        <PCourse className={'mt-8'}>Il existe plusieurs types de bases de données, en développement informatique, les plus courantes sont les <SpanCourse>bases de données relationnelles</SpanCourse>.</PCourse>

        <PCourse className={'mt-8'}>Cependant, il existe d&apos;autres types de bases de données, comme les bases de données NoSQL, les bases de données orientées graphe, les bases de données en mémoire, les bases de données distribuées, les bases de données temps réel, les bases de données multi-modèles, les bases de données géospatiales, etc.</PCourse>

        <PCourse className={'mt-8'}>Ce cours a pour but de comprendre la structure, le stockage et la récupération de données depuis une base de donnée dans le développement web.</PCourse>

    </LayoutCourseCustom>
}
