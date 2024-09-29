import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import SpanCourse from "@/components/cours/span-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";
import schemaPrismaImg from "@/../public/next-js/schema-prisma.jpg"
import Link from "next/link";
import Image from "next/image";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import LinkCustom from "@/components/cours/link-custom";
import H3Course from "@/components/cours/h3-course";


export default async function page() {


    return <LayoutCourseCustom>

        <H1Course>Prisma</H1Course>

        <PCourse>Nous n&apos;allons nous concentrer ici sur les <SpanCourse>Server Components</SpanCourse>. Nous verrons ensuite dans le cours suivant comment utiliser les <SpanCourse>Server Actions</SpanCourse> depuis un <SpanCourse>Client Component</SpanCourse>.</PCourse>

        <PCourse className={'simple-mt'}>Nous ne verrons pas l&apos;ancienne méthode (Routes API + Fetch) mais cela est encore possible très simplement (voir cours les bases ou la documentation officielle).</PCourse>


        <H2Course>Installer Prisma</H2Course>

        <PCourse>Dans un nouveau projet Next.js, installer Prisma :</PCourse>

        <MultiLignesCodeWrapper className={'simple-my'}>
            <CodeCourse langage={"bash"}>
                npm install prisma --save-dev
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <PCourse>Ensuite la commande suivante va créer un fichier <SpanCourse>.env</SpanCourse> avec une variable <SpanCourse>DATABASE_URL</SpanCourse> à la racine du projet et un dossier <SpanCourse>prisma</SpanCourse> dans lequel il y aura un fichier <SpanCourse>schema.prisma</SpanCourse>. C&apos;est dans ce fichier que nous allons décrire à quoi vont ressembler les données dans notre base de données :</PCourse>
        <MultiLignesCodeWrapper className={'simple-mt'}>
            <CodeCourse langage={"bash"}>
                npx prisma init
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <H2Course>Le fichier schema.prisma</H2Course>
        <PCourse>C&apos;est ici que nous allons décrire la forme des données, le SGBD utilisé et l&apos;adresse de notre base de données (il y a aussi le client prisma qui simplifie nos requêtes, mais nous n&apos;avons rien à changer ici).</PCourse>

        <PCourse className={'simple-my'}>Pour plus de simplicité, nous allons utiliser <SpanCourse>Sqlite</SpanCourse>, cela nous permet de disposer d&apos;une base de données juste en créant un fichier finissant par .db (de plus en renseignant dans la variable DATABASE_URL le chemin, Prisma le crée automatiquement).</PCourse>

        <PCourse>Voici un exemple de fichier <SpanCourse>schema.prisma</SpanCourse> avec une relation OneToMany pour que vous ayez une idée du fonctionnement :</PCourse>
        <Link href={"/next-js/schema-prisma.jpg"} target={"_blank"} className={'block simple-my'}>
            <Image src={schemaPrismaImg} alt={'schema prisma'} />
        </Link>

        <PCourse>Assurez vous avant d&apos;avoir cette ligne dans le fichier .env pour que prisma creer le fichier prisma.db dans le dossier prisma au moment de la synchronisation :</PCourse>
        <MultiLignesCodeWrapper className={'simple-my'}>
            <CodeCourse langage={"bash"}>
                DATABASE_URL=&ldquo;file:./prisma/prisma.db&rdquo;
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <PCourse>Une fois que notre schéma est prêt, il faut maintenant synchroniser ce schéma avec la base de données. Ceci est appelé une <SpanCourse>migration</SpanCourse>.</PCourse>
        <MultiLignesCodeWrapper className={'simple-my'}>
            <CodeCourse langage={"bash"}>
                npx prisma migrate dev ## Crée la migration et gardera un historique des migrations
            </CodeCourse>
            <CodeCourse langage={"bash"}>
                ou
            </CodeCourse>
            <CodeCourse langage={"bash"}>
                npx prisma db push ## Crée la migration, mais peut écraser les données
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <PCourse>Si tout s&apos;est bien passé, vous avez maintenant une base de données dont les champs sont identiques à votre schéma.</PCourse>

        <PCourse className={'simple-my'}>Prisma va aussi générer le <SpanCourse>Prisma Client</SpanCourse> automatiquement. C&apos;est lui qui va faciliter nos requêtes par la suite (voir documentation pour plus d&apos;infos sur le prisma client).</PCourse>


        <H2Course>Prisma et Next.js (Singleton)</H2Course>
        <PCourse>En Next.js, en mode développement, nous devons faire une dernière petite configuration. En effet, le Prisma Client est instancié à chaque requête et ce n&apos;est pas ce que nous voulons, la documentation officielle recommande d&apos;utiliser le principe de SINGLETON (c&apos;est le fait d&apos;utiliser toujours la meme instance d&apos;une classe pour toute l&apos;application).</PCourse>
        <PCourse className={'simple-mt'}>Pour cela dans un dossier <SpanCourse>lib</SpanCourse> nous devons créer le fichier <SpanCourse>db.ts</SpanCourse> dans lequel nous allons ajouter le code qui suit et c&apos;est à partir de ce fichier que nous appellerons ensuite prisma :</PCourse>

        <MultiLignesCodeWrapper className={'simple-my'}>
            <CodeCourse langage={"typescript"}>
                import &#123; PrismaClient &#125; from &apos;@prisma/client&apos;
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                const prismaClientSingleton = () =&gt; &#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                return new PrismaClient()
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                &#125;
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                declare const globalThis: &#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                prismaGlobal: ReturnType&lt;typeof prismaClientSingleton&gt;
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                &#125; &amp; typeof global;
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                export default prisma
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                if (process.env.NODE_ENV !== &apos;production&apos;) globalThis.prismaGlobal = prisma
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <PCourse>Ne vous inquiétez pas vous n&apos;aurez pas à écrire ce fichier, la documentation officielle le fournit.</PCourse>


        <H2Course>Données de test</H2Course>
        <PCourse>Encore un petit plus de Prisma, il vient avec un outil de gestion de base de données, pour l&apos;ouvrir :</PCourse>
        <MultiLignesCodeWrapper className={'simple-my'}>
            <CodeCourse langage={"bash"}>
                npx prisma studio
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <PCourse>Il est aussi possible de seed la base de données avec des données de test :</PCourse>
        <MultiLignesCodeWrapper className={'simple-my'}>
            <CodeCourse langage={"bash"}>
                npx prisma db seed
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <PCourse>Mais pour cela, il faut créer un fichier <SpanCourse>seeds.ts</SpanCourse> dans le dossier <SpanCourse>prisma</SpanCourse> et y ajouter les données à insérer, exemple de fichier seed.ts en ayant avant tout que nous avons créé en haut du fichier une variable <SpanCourse>datas</SpanCourse> à laquelle nous avons affecté nos données sous la forme d&apos;un tableau :</PCourse>

        <MultiLignesCodeWrapper className={'simple-my'}>
            <CodeCourse langage={"typescript"}>
                async function main() &#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                console.log(`Start seeding ...`);
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                for (const data of datas) &#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                const result = await prisma.tableName.create(&#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={3}>
                data: course,
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                &#125;);
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                &#125;
            </CodeCourse>

            <CodeCourse langage={"typescript"} indentation={1}>
                console.log(`Seeding finished.`);
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                &#125;
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                main()
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                .then(async () =&gt; &#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                await prisma.$disconnect();
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                &#125;)
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                .catch(async (e) =&gt; &#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                console.error(e);
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                await prisma.$disconnect();
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                process.exit(1);
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                &#125;);
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <PCourse>Avant de lancer le seed, il faut ajouter une ligne au fichier <SpanCourse>package.json</SpanCourse> :</PCourse>

        <MultiLignesCodeWrapper className={"simple-my"}>
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

        <PCourse>Puis la commande :</PCourse>
        <MultiLignesCodeWrapper className={'simple-my'}>
            <CodeCourse langage={"bash"}>
                npx prisma db seed
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <H2Course>Utiliser Prisma dans nos SERVER Components</H2Course>
        <PCourse className={'simple-my'}>Commençons par une requête simple :</PCourse>
        <MultiLignesCodeWrapper className={'simple-my'}>
            <CodeCourse langage={"typescript"}>
                import prisma from &apos;@/lib/db&apos;
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                const data = await prisma.tableName.findMany(&#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                    select: &#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                        id: true,
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                        name: true,
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                    &#125;
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                &#125;)
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <UlCourse>
            <LICourse>Nous importons prisma depuis notre lib (singleton).</LICourse>
            <LICourse>Surtout ne pas oublier <SpanCourse>await</SpanCourse> car un appel à la base de données est <SpanCourse>asynchrone</SpanCourse>.</LICourse>
            <LICourse>Nous utilisons la méthode <SpanCourse>findMany</SpanCourse> pour récupérer les <SpanCourse>id</SpanCourse> et <SpanCourse>name</SpanCourse> de la table <SpanCourse>tableName</SpanCourse>.</LICourse>
        </UlCourse>
        <PCourse className={'simple-my'}>Chaque ligne de la base de données sera transformer en objet et tous ces objets seront réunis dans un tableau.</PCourse>

        <PCourse>Prisma étant un ORM intuitif, je vous laisse essayer de déchiffrer cette requête :</PCourse>
        <MultiLignesCodeWrapper className={'simple-my'}>
            <CodeCourse langage={"typescript"}>
                const data = await prisma.videos.create(&#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                data: &#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                name: data.name,
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                description: data.description,
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                url: data.url,
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                fromUser: &#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={3}>
                connect: &#123;email: userEmail&#125;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                &#125;,
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                category: &#123;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={3}>
                connect: &#123; id: category.id &#125;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={2}>
                &#125;
            </CodeCourse>
            <CodeCourse langage={"typescript"} indentation={1}>
                &#125;
            </CodeCourse>
            <CodeCourse langage={"typescript"}>
                &#125;)
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <PCourse className={"simple-my"}>Prisma fournit toutes les méthodes (create, update, delete...) ainsi que des options de filtrages avancées. Il serait compliqué de tout énumérer ici.</PCourse>

        <PCourse>Je vous recommande une vidéo Youtube très complète pour comprendre le mécanisme global de Prisma en 1H : <SpanCourse><LinkCustom href={"https://www.youtube.com/watch?v=RebA5J-rlwg&t=882s"}>Web Dev Simplified</LinkCustom></SpanCourse>.</PCourse>


        <H3Course>Types</H3Course>
        <PCourse className={'simple-mt'}>Vous pouvez importer un type Typescript directement depuis Prisma Client :</PCourse>
        <MultiLignesCodeWrapper className={'simple-my'}>
            <CodeCourse langage={"typescript"}>
                import &#123; tableName &#125; from &apos;@prisma/client&apos;
            </CodeCourse>
        </MultiLignesCodeWrapper>

    </LayoutCourseCustom>
}
