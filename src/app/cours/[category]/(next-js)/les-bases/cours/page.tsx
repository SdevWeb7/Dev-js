import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";
import Link from "next/link";
import PCourse from "@/components/cours/p-course";
import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import H3Course from "@/components/cours/h3-course";
import Image from "next/image";
import imgParams from "@/../public/next-js/params.jpg";
import SpanCourse from "@/components/cours/span-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import LinkCustom from "@/components/cours/link-custom";


export default function Page() {

    return <LayoutCourseCustom>

    <H1Course>Next.js</H1Course>



    <H2Course>La différence entre <b>Params</b> et <b>SearchParams</b></H2Course>

    <PCourse>La gestion de l&apos;URL est une partie importante du développement web.</PCourse>

    <PCourse className={"simple-my"}>Il est important de bien comprendre la différence entre les <SpanCourse>Params</SpanCourse> et les <SpanCourse>SearchParams</SpanCourse> d&apos;une url.</PCourse>
    <PCourse>Comme vu précédemment, nous pouvons creer une route dynamique en mettant entre <SpanCourse>[ ]</SpanCourse> le nom du dossier.</PCourse>
    <PCourse className={'simple-my'}>C&apos;est un <SpanCourse>Params</SpanCourse>.</PCourse>


    <Link href="/next-js/params.jpg" target="_blank">
        <Image className={'shadow-md rounded-3xl'} src={imgParams} alt="Params" />
    </Link>


    <PCourse className={'simple-my'}>Ici <SpanCourse>category</SpanCourse> et <SpanCourse>slug</SpanCourse> sont des paramètres dynamiques que nous verrons comment récupérer grâce à la propriété <SpanCourse>Params</SpanCourse>.</PCourse>
    <PCourse>Dans cet exemple si nous accédons à l&apos;URL <SpanCourse>/cours/html/les-bases</SpanCourse> nous aurons 2 <SpanCourse>Params</SpanCourse> : <SpanCourse>html</SpanCourse> et <SpanCourse>les-bases</SpanCourse>.</PCourse>


    <PCourse className={'simple-my'}>Ne pas confondre avec les <SpanCourse>SearchParams</SpanCourse> qui sont les paramètres qui viennent apres le <SpanCourse>?</SpanCourse> d&apos;une url et sont séparés par un <SpanCourse>&</SpanCourse>.</PCourse>
    <PCourse>Par exemple dans l&apos;url <SpanCourse>/cours/html/les-bases?search=hello</SpanCourse> nous avons 1 <SpanCourse>SearchParams</SpanCourse> : <SpanCourse>search</SpanCourse> dont la valeur est <SpanCourse>hello</SpanCourse>.</PCourse>

    <PCourse className={"simple-my"}>Il est important de bien comprendre la différence entre les deux car ils sont utilisés de manière différente.</PCourse>
    <PCourse>Les <SpanCourse>Params</SpanCourse> sont utilisés pour créer des routes dynamiques alors que les <SpanCourse>SearchParams</SpanCourse> sont utilisés pour filtrer des données.</PCourse>

    <PCourse className={'simple-my'}>Les <SpanCourse>Params</SpanCourse> sont injectés dans les <SpanCourse>Layout</SpanCourse> et <SpanCourse>Pages</SpanCourse> des <SpanCourse>Server Components</SpanCourse> tandis que les <SpanCourse>SearchParams</SpanCourse> UNIQUEMENT dans les <SpanCourse>Pages</SpanCourse>.</PCourse>
    <PCourse>Pour les récuperer dans le composant, il suffit de déstructuré l&apos;un ou l&apos;autre des <SpanCourse>props</SpanCourse> de la <SpanCourse>Page</SpanCourse> ou du <SpanCourse>Layout</SpanCourse>.</PCourse>



    <PCourse className={"simple-my"}>Exemple de récupération d&apos;un <SpanCourse>Params</SpanCourse> en <SpanCourse>Typescript</SpanCourse> avec un petit aperçu d&apos;une requête <SpanCourse>Prisma</SpanCourse> :</PCourse>

    <MultiLignesCodeWrapper>
        <CodeCourse langage={"tsx"}>
            type CoursePageProps = &#123;
        </CodeCourse>
        <CodeCourse  indentation={1} langage={"tsx"}>
           params: &#123;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            category: string;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            slug: string;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            &#125;;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>

        <CodeCourse langage={"tsx"}>
            export default async function Page(&#123;params&#125; : CoursePageProps) &#123;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            const course = await prisma.course.findFirst(&#123;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            where: &#123;
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            category: params.category,
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            slug: params.slug,
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            &#125;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            &#125;);
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>




    <PCourse className={"simple-my"}>Le <SpanCourse>type</SpanCourse> des <SpanCourse>SearchParams</SpanCourse> est un peu différent, car il peut être un tableau :</PCourse>
    <MultiLignesCodeWrapper>
        <CodeCourse langage={"tsx"}>
            type PageProps = &#123; searchParams: &#123; [key: string]: string | undefined &#125; &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>


    <PCourse className={'simple-mt'}>Dans un <SpanCourse>Client Component</SpanCourse>, il faudra récupérer les <SpanCourse>Params</SpanCourse> et <SpanCourse>SearchParams</SpanCourse> à l&apos;aide des hooks <SpanCourse>useParams</SpanCourse> et <SpanCourse>useSearchParams</SpanCourse>.</PCourse>







    <H2Course>Le <SpanCourse>Server Side Rendering</SpanCourse> (SSR), <SpanCourse>Client Side Rendering</SpanCourse> (CSR) et le <SpanCourse>Static Site Generation</SpanCourse> (SSG)</H2Course>
    <PCourse>Le <SpanCourse>Server-Side Rendering</SpanCourse> (SSR) est une technique où les pages web sont générées sur le serveur avant d&apos;être envoyées au client.</PCourse>

    <PCourse className={"simple-my"}>Contrairement au <SpanCourse>Client Side Rendering</SpanCourse> (CSR), où le navigateur du client exécute le JavaScript pour générer le contenu, avec SSR, le serveur produit une page HTML complète qui est immédiatement visible par l&apos;utilisateur dès qu&apos;elle est chargée.</PCourse>

    <PCourse className={"mb-3"}>Voici comment ça fonctionne :</PCourse>
    <UlCourse>
        <LICourse>Requête du client : L&apos;utilisateur demande une page web en entrant une URL.</LICourse>
        <LICourse>Rendu sur le serveur : Le serveur traite cette requête, exécute le code nécessaire (souvent avec un framework comme Next.js pour React) pour générer une page HTML complète.</LICourse>
        <LICourse>Réponse au client : Le serveur envoie cette page HTML au navigateur du client.</LICourse>
        <LICourse>Affichage immédiat : Le contenu est visible instantanément, même si des scripts JavaScript supplémentaires se chargent pour rendre la page interactive.</LICourse>
    </UlCourse>

    <PCourse className={'simple-my'}>Les avantages du <SpanCourse>Server Side Rendering</SpanCourse> (SSR) incluent un meilleur référencement (SEO) et un temps de chargement initial plus rapide, car l&apos;utilisateur voit du contenu sans attendre que le JavaScript soit entièrement exécuté. Cependant, cela peut entraîner une charge accrue sur le serveur et des temps de réponse plus lents si le serveur doit générer chaque page à la demande.</PCourse>

    <PCourse>La génération de pages statiques (Static Page Generation) consiste à créer des pages HTML prêtes à l&apos;emploi lors du build d&apos;une application, plutôt qu&apos;à la demande. Chaque page est pré-rendue et stockée sur le serveur, ce qui permet de les servir rapidement aux utilisateurs sans besoin de traitement supplémentaire côté serveur. Cette méthode améliore la performance et la sécurité, et est idéale pour les sites avec un contenu qui ne change pas fréquemment, comme les blogs ou les sites de documentation.</PCourse>

    <PCourse className={'simple-my'}>Next.js, le <SpanCourse>Server Side Rendering</SpanCourse> correspond aux <SpanCourse>Server Component</SpanCourse> et le <SpanCourse>Client Side Rendering</SpanCourse> aux <SpanCourse>Clients Components</SpanCourse>. Il est préférable d&apos;avoir le moins de <SpanCourse>Client Component</SpanCourse> possible, mais cela est normal d&apos;en avoir dans une application <SpanCourse>Next.js</SpanCourse></PCourse>
        <PCourse>Afin de générer des pages statiques (Static Site Generation), il faudra ajouter une ligne dans <SpanCourse>next.config.mjs</SpanCourse> avant de <SpanCourse>build</SpanCourse> le projet, cependant beaucoup de fonctionnalités comme les <SpanCourse>Servers Actions</SpanCourse> ne seront pas disponible.</PCourse>






    <H2Course>L&apos;hydratation des pages</H2Course>
    <PCourse>L&apos;hydratation en Next.js est le processus qui rend une page statique ou pré-rendue interactive après son chargement dans le navigateur. Lorsqu&apos;une page est servie par le serveur, elle est d&apos;abord affichée sous forme de HTML statique.</PCourse>

    <PCourse className={"simple-my"}>Ensuite, Next.js envoie le JavaScript nécessaire pour &ldquo;hydrater&rdquo; cette page, c&apos;est-à-dire pour attacher les comportements interactifs du framework React. Ce processus permet d&apos;avoir à la fois une bonne performance initiale et une expérience utilisateur riche et dynamique.</PCourse>
    <PCourse>L&apos;une des erreurs d&apos;hydratation les plus fréquentes est le mismatch de contenu entre le serveur et le client. Cela se produit lorsque le HTML généré sur le serveur (pendant le Server-Side Rendering ou la génération de pages statiques) ne correspond pas exactement au HTML généré par le client une fois le JavaScript chargé.</PCourse>


    <PCourse className={'simple-my'}>Cela peut arriver si le rendu côté serveur et côté client dépend de données dynamiques ou d&apos;états qui diffèrent entre le moment où la page est générée sur le serveur et le moment où elle est hydratée dans le navigateur. Par exemple, si un composant React génère du contenu basé sur la date ou l&apos;heure actuelle, le résultat peut ne pas concorder entre le serveur et le client, ce qui entraîne cette erreur.</PCourse>

    <PCourse>Pour éviter ces erreurs, il est important de s&apos;assurer que le rendu côté serveur et côté client est synchronisé en utilisant des données stables et prévisibles pendant le processus de rendu initial.</PCourse>



    <H3Course>Note importante</H3Course>
    <PCourse>Nous avons mentionné plus haut que les <SpanCourse>Server Components</SpanCourse> étaient rendus <SpanCourse>Côté Serveur</SpanCourse> et que les <SpanCourse>Client Components</SpanCourse> étaient rendus <SpanCourse>Côté Client</SpanCourse>.</PCourse>

    <PCourse className={"simple-my"}>En réalité les <SpanCourse>Client Component</SpanCourse> sont aussi rendus une premiere fois <SpanCourse>Côté Serveur</SpanCourse>.</PCourse>

    <PCourse>Une erreur d&apos;hydratation courante survient lorsque l&apos;on crée un <SpanCourse>hook</SpanCourse> ou un <SpanCourse>Provider</SpanCourse> (Client Component) qui utilise la variable <SpanCourse>window</SpanCourse> sans avoir préalablement sécurisé son utilisation avec une condition. Le <SpanCourse>Client Component</SpanCourse> étant d&apos;abord rendu <SpanCourse>côté serveur</SpanCourse>, la variable <SpanCourse>window</SpanCourse> est alors <SpanCourse>undefined</SpanCourse>, ce qui peut faire crasher l&apos;application.</PCourse>






    <H2Course>Les fichiers &ldquo;spéciaux&rdquo;</H2Course>
    <PCourse><SpanCourse>Next.js</SpanCourse> est préconfiguré pour faciliter le développement, en automatisant certaines tâches répétitives dans chaque application. Pour cela, Next.js propose des fonctionnalités spécifiques. Nous allons en lister quelques-unes ici pour vous aider à comprendre leur fonctionnement général.</PCourse>


    <PCourse className={"simple-mt"}>Pour obtenir une liste complète, <LinkCustom href="https://nextjs.org/docs/getting-started/installation">rendez-vous sur le site officiel de Next.js</LinkCustom>.</PCourse>



    <H3Course>le fichier &ldquo;layout.tsx&rdquo;</H3Course>
    <PCourse>Le fichier <SpanCourse>layout.tsx</SpanCourse> est un composant qui sert à envelopper les pages de votre application. Il est très utile pour ajouter des éléments communs à toutes les pages, comme un en-tête, un pied de page, ou un menu de navigation. Ce composant permet également de gérer l&apos;état global de l&apos;application, comme le thème ou l&apos;authentification de l&apos;utilisateur.</PCourse>

    <PCourse className={"simple-my"}>Il récupère la propriété <SpanCourse>children</SpanCourse> pour encapsuler le contenu de la page et peut ajouter des éléments comme un menu ou un pied de page. Il peut aussi récupérer les <SpanCourse>Params</SpanCourse>, mais pas les <SpanCourse>SearchParams</SpanCourse>.</PCourse>
    <PCourse>Vous pouvez avoir un fichier layout par niveau de profondeur dans votre arborescence de pages, par exemple un layout pour les pages de niveau 1, un autre pour les pages de niveau 2, etc.</PCourse>

    <MultiLignesCodeWrapper className={'simple-my'}>
        <CodeCourse langage={"tsx"}>
            import &#123;PropsWithChildren&#125; from &ldquo;react&rdquo;;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            export default function Layout(&#123; children &#123; : PropsWithChildren) &#125;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            return (
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            &lt;div&gt;
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            &lt;header&gt;
        </CodeCourse>
        <CodeCourse indentation={4} langage={"tsx"}>
            &lt;h1&gt;Mon super site&lt;/h1&gt;
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            &lt;/header&gt;
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            &lt;main&gt;&#123;children&#125;&lt;/main&gt;
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            &lt;footer&gt;
        </CodeCourse>

        <CodeCourse indentation={4} langage={"tsx"}>
            &lt;p&gt;&copy; 2022 Mon super site&lt;/p&gt;
        </CodeCourse>

        <CodeCourse indentation={3} langage={"tsx"}>
            &lt;/footer&gt;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            &lt;/div&gt;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            );
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>





    <H3Course>Le fichier &ldquo;page.tsx&rdquo;</H3Course>
    <PCourse>Le composant <SpanCourse>page.tsx</SpanCourse> est utilisé pour définir le contenu d&apos;une page individuelle dans une application Next.js. Chaque fichier page.tsx dans un sous-répertoire du dossier app/ ou pages/ correspond automatiquement à une route spécifique. Par exemple, <SpanCourse>app/about/page.tsx</SpanCourse> définira la page accessible via <SpanCourse>/about</SpanCourse>.</PCourse>

    <PCourse className={'simple-my'}>Ce composant peut contenir du code JSX, des composants React, et toute la logique nécessaire pour afficher la page. Il est au cœur de la structure des routes dans Next.js, permettant de créer des pages dynamiques et interactives.</PCourse>
    <PCourse>Il peut récupérer les <SpanCourse>Params</SpanCourse> et les <SpanCourse>SearchParams</SpanCourse> et peut appeler des <SpanCourse>Server Components</SpanCourse> ou des <SpanCourse>Client Components</SpanCourse>.</PCourse>
    <PCourse className={'simple-my'}>Dans l&apos;idéal, on le gardera en tant que <SpanCourse>Server Component</SpanCourse> afin de récupérer les données depuis la base de données pour afficher la page plus rapidement et éviter les erreurs d&apos;hydratation.</PCourse>


    <MultiLignesCodeWrapper>
        <CodeCourse langage={"tsx"}>
            import Main from &ldquo;@/components/main&rdquo;;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            import H1 from &ldquo;@/components/h1&rdquo;;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            import ProfilPageWrapper from &ldquo;@/components/profil/profil-page-wrapper&rdquo;;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            import ProfilCard from &ldquo;@/components/profil/profil-card&rdquo;;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            export default async function Page() &#123;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            return &lt;Main&gt;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            &lt;H1&gt;Profil&lt;/H1&gt;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            &lt;ProfilPageWrapper&gt;
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            &lt;ProfilCard /&gt;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            &lt;/ProfilPageWrapper&gt;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            &lt;/Main&gt;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>






    <H3Course>Le fichier &ldquo;route.ts&rdquo;</H3Course>
        <PCourse>En Next.js, pour créer une <SpanCourse>route API</SpanCourse>, il suffit de créer un fichier &ldquo;route.ts&rdquo; et de le mettre dans le dossier <SpanCourse>api</SpanCourse> (dans le dossier app). Ce fichier sera accessible via l&apos;URL <SpanCourse>/api/route</SpanCourse>.</PCourse>
    <PCourse className={'simple-my'}>Vous pouvez avoir plusieurs routes cela fonctionne comme les pages, mais elles renvoient en général du <SpanCourse>JSON</SpanCourse>.</PCourse>
    <PCourse>Le nom de la fonction, ici <SpanCourse>GET</SpanCourse>, correspond à la méthode. Vous pouvez donc avoir autant de fonction que de méthode par fichier route.ts</PCourse>

    <MultiLignesCodeWrapper className={'simple-mt'}>
        <CodeCourse langage={"tsx"}>
            import &#123; type NextRequest &#125; from &apos;next/server&apos;;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            export async function GET(request: NextRequest) &#123;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            return new Response.json(&#123;message: &ldquo;Hello, Next.js!&rdquo;&#125;);
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>





    <H3Course>Middleware</H3Course>
    <PCourse>Un middleware intercepte toutes les requêtes et laisse passer ou non la requête.</PCourse>

    <PCourse className={'simple-my'}>Cela est très pratique pour sécuriser une route en fonction de l&apos;état d&apos;authentification de l&apos;utilisateur.</PCourse>

        <PCourse>Ce fichier doit s&apos;appeler <SpanCourse>middleware.ts</SpanCourse> et se situé non pas dans le dossier <SpanCourse>app</SpanCourse> mais à la <SpanCourse>racine du projet</SpanCourse> ou le dossier <SpanCourse>src</SpanCourse> en fonction de votre choix de structure des dossiers à la création de l&apos;application.</PCourse>
    <PCourse className={"simple-my"}>Dans l&apos;exemple ci-dessous le matcher correspond aux routes que doit intercepter le middleware.</PCourse>

    <MultiLignesCodeWrapper>
        <CodeCourse langage={"tsx"}>
            import &#123; NextResponse &#125; from &apos;next/server&apos;;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            import type &#123; NextRequest &#125; from &apos;next/server&apos;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            export function middleware(request: NextRequest) &#123;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            return NextResponse.redirect(new URL(&apos;/home&apos;, request.url));
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>

        <CodeCourse langage={"tsx"}>
            export const config = &#123;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            matcher: &apos;/about/:path*&apos;,
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>






    <H3Course>Page 404 not found</H3Course>
    <PCourse>Il est possible de créer une page 404 en créant un fichier <SpanCourse>not-found.tsx</SpanCourse> à la racine du dossier <SpanCourse>app</SpanCourse>. Cette page sera affichée si une route n&apos;est pas trouvée.</PCourse>

    <MultiLignesCodeWrapper className={"simple-mt"}>
        <CodeCourse langage={"tsx"}>
            export default function Custom404() &#123;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            return &lt;h1&gt;404 - Page Not Found&lt;/h1&gt;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>





    <H3Course>Page de chargement</H3Course>
    <PCourse>Il est possible de créer une page de chargement en créant un fichier <SpanCourse>loading.tsx</SpanCourse> à la racine du dossier <SpanCourse>app</SpanCourse> ou dans chacune des routes pour un chargement personnalisé par page. </PCourse>

    <PCourse className={'simple-my'}>Cette page sera affichée pendant le chargement de la page. Il est aussi possible d&apos;utiliser la balise <SpanCourse>Suspense</SpanCourse> pour ne pas bloquer la page, mais appliquer l&apos;état de chargement à un composant en particulier. Cela s&apos;appelle le <SpanCourse>streaming</SpanCourse>.</PCourse>
    <MultiLignesCodeWrapper>
        <CodeCourse langage={"tsx"}>
            export default function CustomLoading() &#123;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            return &lt;h1&gt;Loading...&lt;/h1&gt;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>






    <H3Course>Favicon et métadonnées</H3Course>
    <PCourse>Pour ajouter une favicon personnalisé dans votre application, il suffit de remplacer celle existante dans le dossier <SpanCourse>app</SpanCourse> par la vôtre.</PCourse>

    <PCourse className={"simple-my"}>Pour les métadonnées, <SpanCourse>Next.js</SpanCourse> propose un exemple dans le layout. Vous pouvez exporter une constante <SpanCourse>metadata</SpanCourse> pour personnaliser les méta-datas de chaque page.</PCourse>

    <PCourse>Pour le fichier <SpanCourse>error.tsx</SpanCourse>, c&apos;est un petit peu plus compliqué, car il ne faut pas que les erreurs soient affichées au client pour des raisons de sécurité. Je vous recommande d&apos;aller sur <Link href="https://nextjs.org/docs/app/building-your-application/routing/error-handling" target="_blank">le site officiel de <SpanCourse>Next.js</SpanCourse> pour en savoir plus</Link>.</PCourse>






    <H2Course>Les balises &ldquo;spéciales&rdquo;</H2Course>

    <H3Course className={'mt-2'}>La balise <SpanCourse>Link</SpanCourse></H3Course>
    <PCourse>La balise <SpanCourse>Link</SpanCourse> est une balise spéciale de Next.js qui permet de créer des liens entre les différentes pages de votre application.</PCourse>

    <PCourse className={"simple-my"}>Elle est très utile pour la navigation et le routage, car elle permet de charger les pages de manière asynchrone, sans recharger toute la page.</PCourse>

    <PCourse>Cela améliore la performance et l&apos;expérience utilisateur, en évitant les temps de chargement inutiles.</PCourse>

    <PCourse className={'simple-my'}>Voici un exemple d&apos;utilisation de la balise <SpanCourse>Link</SpanCourse> :</PCourse>

    <MultiLignesCodeWrapper>
        <CodeCourse langage={"tsx"}>
            import Link from &apos;next/link&apos;;
       </CodeCourse>
        <CodeCourse langage={"tsx"}>
            export default function Header() &#123;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            return (
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            &lt;header&gt;
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            &lt;nav&gt;
        </CodeCourse>
        <CodeCourse indentation={4} langage={"tsx"}>
            &lt;Link href=&ldquo;/contact&rdquo;&gt;Contact&lt;/Link&gt;
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            &lt;/nav&gt;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            &lt;/header&gt;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            );
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>





    <H3Course>La balise <b>Image</b></H3Course>

    <PCourse>La balise <SpanCourse>Image</SpanCourse> est une balise spéciale de <SpanCourse>Next.js</SpanCourse> qui permet de charger des images de manière optimisée.</PCourse>

    <PCourse className={'simple-my'}>Elle prend en charge le chargement progressif, la mise en cache, la conversion automatique des formats, et la génération de tailles d&apos;image adaptées à l&apos;écran. Cela permet d&apos;améliorer les performances de votre application et de réduire la consommation de bande passante. Il faudra obligatoirement renseigner les attributs <SpanCourse>src</SpanCourse>, <SpanCourse>width</SpanCourse>, <SpanCourse>height</SpanCourse> et <SpanCourse>alt</SpanCourse>.</PCourse>

    <PCourse>Pour utiliser des images externes, nous devrons paramétrer le fichier <SpanCourse>next.config.mjs</SpanCourse> pour autoriser les images externes.</PCourse>

    <MultiLignesCodeWrapper className={'simple-my'}>
        <CodeCourse langage={"json"}>
            module.exports = &#123;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"json"}>
            images: &#123;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"json"}>
            remotePatterns: [
        </CodeCourse>
        <CodeCourse indentation={3} langage={"json"}>
            &#123;
        </CodeCourse>
        <CodeCourse indentation={4} langage={"json"}>
            hostname: &ldquo;dummyimage.com&rdquo;,
        </CodeCourse>
        <CodeCourse indentation={4} langage={"json"}>
            protocol: &ldquo;https&rdquo;,
        </CodeCourse>
        <CodeCourse indentation={3} langage={"json"}>
            &#125;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"json"}>
            ]
        </CodeCourse>
        <CodeCourse indentation={1} langage={"json"}>
            &#125;
        </CodeCourse>
        <CodeCourse langage={"json"}>
            &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>

    <PCourse>Voici un exemple d&apos;utilisation de la balise <b>Image</b> :</PCourse>

    <MultiLignesCodeWrapper className={"simple-my"}>
        <CodeCourse langage={"tsx"}>
            import Image from &apos;next/image&apos;;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            export default function Avatar() &#123;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            return (
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            &lt;Image
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            src=&ldquo;/avatar.jpg&rdquo;
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            alt=&ldquo;Picture of the author&rdquo;
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            width=&#123;500&#125;
        </CodeCourse>
        <CodeCourse indentation={3} langage={"tsx"}>
            height=&#123;500&#125;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            /&gt;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            );
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>


    <PCourse>Pour les images provenant de notre application, nous pouvons les importer comme ceci :</PCourse>

    <MultiLignesCodeWrapper className={'simple-my'}>
        <CodeCourse langage={"tsx"}>
            import Image from &apos;next/image&apos;;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            import avatar from &apos;@/images/avatar.jpg&apos;;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            export default function Avatar() &#123;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            return &lt;Image
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            src=&#123;avatar&#125;
        </CodeCourse>
        <CodeCourse indentation={2} langage={"tsx"}>
            alt=&ldquo;Picture of the author&rdquo;
        </CodeCourse>
        <CodeCourse indentation={1} langage={"tsx"}>
            /&gt;
        </CodeCourse>
        <CodeCourse langage={"tsx"}>
            &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>



    <PCourse>Les attributs <SpanCourse>width</SpanCourse> et <SpanCourse>height</SpanCourse> ne sont alors pas obligatoire.</PCourse>

    </LayoutCourseCustom>
}
