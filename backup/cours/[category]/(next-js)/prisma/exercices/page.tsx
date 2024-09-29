import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import SpanCourse from "@/components/cours/span-course";

export default function page() {

    return <LayoutCourseCustom>

        <H1Course>Prisma</H1Course>


        <PCourse>Mettez en application toutes les notions vues précédemment en créant un schéma avec au moins 2 tables pour les mettre en relation.</PCourse>

        <PCourse className={'simple-my'}>Essayez tous les types de requêtes et de filtrer les données.</PCourse>

        <PCourse>Essayez de faire une pagination (les mots clés <SpanCourse>take</SpanCourse> et <SpanCourse>skip</SpanCourse> pourront vous aider).</PCourse>
    </LayoutCourseCustom>
}
