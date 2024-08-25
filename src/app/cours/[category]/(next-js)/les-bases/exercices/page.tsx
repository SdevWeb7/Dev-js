import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import LinkCustom from "@/components/cours/link-custom";

export default function page() {

    return <LayoutCourseCustom>

        <H1Course>Next.js</H1Course>



        <H2Course>Exercice 1</H2Course>

        <PCourse>Créer un projet Next.js :</PCourse>
        <MultiLignesCodeWrapper className={"simple-my"}>
            <CodeCourse langage={"bash"}>
                npx create-next-app nomduprojet
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <PCourse>Tester toutes les informations reçues, familiarisez-vous tranquillement avec <b>Next.js</b>.</PCourse>

        <PCourse className={"simple-my"}>Prenez le temps de vous familiariser avec les concepts de base de Next.js.</PCourse>

        <PCourse>Essayez de &ldquo;deploy&rdquo; votre application gratuitement grâce à <LinkCustom href="https://vercel.com/">Vercel</LinkCustom> qui propose de mettre en production votre application gratuitement en connectant votre <LinkCustom href="https://github.com/">Dépot Github</LinkCustom>.</PCourse>

        <PCourse className={"simple-mt"}>Le processus de déploiement d&apos;une application sans fonctionnalité avancé est plutôt simple. Je vous laisse découvrir <LinkCustom href="https://vercel.com/">Vercel</LinkCustom> par vous-même.</PCourse>
    </LayoutCourseCustom>
}
