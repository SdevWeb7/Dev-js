import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";

export default function page() {

    return <LayoutCourseCustom>

        <H1Course>Next.js</H1Course>



        <H2Course>Exercice 1</H2Course>


        <PCourse>Créer un projet Next.js :</PCourse>
        <MultiLignesCodeWrapper className={'my-6'}>
            <CodeCourse langage={"bash"}>
                npx create-next-app nomduprojet
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <PCourse>Ouvrir le dossier dans un IDE et taper :</PCourse>
        <MultiLignesCodeWrapper className={'my-6'}>
            <CodeCourse langage={"bash"}>
                npm install
            </CodeCourse>
            <CodeCourse langage={"bash"}>
                npm run dev
            </CodeCourse>
        </MultiLignesCodeWrapper>




        <PCourse>Ouvrir un navigateur et aller à l&apos;adresse &ldquo;http://localhost:3000&rdquo;</PCourse>

        <PCourse className={"my-6"}>Nettoyer &ldquo;page.tsx&rdquo; et &ldquo;style.css&rdquo; et mettre une balise <SpanCourse>h1</SpanCourse> &ldquo;Hello World!&rdquo;</PCourse>

        <PCourse>Créer un dossier &ldquo;contact&rdquo; dans le dossier &ldquo;app&rdquo; et créer un fichier &ldquo;page.tsx&rdquo; avec un <SpanCourse>h1</SpanCourse> &ldquo;Contact&rdquo;</PCourse>

        <PCourse className={"my-6"}>Créer un fichier &ldquo;header.tsx&rdquo; dans le dossier component et l&apos;appeler dans le fichier &ldquo;layout.tsx&rdquo;</PCourse>
        <PCourse>Dans ce &ldquo;header.tsx&rdquo;, créer 2 balises <SpanCourse>Link</SpanCourse> qui pointent vers &ldquo;/&rdquo; et &ldquo;/contact&rdquo;</PCourse>

        <PCourse className={"my-6"}>Votre &ldquo;header&rdquo; s&apos;affiche sur toutes les pages et que le routing est bien effectué juste en créant 2 fichiers.</PCourse>

        <PCourse>Entrainez vous un petit peu au style avec <SpanCourse>TailwindCSS</SpanCourse> dont la documentation officielle est sublime.</PCourse>
        <PCourse className={'mt-6'}>Commencez éventuellement à coder un compteur et à vous confronter à certains bugs.</PCourse>
    </LayoutCourseCustom>
}
