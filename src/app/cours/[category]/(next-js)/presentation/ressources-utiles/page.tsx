import H1Course from "@/components/cours/h1-course";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import SpanCourse from "@/components/cours/span-course";

export default function page() {

    return <>

        <H1Course>Next.js</H1Course>


        <Link className={cn(buttonVariants({
            variant: "link",
        }), "p-0 text-2xl block")} href="https://nextjs.org/" target="_blank"><SpanCourse>Next.js</SpanCourse> - Le site officiel.</Link>



        <Link className={cn(buttonVariants({
            variant: "link",
        }), "p-0 text-2xl block my-6")} href="https://vercel.com/" target="_blank"><SpanCourse>Vercel</SpanCourse> - Le site officiel.</Link>



        <Link className={cn(buttonVariants({
            variant: "link",
        }), "p-0 text-2xl block")} href="https://tailwindcss.com/" target="_blank"><SpanCourse>Tailwind CSS</SpanCourse> - Le site officiel.</Link>


    </>
}
