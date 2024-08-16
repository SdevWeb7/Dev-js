import Link from "next/link";
import H1Course from "@/components/cours/h1-course";
import SpanCourse from "@/components/cours/span-course";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

export default function Page() {

    return <>

        <H1Course>Base de données</H1Course>


        <Link className={cn(buttonVariants({
            variant: "link"
        }), "block text-2xl")} href="https://sql.sh/" target="_blank"><SpanCourse>SQL.sh</SpanCourse> - SQL.sh permet d&apos;apprendre le langage SQL.</Link>


        <Link className={cn(buttonVariants({
            variant: "link"
        }), "block text-2xl mt-4")} href="https://wampserver.aviatechno.net/" target="_blank"><SpanCourse>WAMP</SpanCourse> - Site internet pour télécharger WAMP.</Link>
    </>
}
