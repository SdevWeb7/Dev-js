import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";


export default function Page() {

    return <LayoutCourseCustom>

        <H1Course>Base de données</H1Course>

        <PCourse>Une <SpanCourse>base de données</SpanCourse> est un ensemble de données <SpanCourse>organisées</SpanCourse> et <SpanCourse>structurées</SpanCourse>.</PCourse>
        <PCourse className={'simple-my'}>Ces données sont stockées à l&apos;aide d&apos;un <SpanCourse>système de gestion de base de données</SpanCourse> (SGBD) qui permet de les manipuler.</PCourse>

        <PCourse>Il existe plusieurs types de bases de données, en développement informatique, les plus courantes sont les <SpanCourse>bases de données relationnelles</SpanCourse>.</PCourse>

        <PCourse className={'simple-my'}>Cependant, il existe d&apos;autres types de bases de données, comme les bases de données NoSQL, les bases de données orientées graphe, les bases de données en mémoire, les bases de données distribuées, les bases de données temps réel, les bases de données multi-modèles, les bases de données géospatiales, etc.</PCourse>

        <PCourse className={'simple-mt'}>Ce cours a pour but de comprendre la structure, le stockage et la récupération de données depuis une base de donnée dans le développement web donc nous allons aborder les <SpanCourse>bases de données relationnelles</SpanCourse>.</PCourse>

    </LayoutCourseCustom>
}
