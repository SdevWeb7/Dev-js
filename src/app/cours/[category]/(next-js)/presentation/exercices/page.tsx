import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";

export default function page() {

    return <>

        <H1Course>Next.js - Présentation - Exercices</H1Course>



        <H2Course>Exercice 1</H2Course>

        <PCourse>Créer un projet Next.js :</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                npx create-next-app nomduprojet
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <PCourse>Ouvrir le dossier dans un IDE et taper :</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                npm install
            </CodeCourse>
            <CodeCourse langage={"bash"}>
                npm run dev
            </CodeCourse>
        </MultiLignesCodeWrapper>




        <PCourse>Ouvrir un navigateur et aller à l&apos;adresse &ldquo;http://localhost:3000&rdquo;</PCourse>

        <PCourse>Nettoyer &ldquo;page.tsx&rdquo; et &ldquo;style.css&rdquo; et mettre une balise <b>h1</b> &ldquo;Hello World!&rdquo;</PCourse>

        <PCourse>Créer un dossier &ldquo;contact&rdquo; dans le dossier &ldquo;app&rdquo; et créer un fichier &ldquo;page.tsx&rdquo; avec un <b>h1</b> &ldquo;Contact&rdquo;</PCourse>

        <PCourse>Créer un fichier &ldquo;header.tsx&rdquo; dans le dossier component et l&apos;appeler dans le fichier &ldquo;layout.tsx&rdquo;</PCourse>
        <PCourse>Dans ce &ldquo;header.tsx&rdquo;, créer 2 balises <b>Link</b> qui pointent vers &ldquo;/&rdquo; et &ldquo;/contact&rdquo;</PCourse>

        <PCourse>Admirez que votre &ldquo;header&rdquo; s&apos;affiche sur toutes les pages et que le routing est bien effectué juste en créant 2 fichiers.</PCourse>

        <PCourse>Entrainez vous un petit peu au style avec <b>TailwindCSS</b> dont la documentation officielle est sublime.</PCourse>
        <PCourse>Commencez éventuellement à coder un compteur et à vous confronter à certains bugs inconnus pendant que vous commencez à saisir le potentiel de Next.js.</PCourse>
    </>
}
