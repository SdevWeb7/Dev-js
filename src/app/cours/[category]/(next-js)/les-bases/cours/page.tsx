import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";
import Link from "next/link";
import PCourse from "@/components/cours/p-course";
import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import H3Course from "@/components/cours/h3-course";
import Image from "next/image";
import imgParams from "@/../public/next-js/params.jpg";


export default function Page() {

    return <>

    <H1Course>Next.js - Les Bases - Cours</H1Course>



    <H2Course>La différence entre <b>Params</b> et <b>SearchParams</b></H2Course>

    <PCourse>La gestion de l&apos;URL est une partie importante du développement web. Il est important de bien comprendre la différence entre les <b>Params</b> et les <b>SearchParams</b> d&apos;une url.</PCourse>
    <PCourse>Comme vu précédemment, nous pouvons creer une route dynamique en mettant entre <b>[]</b> le nom du dossier.</PCourse>
    <PCourse>C&apos;est un <b>Params</b>.</PCourse>


    <Link href="/next-js/params.jpg" target="_blank"><Image src={imgParams} alt="Params" /></Link>


    <PCourse>Ici <b>category</b> et <b>slug</b> sont des paramètres dynamiques que nous verrons comment récupérer grâce à la propriété <b>Params</b>.</PCourse>
    <PCourse>Dans cet exemple si nous accédons à l&apos;URL &ldquo;/cours/html/les-bases&rdquo; nous aurons 2 <b>Params</b> : &ldquo;html&rdquo; et &ldquo;les-bases&rdquo;.</PCourse>


    <PCourse>Ne pas confondre avec les <b>SearchParams</b> qui sont les paramètres qui viennent apres le <b>?</b> d&apos;une url et sont séparés par un <b>&</b>.</PCourse>
    <PCourse>Par exemple dans l&apos;url &ldquo;/cours/html/les-bases?search=hello&rdquo; nous avons 1 <b>SearchParams</b> : &ldquo;search&rdquo; dont la valeur est &ldquo;hello&rdquo;.</PCourse>

    <PCourse>Il est important de bien comprendre la différence entre les deux car ils sont utilisés de manière différente.</PCourse>
    <PCourse>Les <b>Params</b> sont utilisés pour créer des routes dynamiques alors que les <b>SearchParams</b> sont utilisés pour filtrer des données.</PCourse>

    <PCourse>Les <b>Params</b> sont injectés dans les <b>Layout</b> et <b>Pages</b> des <b>Server Components</b> tandis que les <b>SearchParams</b> UNIQUEMENT dans les <b>Pages</b>.</PCourse>
    <PCourse>Pour les récuperer dans le composant, il suffit de déstructuré l&apos;un ou l&apos;autre des <b>props</b> de la <b>Page</b> ou du <b>Layout</b>.</PCourse>



    <PCourse>Exemple de récupération d&apos;un <b>Params</b> en <b>Typescript</b> avec un petit aperçu d&apos;une requête <b>Prisma</b> :</PCourse>

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




    <PCourse>Le <b>type</b> des <b>SearchParams</b> est un peu différent, car il peut être un tableau :</PCourse>
    <MultiLignesCodeWrapper>
        <CodeCourse langage={"tsx"}>
            type PageProps = &#123; searchParams: &#123; [key: string]: string | undefined &#125; &#125;
        </CodeCourse>
    </MultiLignesCodeWrapper>


    <PCourse>Dans un <b>Client Component</b>, il faudra récupérer les <b>Params</b> et <b>SearchParams</b> à l&apos;aide des hooks <b>useParams</b> et <b>useSearchParams</b>.</PCourse>







    <H2Course>Le <b>Server Side Rendering</b> (SSR) et <b>Client Side Rendering</b> (CSR) et le <b>Static Site Generation</b> (SSG)</H2Course>
    <PCourse>Le <b>Server-Side Rendering</b> (SSR) est une technique où les pages web sont générées sur le serveur avant d&apos;être envoyées au client. Contrairement au <b>Client Side Rendering</b> (CSR), où le navigateur du client exécute le JavaScript pour générer le contenu, avec SSR, le serveur produit une page HTML complète qui est immédiatement visible par l&apos;utilisateur dès qu&apos;elle est chargée.</PCourse>

    <PCourse>Voici comment ça fonctionne :</PCourse>
    <ul>
        <li>Requête du client : L&apos;utilisateur demande une page web en entrant une URL.</li>
        <li>Rendu sur le serveur : Le serveur traite cette requête, exécute le code nécessaire (souvent avec un framework comme Next.js pour React) pour générer une page HTML complète.</li>
        <li>Réponse au client : Le serveur envoie cette page HTML au navigateur du client.</li>
        <li>Affichage immédiat : Le contenu est visible instantanément, même si des scripts JavaScript supplémentaires se chargent pour rendre la page interactive.</li>
    </ul>

    <PCourse>Les avantages du <b>Server Side Rendering</b> (SSR) incluent un meilleur référencement (SEO) et un temps de chargement initial plus rapide, car l&apos;utilisateur voit du contenu sans attendre que le JavaScript soit entièrement exécuté. Cependant, cela peut entraîner une charge accrue sur le serveur et des temps de réponse plus lents si le serveur doit générer chaque page à la demande.</PCourse>

    <PCourse>La génération de pages statiques (Static Page Generation) consiste à créer des pages HTML prêtes à l&apos;emploi lors du build d&apos;une application, plutôt qu&apos;à la demande. Chaque page est pré-rendue et stockée sur le serveur, ce qui permet de les servir rapidement aux utilisateurs sans besoin de traitement supplémentaire côté serveur. Cette méthode améliore la performance et la sécurité, et est idéale pour les sites avec un contenu qui ne change pas fréquemment, comme les blogs ou les sites de documentation.</PCourse>

    <PCourse>Next.js, le <b>Server Side Rendering</b> correspond aux <b>Server Component</b> et le <b>Client Side Rendering</b> aux <b>Clients Components</b>. Il est préférable d&apos;avoir le moins de <b>Client Component</b> possible, mais cela est normal d&apos;en avoir dans une application <b>Next.js</b></PCourse>
    <PCourse>Afin de générer des pages statiques (Static Site Generation), il faudra ajouter une ligne dans &ldquo;next.config.mjs&rdquo; avant de &ldquo;build&rdquo; le projet, cependant beaucoup de fonctionnalités comme les <b>Servers Actions</b> ne seront pas disponible.</PCourse>






    <H2Course>L&apos;hydratation des pages</H2Course>
    <PCourse>L&apos;hydratation en Next.js est le processus qui rend une page statique ou pré-rendue interactive après son chargement dans le navigateur. Lorsqu&apos;une page est servie par le serveur, elle est d&apos;abord affichée sous forme de HTML statique. Ensuite, Next.js envoie le JavaScript nécessaire pour &ldquo;hydrater&rdquo; cette page, c&apos;est-à-dire pour attacher les comportements interactifs du framework React. Ce processus permet d&apos;avoir à la fois une bonne performance initiale et une expérience utilisateur riche et dynamique.</PCourse>
    <PCourse>L&apos;une des erreurs d&apos;hydratation les plus fréquentes est le mismatch de contenu entre le serveur et le client. Cela se produit lorsque le HTML généré sur le serveur (pendant le Server-Side Rendering ou la génération de pages statiques) ne correspond pas exactement au HTML généré par le client une fois le JavaScript chargé.</PCourse>
    <PCourse>Cela peut arriver si le rendu côté serveur et côté client dépend de données dynamiques ou d&apos;états qui diffèrent entre le moment où la page est générée sur le serveur et le moment où elle est hydratée dans le navigateur. Par exemple, si un composant React génère du contenu basé sur la date ou l&apos;heure actuelle, le résultat peut différer entre le serveur et le client, ce qui entraîne cette erreur.</PCourse>

    <PCourse>Pour éviter ces erreurs, il est important de s&apos;assurer que le rendu côté serveur et côté client est synchronisé en utilisant des données stables et prévisibles pendant le processus de rendu initial.</PCourse>

    <H3Course>Note importante</H3Course>
    <PCourse>Nous avons mentionné plus haut que les <b>Server Components</b> étaient rendus <b>Côté Serveur</b> et que les <b>Client Components</b> étaient rendus <b>Côté Client</b>. En réalité les <b>Client Component</b> sont aussi rendus une premiere fois <b>Côté Serveur</b>.</PCourse>
    <PCourse>Une erreur d&apos;hydratation courante survient lorsque l&apos;on crée un <b>hook</b> ou un <b>Provider</b> (Client Component) qui utilise la variable <b>window</b> sans avoir préalablement sécurisé son utilisation avec une condition. Le <b>Client Component</b> étant d&apos;abord rendu <b>côté serveur</b>, la variable <b>window</b> est alors <b>undefined</b>, ce qui peut faire crasher l&apos;application.</PCourse>






    <H2Course>Les fichiers &ldquo;spéciaux&rdquo;</H2Course>
    <PCourse><b>Next.js</b> est préconfiguré pour faciliter le développement, en automatisant certaines tâches répétitives dans chaque application. Pour cela, <b>Next.js</b> propose des fonctionnalités spécifiques. Nous allons en lister quelques-unes ici pour vous aider à comprendre leur fonctionnement général. Pour obtenir une liste complète, <Link href="https://nextjs.org/docs/getting-started/installation" target="_blank">rendez-vous sur le site officiel de <b>Next.js</b></Link>.</PCourse>



    <H3Course>le fichier &ldquo;layout.tsx&rdquo;</H3Course>
    <PCourse>Le fichier <b>layout.tsx</b> est un composant qui sert à envelopper les pages de votre application. Il est très utile pour ajouter des éléments communs à toutes les pages, comme un en-tête, un pied de page, ou un menu de navigation. Ce composant permet également de gérer l&apos;état global de l&apos;application, comme le thème ou l&apos;authentification de l&apos;utilisateur.</PCourse>
    <PCourse>Il récupère la propriété <b>children</b> pour encapsuler le contenu de la page et peut ajouter des éléments comme un menu ou un pied de page. Il peut aussi récupérer les <b>Params</b>, mais pas les <b>SearchParams</b>.</PCourse>
    <PCourse>Vous pouvez avoir un fichier layout par niveau de profondeur dans votre arborescence de pages, par exemple un layout pour les pages de niveau 1, un autre pour les pages de niveau 2, etc.</PCourse>

    <MultiLignesCodeWrapper>
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
    <PCourse>Le composant <b>page.tsx</b> est utilisé pour définir le contenu d&apos;une page individuelle dans une application Next.js. Chaque fichier page.tsx dans un sous-répertoire du dossier app/ ou pages/ correspond automatiquement à une route spécifique. Par exemple, <b>app/about/page.tsx</b> définira la page accessible via <b>/about</b>. Ce composant peut contenir du code JSX, des composants React, et toute la logique nécessaire pour afficher la page. Il est au cœur de la structure des routes dans Next.js, permettant de créer des pages dynamiques et interactives.</PCourse>
    <PCourse>Il peut récupérer les <b>Params</b> et les <b>SearchParams</b> et peut appeler des <b>Server Components</b> ou des <b>Client Components</b>.</PCourse>
    <PCourse>Dans l&apos;idéal, on le gardera en tant que <b>Server Component</b> afin de récupérer les données depuis la base de données pour afficher la page plus rapidement et éviter les erreurs d&apos;hydratation.</PCourse>


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
    <PCourse>En <b>Next.js</b>, pour créer une <b>route API</b>, il suffit de créer un fichier &ldquo;route.ts&rdquo; et de le mettre dans le dossier &ldquo;api&rdquo (dans le dossier app). Ce fichier sera accessible via l&apos;URL &ldquo;/api/route&rdquo;.</PCourse>
    <PCourse>Vous pouvez avoir plusieurs routes cela fonctionne comme les pages, mais elles renvoient en général du <b>JSON</b>.</PCourse>
    <PCourse>Le nom de la fonction, ici <b>GET</b>, correspond à la méthode. Vous pouvez donc avoir autant de fonction que de méthode par fichier route.ts</PCourse>

    <MultiLignesCodeWrapper>
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
    <PCourse>Un middleware intercepte toutes les requêtes et laisse passer ou non la requête. Cela est très pratique pour sécuriser une route en fonction de l&apos;état d&apos;authentification de l&apos;utilisateur. Ce fichier doit s&apos;appeler <b>middleware.ts</b> et se situé non pas dans le dossier <b>app</b> mais à la racine du projet ou le dossier src en fonction de votre choix de structure des dossiers à la création de l&apos;application.</PCourse>
    <PCourse>Dans l&apos;exemple ci-dessous le matcher correspond aux routes que doit intercepter le middleware.</PCourse>

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
    <PCourse>Il est possible de créer une page 404 en créant un fichier <b>not-found.tsx</b> à la racine du dossier <b>app</b>. Cette page sera affichée si une route n&apos;est pas trouvée.</PCourse>

    <MultiLignesCodeWrapper>
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
    <PCourse>Il est possible de créer une page de chargement en créant un fichier <b>loading.tsx</b> à la racine du dossier <b>app</b> ou dans chacune des routes pour un chargement personnalisé par page. Cette page sera affichée pendant le chargement de la page. Il est aussi possible d&apos;utiliser la balise <b>Suspense</b> pour ne pas bloquer la page, mais appliquer l&apos;état de chargement à un composant en particulier. Cela s&apos;appelle le <b>streaming</b>.</PCourse>
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






    <H3Course>Favicon et metadata</H3Course>
    <PCourse>Pour ajouter une favicon personnalisé dans votre application, il suffit de remplacer celle existante dans le dossier <b>app</b> par la vôtre. Pour les metadata, <b>Next.js</b> propose un exemple dans le layout. Vous pouvez exporter une constante <b>metadata</b> pour personnaliser les méta-datas de chaque page.</PCourse>

    <PCourse>Pour le fichier <b>error.tsx</b>, c&apos;est un petit peu plus compliqué, car il ne faut pas que les erreurs soient affichées au client pour des raisons de sécurité. Je vous recommande d&apos;aller sur <Link href="https://nextjs.org/docs/app/building-your-application/routing/error-handling" target="_blank">le site officiel de <b>Next.js</b> pour en savoir plus</Link>.</PCourse>






    <H2Course>Les balises &ldquo;spéciales&rdquo;</H2Course>

    <H3Course>La balise <b>Link</b></H3Course>
    <PCourse>La balise <b>Link</b> est une balise spéciale de <b>Next.js</b> qui permet de créer des liens entre les différentes pages de votre application. Elle est très utile pour la navigation et le routage, car elle permet de charger les pages de manière asynchrone, sans recharger toute la page. Cela améliore la performance et l&apos;expérience utilisateur, en évitant les temps de chargement inutiles.</PCourse>

    <PCourse>Voici un exemple d&apos;utilisation de la balise <b>Link</b> :</PCourse>

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

    <PCourse>La balise <b>Image</b> est une balise spéciale de <b>Next.js</b> qui permet de charger des images de manière optimisée. Elle prend en charge le chargement progressif, la mise en cache, la conversion automatique des formats, et la génération de tailles d&apos;image adaptées à l&apos;écran. Cela permet d&apos;améliorer les performances de votre application et de réduire la consommation de bande passante. Il faudra obligatoirement renseigner les attributs <b>src</b>, <b>width</b>, <b>height</b> et <b>alt</b>.</PCourse>
    <PCourse>Pour utiliser des images externes, nous devrons paramétrer le fichier <b>next.config.mjs</b> pour autoriser les images externes.</PCourse>

    <MultiLignesCodeWrapper>
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

    <MultiLignesCodeWrapper>
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

    <MultiLignesCodeWrapper>
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



    <PCourse>Les attributs <b>width</b> et <b>height</b> ne sont alors pas obligatoire.</PCourse>

    <PCourse>En espérant que vous ayez apprécié notre cours, nous vous donnons rendez-vous partie exercice pour pratiquer.</PCourse>
    </>
}
