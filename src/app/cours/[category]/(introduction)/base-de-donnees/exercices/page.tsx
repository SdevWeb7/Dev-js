import UlCourse from "@/components/cours/ul-course";
import H2Course from "@/components/cours/h2-course";
import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import LICourse from "@/components/cours/li-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import SpanCourse from "@/components/cours/span-course";
import LinkCustom from "@/components/cours/link-custom";

export default function Page() {

    return <LayoutCourseCustom>

        <H1Course>Base de données</H1Course>


        <H2Course>Exercice 1</H2Course>

        <UlCourse>
            <LICourse><SpanCourse>Installer WAMP</SpanCourse>. <LinkCustom href="https://wampserver.aviatechno.net/">Télécharger WAMP</LinkCustom> ou <LinkCustom href="https://www.clubic.com/telecharger-fiche27009-wampserver.html">Clubic.com</LinkCustom> </LICourse>
            <LICourse><SpanCourse>Créer une base de donnée</SpanCourse> avec <SpanCourse>phpmyadmin</SpanCourse></LICourse>
            <LICourse><SpanCourse>Créer 2 table avec une relation entre elles</SpanCourse> (il faudra aller dans l&apos;onglet <SpanCourse>Vue relationnel</SpanCourse>)</LICourse>
            <LICourse><SpanCourse>Insérer des données dans ces tables</SpanCourse></LICourse>
            <LICourse>Se familiariser avec les <SpanCourse>4 types de requêtes SQL</SpanCourse> (Select, Insert, Update, Delete) en effectuant des requêtes à l&apos;aide de <SpanCourse>phpmyadmin</SpanCourse></LICourse>
        </UlCourse>

        <PCourse className={'double-mt'}>N&apos;hésitez pas à vous documenter sur internet (voir ressources utiles).</PCourse>

    </LayoutCourseCustom>
}
