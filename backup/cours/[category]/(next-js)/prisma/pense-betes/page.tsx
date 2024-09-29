import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import SpanCourse from "@/components/cours/span-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";

export default function page() {

    return <LayoutCourseCustom>


        <H1Course>Prisma</H1Course>


        <PCourse>Les requêtes SQL sont <SpanCourse>asynchrone</SpanCourse>.</PCourse>
        <PCourse className={"simple-my"}>Penser au <SpanCourse>SINGLETON</SpanCourse> et à la variable <SpanCourse>DATABASE_URL</SpanCourse> du .env.</PCourse>
        <PCourse>Effectuer les migrations après un changement dans le schéma.</PCourse>


        <PCourse className={"simple-my"}>Les Commandes :</PCourse>

        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                npm install prisma --save-dev
            </CodeCourse>

            <CodeCourse langage={"bash"}>
                npx prisma init
            </CodeCourse>

            <CodeCourse langage={"bash"}>
                npx prisma migrate dev
            </CodeCourse>

            <CodeCourse langage={"bash"}>
                npx prisma db push
            </CodeCourse>
            <CodeCourse langage={"bash"}>
                npx prisma studio
            </CodeCourse>

        </MultiLignesCodeWrapper>


        <PCourse className={'simple-my'}>La ligne dans le fichier <SpanCourse>package.json</SpanCourse> :</PCourse>

        <MultiLignesCodeWrapper>
            <CodeCourse langage={"json"}>
                &quot;prisma&quot;: &#123;
            </CodeCourse>
            <CodeCourse langage={"json"} indentation={1}>
                &quot;seed&quot;: &quot;ts-node --compiler-options &#123;&quot;module&quot;:&quot;CommonJS&quot;&#125; prisma/seed.ts&quot;
            </CodeCourse>
            <CodeCourse langage={"json"}>
                &#125;
            </CodeCourse>

        </MultiLignesCodeWrapper>


        <PCourse className={'simple-my'}>Pour la production, il faut aussi ajouter une ligne sous la clé <SpanCourse>script</SpanCourse> du fichier <SpanCourse>package.json</SpanCourse> pour générer le Prisma Client après le build :</PCourse>

        <MultiLignesCodeWrapper>
            <CodeCourse langage={"json"}>
                &quot;postinstall&quot;: &quot;prisma generate&quot;
            </CodeCourse>
        </MultiLignesCodeWrapper>

    </LayoutCourseCustom>
}
