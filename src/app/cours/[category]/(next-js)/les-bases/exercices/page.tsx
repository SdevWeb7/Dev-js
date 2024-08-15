import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";

export default function page() {

    return <>

        <H1Course>Next.js - Les Bases - Exercices</H1Course>



        <H2Course>Exercice 1</H2Course>

        <PCourse>Créer un projet Next.js :</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                npx create-next-app nomduprojet
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <PCourse>Tester toutes les informations reçues, familiarisez-vous tranquillement avec <b>Next.js</b>.</PCourse>

        <PCourse>Prenez le temps de vous familiariser avec les concepts de base de Next.js, et soyez impatients de découvrir la suite, qui sera encore plus passionnante.</PCourse>

        <PCourse>Essayez de &ldquo;deploy&rdquo; votre application gratuitement grâce à <a href="https://vercel.com/" target="_blank">Vercel</a> qui propose de mettre en production votre application gratuitement en connectant votre <a href="github" target="_blank">Dépot Github</a>.</PCourse>

        <PCourse>Le processus de déploiement d&apos;une application sans fonctionnalité avancé est plutôt simple. Je vous laisse découvrir <a href="https://vercel.com/" target="_blank">Vercel</a> par vous-même.</PCourse>
    </>
}
