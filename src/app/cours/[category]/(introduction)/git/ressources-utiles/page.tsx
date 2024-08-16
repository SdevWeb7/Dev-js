import Link from "next/link";
import H1Course from "@/components/cours/h1-course";
import SpanCourse from "@/components/cours/span-course";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";


export default function Page() {

    return <>
        <H1Course>Git</H1Course>


        <Link className={cn(buttonVariants({
            variant: "link"
        }), "block text-2xl p-0")} href="https://git-scm.com/" target="_blank"><SpanCourse>Git</SpanCourse> - Télécharger.</Link>

        <Link className={cn(buttonVariants({
            variant: "link"
        }), "block text-2xl p-0 my-4")} href="https://github.com/" target="_blank"><SpanCourse>GitHub</SpanCourse> - Le site officiel de GitHub.</Link>

        <Link className={cn(buttonVariants({
            variant: "link"
        }), "block text-2xl p-0")} href="https://www.youtube.com/watch?v=rP3T0Ee6pLU&list=PLjwdMgw5TTLXuY5i7RW0QqGdW0NZntqiP" target={"_blank"}>La playlist de <SpanCourse>Grafikart</SpanCourse> sur Git.</Link>

    </>
}
