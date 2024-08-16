import H1Course from "@/components/cours/h1-course";
import Link from "next/link";
import SpanCourse from "@/components/cours/span-course";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

export default function page() {

    return <>

        <H1Course>Protocole HTTP</H1Course>


        <Link className={cn(buttonVariants({
            variant: "link"
        }), "text-2xl p-0 block")} href="https://www.postman.com/" target="_blank"><SpanCourse>Postman</SpanCourse> - Postman simplifie chaque étape du cycle de vie des API et rationalise la collaboration afin que vous puissiez créer des API plus rapidement.</Link>


        <Link className={cn(buttonVariants({
            variant: "link"
        }), "text-2xl p-0 block my-4")} href="https://jsonplaceholder.typicode.com/" target="_blank"><SpanCourse>JsonPlaceholder</SpanCourse> - Une API gratuite pour s&apos;entrainer à faire des requêtes HTTP.</Link>


        <Link className={cn(buttonVariants({
            variant: "link"
        }), "text-2xl p-0 block")} href="https://www.cloudflare.com/fr-fr/learning/dns/what-is-dns/" target="_blank"><SpanCourse>Cloudflare</SpanCourse> - Les DNS.</Link>

    </>
}
