import H1Course from "@/components/cours/h1-course";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

export default function page() {

    return <>

        <H1Course>Next.js</H1Course>



        <Link className={cn(buttonVariants({
            variant: "link"
        }), "block text-2xl p-0")} href="https://nextjs.org/" target="_blank"><b>Next.js</b> - Le site officiel.</Link>

        <Link className={cn(buttonVariants({
            variant: "link"
        }), "block text-2xl p-0 my-6")} href="https://vercel.com/" target="_blank"><b>Vercel</b> - Le site officiel.</Link>

        <Link className={cn(buttonVariants({
            variant: "link"
        }), "block text-2xl p-0")} href="https://tailwindcss.com/" target="_blank"><b>Tailwind CSS</b> - Le site officiel.</Link>


    </>
}
