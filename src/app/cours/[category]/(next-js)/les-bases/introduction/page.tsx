import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";


export default function Page() {

    return <LayoutCourseCustom>

        <H1Course>Next.js</H1Course>


        <PCourse>Dans le chapitre précédent nous avons survolé les concepts de bases de <SpanCourse>Next.js</SpanCourse>.</PCourse>

        <PCourse>Il est temps de rentrer dans le vif du sujet et de voir comment créer une application <SpanCourse>Next.js</SpanCourse> de A à Z.</PCourse>

        <PCourse className={"mt-6 mb-2"}>Liste non exhaustive de ce que nous allons approfondir :</PCourse>


        <UlCourse>
            <LICourse>Les <SpanCourse>Static Site Generation</SpanCourse> et <SpanCourse>Server Side Rendering</SpanCourse></LICourse>
            <LICourse>Démystifier le terme <SpanCourse>Hydratation</SpanCourse></LICourse>
            <LICourse>Les <SpanCourse>Params</SpanCourse> et <SpanCourse>SearchParams</SpanCourse> d&apos;une url</LICourse>
            <LICourse>Créer une <SpanCourse>route API</SpanCourse></LICourse>
        </UlCourse>
    </LayoutCourseCustom>
}
