import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";
import H2Course from "@/components/cours/h2-course";

export default function page() {

    return <>

        <H1Course>Next.js - Presentation - Pense-Bêtes</H1Course>




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



        <H2Course>Caractéristiques des Server Components</H2Course>
        <ul>
            <li>tout les composants sont <b>Server Component</b> par défaut</li>
            <li>ils sont <b>ASYNCHRONE</b></li>
            <li>ne peuvent pas avoir de <b>state</b></li>
            <li>le code est éxécuté <b>coté serveur</b> (Node.js) pour renvoyer du html au client</li>
            <li>possibilité de contacter une base de données</li>
            <li>la variable <b>window</b> est undefined</li>
        </ul>



        <H2Course>Caractéristiques des Clients Components</H2Course>
        <ul>
            <li>ils sont <b>SYNCHRONE</b></li>
            <li>peuvent avoir un/des <b>state(s)</b></li>
            <li>les données sont chargées et éxécutés <b>côté client</b>(navigateur)</li>
            <li>ne peuvent pas contacter de base de données à moins de <b>fetch</b></li>
            <li>la variable <b>window</b> est définie</li>
        </ul>



        <H2Course>Penser à la propriété <b>CHILDREN</b></H2Course>

    </>
}
