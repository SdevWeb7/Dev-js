import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";

export default function page() {

    return <LayoutCourseCustom>

        <H1Course>Next.js</H1Course>



        <PCourse>Les <SpanCourse>Client Components</SpanCourse> sont d&apos;abord rendus une première fois <SpanCourse>Coté Serveur</SpanCourse>.</PCourse>

        <PCourse className={'simple-mt'}>Penser à la propriété <SpanCourse>CHILDREN</SpanCourse> afin de pouvoir garder un maximum de <SpanCourse>Serveur Components</SpanCourse>.</PCourse>



        <H2Course>Caractéristiques des Server Components</H2Course>
        <UlCourse>
            <LICourse>tout les composants sont <SpanCourse>Server Component</SpanCourse> par défaut</LICourse>
            <LICourse>ils sont <SpanCourse>ASYNCHRONE</SpanCourse></LICourse>
            <LICourse>ne peuvent pas avoir de <SpanCourse>state</SpanCourse></LICourse>
            <LICourse>le code est éxécuté <SpanCourse>coté serveur</SpanCourse> (Node.js) pour renvoyer du html au client</LICourse>
            <LICourse>possibilité de contacter une base de données</LICourse>
            <LICourse>la variable <SpanCourse>window</SpanCourse> est undefined</LICourse>
        </UlCourse>



        <H2Course>Caractéristiques des Clients Components</H2Course>
        <UlCourse>
            <LICourse>ils sont <SpanCourse>SYNCHRONE</SpanCourse></LICourse>
            <LICourse>peuvent avoir un/des <SpanCourse>state(s)</SpanCourse></LICourse>
            <LICourse>les données sont chargées et éxécutés <SpanCourse>côté client</SpanCourse> (navigateur)</LICourse>
            <LICourse>ne peuvent pas contacter de base de données à moins de <SpanCourse>fetch</SpanCourse></LICourse>
            <LICourse>la variable <SpanCourse>window</SpanCourse> est définie</LICourse>
        </UlCourse>


    </LayoutCourseCustom>
}
