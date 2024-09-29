import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import LinkCustom from "@/components/cours/link-custom";

export default function page() {

    return <LayoutCourseCustom>

        <H1Course>Protocole HTTP</H1Course>


        <H2Course>Exercice 1</H2Course>

        <PCourse>Installez <LinkCustom href="https://www.postman.com/"><SpanCourse>Postman</SpanCourse></LinkCustom></PCourse>

        <PCourse className={"simple-my"}>Entrainez vous aux différentes <SpanCourse>méthodes de requête HTTP</SpanCourse> grâce à l&apos;API gratuite <LinkCustom href="https://jsonplaceholder.typicode.com/"><SpanCourse>JsonPlaceholder</SpanCourse></LinkCustom></PCourse>

        <PCourse>Familiarisez vous avec le format <SpanCourse>JSON</SpanCourse> (JavaScript Object Notation) car nous l&apos;utiliserons très souvent plus tard.</PCourse>
    </LayoutCourseCustom>
}
