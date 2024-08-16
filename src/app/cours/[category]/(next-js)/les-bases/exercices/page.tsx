import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

export default function page() {

    return <>

        <H1Course>Next.js</H1Course>



        <H2Course>Exercice 1</H2Course>

        <PCourse>Créer un projet Next.js :</PCourse>
        <MultiLignesCodeWrapper className={"my-6"}>
            <CodeCourse langage={"bash"}>
                npx create-next-app nomduprojet
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <PCourse>Tester toutes les informations reçues, familiarisez-vous tranquillement avec <b>Next.js</b>.</PCourse>

        <PCourse className={"my-6"}>Prenez le temps de vous familiariser avec les concepts de base de Next.js.</PCourse>

        <PCourse>Essayez de &ldquo;deploy&rdquo; votre application gratuitement grâce à <Link className={cn(buttonVariants({
            variant: "link"
        }), "p-0 text-2xl")} href="https://vercel.com/" target="_blank">Vercel</Link> qui propose de mettre en production votre application gratuitement en connectant votre <Link className={cn(buttonVariants({
            variant: "link"
        }), "p-0 text-2xl")} href="github" target="_blank">Dépot Github</Link>.</PCourse>

        <PCourse className={"mt-6"}>Le processus de déploiement d&apos;une application sans fonctionnalité avancé est plutôt simple. Je vous laisse découvrir <Link href="https://vercel.com/" target="_blank">Vercel</Link> par vous-même.</PCourse>
    </>
}
