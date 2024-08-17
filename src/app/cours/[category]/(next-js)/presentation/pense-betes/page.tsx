import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";
import H2Course from "@/components/cours/h2-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";

export default function page() {

    return <LayoutCourseCustom>

        <H1Course>Next.js</H1Course>




        <PCourse>Créer un projet Next.js :</PCourse>
        <MultiLignesCodeWrapper className={'my-6'}>
            <CodeCourse langage={"bash"}>
                npx create-next-app nomduprojet
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <PCourse>Ouvrir le dossier dans un IDE et taper :</PCourse>
        <MultiLignesCodeWrapper className={"mt-6"}>
            <CodeCourse langage={"bash"}>
                npm install
            </CodeCourse>
            <CodeCourse langage={"bash"}>
                npm run dev
            </CodeCourse>
        </MultiLignesCodeWrapper>



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
            <LICourse>les données sont chargées et éxécutés <SpanCourse>côté client</SpanCourse>(navigateur)</LICourse>
            <LICourse>ne peuvent pas contacter de base de données à moins de <SpanCourse>fetch</SpanCourse></LICourse>
            <LICourse>la variable <SpanCourse>window</SpanCourse> est définie</LICourse>
        </UlCourse>



        <H2Course>Penser à la propriété <b>CHILDREN</b></H2Course>

    </LayoutCourseCustom>
}
