import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';



export default function Page() {

    return <>

    <h1>Next.js - Les Bases - Cours</h1>


    <h2>La différence entre <b>Params</b> et <b>SearchParams</b></h2>

    <p>La gestion de l'URL est une partie importante du développement web. Il est important de bien comprendre la différence entre les <b>Params</b> et les <b>SearchParams</b> d'une url.</p>

    <p>Comme vu précédemment, nous pouvons creer une route dynamique en mettant entre <b>[]</b> le nom du dossier.</p>
    <p>C'est un <b>Params</b>.</p>

    <a href="/next-js/params.jpg" target="_blank">
        <img src="/next-js/params.jpg" alt="Params" />
    </a>
    <p>Ici <b>category</b> et <b>slug</b> sont des paramètres dynamiques que nous verrons comment récupérer grâce à la propriété <b>Params</b>.</p>
    <p>Dans cet exemple si nous accédons à l'URL "/cours/html/les-bases" nous aurons 2 <b>Params</b> : "html" et "les-bases".</p>


    <p>Ne pas confondre avec les <b>SearchParams</b> qui sont les paramètres qui viennent apres le <b>?</b> d'une url et sont séparés par un <b>&</b>.</p>
    <p>Par exemple dans l'url "/cours/html/les-bases?search=hello nous avons 1 <b>SearchParams</b> : "search" dont la valeur est "hello".</p>

    <p>Il est important de bien comprendre la différence entre les deux car ils sont utilisés de manière différente.</p>
    <p>Les <b>Params</b> sont utilisés pour créer des routes dynamiques alors que les <b>SearchParams</b> sont utilisés pour filtrer des données.</p>

    <p>Les <b>Params</b> sont injectés dans les <b>Layout</b> et <b>Pages</b> des <b>Server Components</b> tandis que les <b>SearchParams</b> UNIQUEMENT dans les <b>Pages</b>.</p>
    <p>Pour les récuperer dans le composant, il suffit de déstructuré l'un ou l'autre des <b>props</b> de la <b>Page</b> ou du <b>Layout</b>.</p>

    <p>Exemple de récupération d'un <b>Params</b> en <b>Typescript</b> avec un petit aperçu d'une requête <b>Prisma</b> :</p>

    <SyntaxHighlighter language="typescript" style={solarizedlight}>
    {`type CoursePageProps = {
                               params: {
                               category: string
                               slug: string
                           }
                           }
    export default async function Page({params} : CoursePageProps) {
                               const course = await prisma.course.findFirst({
                               where: {
                               category: params.category,
                               slug: params.slug,
                           }
                           });
                           }`}
    </SyntaxHighlighter>

{/*    <p>Le <b>type</b> des <b>SearchParams</b> est un peu différent, car il peut être un tableau :</p>*/}
{/*    ```tsx*/}
{/*    type PageProps = { searchParams: { [key: string]: string | undefined } }*/}
{/*    ```*/}

{/*    <p>Dans un <b>Client Component</b>, il faudra récupérer les <b>Params</b> et <b>SearchParams</b> à l'aide des hooks <b>useParams</b> et <b>useSearchParams</b>.</p>*/}



{/*    <h2>Le <b>Server Side Rendering</b> (SSR) et <b>Client Side Rendering</b> (CSR) et le <b>Static Site Generation</b> (SSG)</h2>*/}
{/*    <p>Le <b>Server-Side Rendering</b> (SSR) est une technique où les pages web sont générées sur le serveur avant d'être envoyées au client. Contrairement au <b>Client Side Rendering</b> (CSR), où le navigateur du client exécute le JavaScript pour générer le contenu, avec SSR, le serveur produit une page HTML complète qui est immédiatement visible par l'utilisateur dès qu'elle est chargée.</p>*/}

{/*    <p>Voici comment ça fonctionne :</p>*/}
{/*    <ul>*/}
{/*        <li>Requête du client : L'utilisateur demande une page web en entrant une URL.</li>*/}
{/*        <li>Rendu sur le serveur : Le serveur traite cette requête, exécute le code nécessaire (souvent avec un framework comme Next.js pour React) pour générer une page HTML complète.</li>*/}
{/*        <li>Réponse au client : Le serveur envoie cette page HTML au navigateur du client.</li>*/}
{/*        <li>Affichage immédiat : Le contenu est visible instantanément, même si des scripts JavaScript supplémentaires se chargent pour rendre la page interactive.</li>*/}
{/*    </ul>*/}

{/*    <p>Les avantages du <b>Server Side Rendering</b> (SSR) incluent un meilleur référencement (SEO) et un temps de chargement initial plus rapide, car l'utilisateur voit du contenu sans attendre que le JavaScript soit entièrement exécuté. Cependant, cela peut entraîner une charge accrue sur le serveur et des temps de réponse plus lents si le serveur doit générer chaque page à la demande.</p>*/}

{/*    <p>La génération de pages statiques (Static Page Generation) consiste à créer des pages HTML prêtes à l'emploi lors du build d'une application, plutôt qu'à la demande. Chaque page est pré-rendue et stockée sur le serveur, ce qui permet de les servir rapidement aux utilisateurs sans besoin de traitement supplémentaire côté serveur. Cette méthode améliore la performance et la sécurité, et est idéale pour les sites avec un contenu qui ne change pas fréquemment, comme les blogs ou les sites de documentation.</p>*/}

{/*    <p>Next.js, le <b>Server Side Rendering</b> correspond aux <b>Server Component</b> et le <b>Client Side Rendering</b> aux <b>Clients Components</b>. Il est préférable d'avoir le moins de <b>Client Component</b> possible, mais cela est normal d'en avoir dans une application <b>Next.js</b></p>*/}
{/*    <p>Afin de générer des pages statiques (Static Site Generation), il faudra ajouter une ligne dans "next.config.mjs" avant de "build" le projet, cependant beaucoup de fonctionnalités comme les <b>Servers Actions</b> ne seront pas disponible.</p>*/}

{/*    <h2>L'hydratation des pages</h2>*/}
{/*    <p>L'hydratation en Next.js est le processus qui rend une page statique ou pré-rendue interactive après son chargement dans le navigateur. Lorsqu'une page est servie par le serveur, elle est d'abord affichée sous forme de HTML statique. Ensuite, Next.js envoie le JavaScript nécessaire pour "hydrater" cette page, c'est-à-dire pour attacher les comportements interactifs du framework React. Ce processus permet d'avoir à la fois une bonne performance initiale et une expérience utilisateur riche et dynamique.</p>*/}
{/*    <p>L'une des erreurs d'hydratation les plus fréquentes est le mismatch de contenu entre le serveur et le client. Cela se produit lorsque le HTML généré sur le serveur (pendant le Server-Side Rendering ou la génération de pages statiques) ne correspond pas exactement au HTML généré par le client une fois le JavaScript chargé.</p>*/}
{/*    <p>Cela peut arriver si le rendu côté serveur et côté client dépend de données dynamiques ou d'états qui diffèrent entre le moment où la page est générée sur le serveur et le moment où elle est hydratée dans le navigateur. Par exemple, si un composant React génère du contenu basé sur la date ou l'heure actuelle, le résultat peut différer entre le serveur et le client, ce qui entraîne cette erreur.</p>*/}

{/*    <p>Pour éviter ces erreurs, il est important de s'assurer que le rendu côté serveur et côté client est synchronisé en utilisant des données stables et prévisibles pendant le processus de rendu initial.</p>*/}

{/*    <h3>Note importante</h3>*/}
{/*    <p>Nous avons mentionné plus haut que les <b>Server Components</b> étaient rendus <b>Côté Serveur</b> et que les <b>Client Components</b> étaient rendus <b>Côté Client</b>. En réalité les <b>Client Component</b> sont aussi rendus une premiere fois <b>Côté Serveur</b>.</p>*/}
{/*    <p>Une erreur d'hydratation courante survient lorsque l'on crée un <b>hook</b> ou un <b>Provider</b> (Client Component) qui utilise la variable <b>window</b> sans avoir préalablement sécurisé son utilisation avec une condition. Le <b>Client Component</b> étant d'abord rendu <b>côté serveur</b>, la variable <b>window</b> est alors <b>undefined</b>, ce qui peut faire crasher l'application.</p>*/}


{/*    <h2>Les fichiers "spéciaux"</h2>*/}
{/*    <p><b>Next.js</b> est préconfiguré pour faciliter le développement, en automatisant certaines tâches répétitives dans chaque application. Pour cela, <b>Next.js</b> propose des fonctionnalités spécifiques. Nous allons en lister quelques-unes ici pour vous aider à comprendre leur fonctionnement général. Pour obtenir une liste complète, <a href="https://nextjs.org/docs/getting-started/installation" target="_blank">rendez-vous sur le site officiel de <b>Next.js</b></a>.</p>*/}

{/*    <h3>le fichier "layout.tsx"</h3>*/}
{/*    <p>Le fichier <b>layout.tsx</b> est un composant qui sert à envelopper les pages de votre application. Il est très utile pour ajouter des éléments communs à toutes les pages, comme un en-tête, un pied de page, ou un menu de navigation. Ce composant permet également de gérer l'état global de l'application, comme le thème ou l'authentification de l'utilisateur.</p>*/}
{/*    <p>Il récupère la propriété <b>children</b> pour encapsuler le contenu de la page et peut ajouter des éléments comme un menu ou un pied de page. Il peut aussi récupérer les <b>Params</b>, mais pas les <b>SearchParams</b>.</p>*/}
{/*    <p>Vous pouvez avoir un fichier layout par niveau de profondeur dans votre arborescence de pages, par exemple un layout pour les pages de niveau 1, un autre pour les pages de niveau 2, etc.</p>*/}


{/*    ```tsx*/}
{/*    import {PropsWithChildren} from "react";*/}

{/*    export default function Layout({ children } : PropsWithChildren) {*/}
{/*                               return (*/}
{/*                               <div>*/}
{/*                               <header>*/}
{/*                               <h1>Mon super site</h1>*/}
{/*                               </header>*/}
{/*                               <main>{children}</main>*/}
{/*    <footer>*/}
{/*        <p>© 2022 Mon super site</p>*/}
{/*    </footer>*/}
{/*</div>*/}
{/*)*/}
{/*}*/}
{/*```*/}

{/*    <h3>Le fichier "page.tsx"</h3>*/}
{/*    <p>Le composant <b>page.tsx</b> est utilisé pour définir le contenu d'une page individuelle dans une application Next.js. Chaque fichier page.tsx dans un sous-répertoire du dossier app/ ou pages/ correspond automatiquement à une route spécifique. Par exemple, <b>app/about/page.tsx</b> définira la page accessible via <b>/about</b>. Ce composant peut contenir du code JSX, des composants React, et toute la logique nécessaire pour afficher la page. Il est au cœur de la structure des routes dans Next.js, permettant de créer des pages dynamiques et interactives.</p>*/}
{/*    <p>Il peut récupérer les <b>Params</b> et les <b>SearchParams</b> et peut appeler des <b>Server Components</b> ou des <b>Client Components</b>.</p>*/}
{/*    <p>Dans l'idéal, on le gardera en tant que <b>Server Component</b> afin de récupérer les données depuis la base de données pour afficher la page plus rapidement et éviter les erreurs d'hydratation.</p>*/}

{/*```tsx*/}
{/*import Main from "@/components/main";*/}
{/*import H1 from "@/components/h1";*/}
{/*import ProfilPageWrapper from "@/components/profil/profil-page-wrapper";*/}
{/*import ProfilCard from "@/components/profil/profil-card";*/}

{/*export default async function Page() {*/}

{/*    return <Main>*/}

{/*        <H1>Profil</H1>*/}

{/*        <ProfilPageWrapper>*/}
{/*            <ProfilCard />*/}
{/*        </ProfilPageWrapper>*/}

{/*    </Main>*/}
{/*}*/}
{/*```*/}


{/*    <h3>Le fichier "route.ts"</h3>*/}
{/*    <p>En <b>Next.js</b>, pour créer une <b>route API</b>, il suffit de créer un fichier "route.ts" et de le mettre dans le dossier "api" (dans le dossier app). Ce fichier sera accessible via l'URL "/api/route".</p>*/}
{/*    <p>Vous pouvez avoir plusieurs routes cela fonctionne comme les pages, mais elles renvoient en général du <b>JSON</b>.</p>*/}
{/*    <p>Le nom de la fonction, ici <b>GET</b>, correspond à la méthode. Vous pouvez donc avoir autant de fonction que de méthode par fichier route.ts</p>*/}

{/*```tsx*/}
{/*import { type NextRequest } from 'next/server'*/}

{/*export async function GET(request: NextRequest) {*/}
{/*    const token = request.cookies.get('token')*/}

{/*    return new Response.json({message: 'Hello, Next.js!'});*/}
{/*}*/}
{/*```*/}

{/*    <h3>Middleware</h3>*/}
{/*    <p>Un middleware intercepte toutes les requêtes et laisse passer ou non la requête. Cela est très pratique pour sécuriser une route en fonction de l'état d'authentification de l'utilisateur. Ce fichier doit s'appeler <b>middleware.ts</b> et se situé non pas dans le dossier <b>app</b> mais à la racine du projet ou le dossier src en fonction de votre choix de structure des dossiers à la création de l'application.</p>*/}
{/*    <p>Dans l'exemple ci-dessous le matcher correspond aux routes que doit intercepter le middleware.</p>*/}


{/*```typescript*/}
{/*import { NextResponse } from 'next/server'*/}
{/*import type { NextRequest } from 'next/server'*/}

{/*export function middleware(request: NextRequest) {*/}
{/*    return NextResponse.redirect(new URL('/home', request.url));*/}
{/*}*/}

{/*export const config = {*/}
{/*    matcher: '/about/:path*',*/}
{/*}*/}
{/*```*/}

{/*    <h3>Page 404 not found</h3>*/}
{/*    <p>Il est possible de créer une page 404 en créant un fichier <b>not-found.tsx</b> à la racine du dossier <b>app</b>. Cette page sera affichée si une route n'est pas trouvée.</p>*/}
{/*```tsx*/}
{/*export default function Custom404() {*/}
{/*    return <h1>404 - Page Not Found</h1>*/}
{/*}*/}
{/*```*/}

{/*    <h3>Page de chargement</h3>*/}
{/*    <p>Il est possible de créer une page de chargement en créant un fichier <b>loading.tsx</b> à la racine du dossier <b>app</b> ou dans chacune des routes pour un chargement personnalisé par page. Cette page sera affichée pendant le chargement de la page. Il est aussi possible d'utiliser la balise <b>Suspense</b> pour ne pas bloquer la page, mais appliquer l'état de chargement à un composant en particulier. Cela s'appelle le <b>streaming</b>.</p>*/}
{/*```tsx*/}
{/*export default function CustomLoading() {*/}
{/*    return <h1>Loading...</h1>*/}
{/*}*/}
{/*```*/}

{/*    <h3>Favicon et metadata</h3>*/}
{/*    <p>Pour ajouter une favicon personnalisé dans votre application, il suffit de remplacer celle existante dans le dossier <b>app</b> par la vôtre. Pour les metadata, <b>Next.js</b> propose un exemple dans le layout. Vous pouvez exporter une constante <b>metadata</b> pour personnaliser les méta-datas de chaque page.</p>*/}

{/*    <p>Pour le fichier <b>error.tsx</b>, c'est un petit peu plus compliqué, car il ne faut pas que les erreurs soient affichées au client pour des raisons de sécurité. Je vous recommande d'aller sur <a href="https://nextjs.org/docs/app/building-your-application/routing/error-handling" target="_blank">le site officiel de <b>Next.js</b> pour en savoir plus</a>.</p>*/}


{/*    <h2>Les balises "spéciales"</h2>*/}

{/*    <h3>La balise <b>Link</b></h3>*/}

{/*    <p>La balise <b>Link</b> est une balise spéciale de <b>Next.js</b> qui permet de créer des liens entre les différentes pages de votre application. Elle est très utile pour la navigation et le routage, car elle permet de charger les pages de manière asynchrone, sans recharger toute la page. Cela améliore la performance et l'expérience utilisateur, en évitant les temps de chargement inutiles.</p>*/}

{/*    <p>Voici un exemple d'utilisation de la balise <b>Link</b> :</p>*/}

{/*```tsx*/}
{/*import Link from 'next/link'*/}

{/*export default function Header() {*/}
{/*    return (*/}
{/*        <header>*/}
{/*            <nav>*/}
{/*                <Link href="/contact">Contact</Link>*/}
{/*            </nav>*/}
{/*        </header>*/}
{/*    )*/}
{/*}*/}
{/*```*/}

{/*    <h3>La balise <b>Image</b></h3>*/}

{/*    <p>La balise <b>Image</b> est une balise spéciale de <b>Next.js</b> qui permet de charger des images de manière optimisée. Elle prend en charge le chargement progressif, la mise en cache, la conversion automatique des formats, et la génération de tailles d'image adaptées à l'écran. Cela permet d'améliorer les performances de votre application et de réduire la consommation de bande passante. Il faudra obligatoirement renseigner les attributs <b>src</b>, <b>width</b>, <b>height</b> et <b>alt</b>.</p>*/}
{/*    <p>Pour utiliser des images externes, nous devrons paramétrer le fichier <b>next.config.mjs</b> pour autoriser les images externes.</p>*/}

{/*```javascript*/}
{/*images: {*/}
{/*    remotePatterns: [*/}
{/*        {*/}
{/*            hostname: "dummyimage.com",*/}
{/*            protocol: "https",*/}
{/*        }*/}
{/*    ]*/}
{/*}*/}
{/*```*/}

{/*    <p>Voici un exemple d'utilisation de la balise <b>Image</b> :</p>*/}

{/*```tsx*/}
{/*import Image from 'next/image'*/}

{/*export default function Avatar() {*/}
{/*    return (*/}
{/*        <Image*/}
{/*            src="/avatar.jpg"*/}
{/*            alt="Picture of the author"*/}
{/*            width={500}*/}
{/*            height={500}*/}
{/*        />*/}
{/*    )*/}
{/*}*/}
{/*```*/}

{/*    <p>Pour les images provenant de notre application, nous pouvons les importer comme ceci :</p>*/}

{/*```tsx*/}
{/*import Image from 'next/image'*/}
{/*import avatar from '@/images/avatar.jpg'*/}

{/*export default function Avatar() {*/}
{/*    return <Image*/}
{/*        src={avatar}*/}
{/*        alt="Picture of the author" />*/}

{/*}*/}
{/*```*/}
{/*    <p>Les attributs <b>width</b> et <b>height</b> ne sont alors pas obligatoire.</p>*/}

{/*    <p>En ésperant que vous ayez apprécié notre cours, nous vous donnons rendez-vous partie exercice pour pratiquer.</p>*/}
    </>
}
