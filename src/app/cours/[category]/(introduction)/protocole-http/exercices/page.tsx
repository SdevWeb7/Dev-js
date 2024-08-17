import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";

export default function page() {

    return <LayoutCourseCustom>

        <H1Course>Protocole HTTP</H1Course>


        <H2Course>Exercice 1</H2Course>

        <PCourse>Installez <Link className={cn(buttonVariants({
            variant: "link"
        }), "p-0 text-2xl")} href="https://www.postman.com/" target="_blank"><SpanCourse>Postman</SpanCourse></Link></PCourse>

        <PCourse className={"my-4"}>Entrainez vous aux différentes <SpanCourse>méthodes de requête HTTP</SpanCourse> grâce à l&apos;API gratuite <Link className={cn(buttonVariants({
            variant: "link"
        }), "p-0 text-2xl")} href="https://jsonplaceholder.typicode.com/" target="_blank"><SpanCourse>JsonPlaceholder</SpanCourse></Link></PCourse>

        <PCourse>Familiarisez vous avec le format <SpanCourse>JSON</SpanCourse> (JavaScript Object Notation) car nous l&apos;utiliserons très souvent plus tard.</PCourse>
    </LayoutCourseCustom>
}
