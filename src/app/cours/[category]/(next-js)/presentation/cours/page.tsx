import PCourse from "@/components/cours/p-course";
import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import UlCourse from "@/components/cours/ul-course";
import Link from "next/link";
import H3Course from "@/components/cours/h3-course";
import LICourse from "@/components/cours/li-course";
import Image from "next/image";
import imgNextStarting from "@/../public/next-js/next-starting.jpg";
import SpanCourse from "@/components/cours/span-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import CodeCourse from "@/components/cours/code-course";
import imgExempleSrc from "@/../public/next-js/exemple-src.png";
import imgExempleNoSrc from "@/../public/next-js/exemple-no-src.png";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";


export default function page() {

    return <LayoutCourseCustom>

        <H1Course>Next.js</H1Course>



        <PCourse>Next.js est un framework très complet qui propose de nombreuses fonctionnalités. Nous ne pouvons donc pas voir toutes les fonctionnalités dans le premier cours. Nous commencerons par le fonctionnement de base pour approfondir par la suite.</PCourse>



        <H2Course>Les Servers/Clients components</H2Course>
        <PCourse className={"mb-2"}>Comme vu dans le cours précédent <SpanCourse>Javascript / React</SpanCourse> :</PCourse>

        <UlCourse>
            <LICourse>nous ne pouvions pas contacter de base de données donc les données étaient non persistantes (à moins d&apos;utiliser le LocalStorage)</LICourse>
            <LICourse>nous envoyions un gros bundle javascript et le code était éxécuté coté client (dans le navigateur)</LICourse>
            <LICourse>nous devions donc créer une API séparée (serveur) ou un service tiers afin de persister des données</LICourse>
        </UlCourse>

        <PCourse className={"my-6"}>Next.js a révolutionné une première fois le monde du développement web en introduisant les <SpanCourse>Server Components</SpanCourse> et les <SpanCourse>Client Components</SpanCourse> (qui est en train d&apos;être intégré nativement dans <SpanCourse>React.js</SpanCourse>).</PCourse>
        <PCourse>Je dis première fois, car nous verrons par la suite les <SpanCourse>Servers Actions</SpanCourse> qui vont révolutionner une seconde fois le monde du développement web.</PCourse>

        <PCourse className={"my-6"}>Les <SpanCourse>Server Components</SpanCourse> sont des composants qui sont éxécutés <SpanCourse>côté serveur</SpanCourse> (<SpanCourse>Node.js)</SpanCourse> alors que les <SpanCourse>Client Components</SpanCourse> sont des composants qui sont éxécutés <SpanCourse>côté client</SpanCourse> (<SpanCourse>navigateur</SpanCourse>).</PCourse>

        <PCourse className={"mb-2"}>Les avantages sont nombreux, mais voici quelques exemples :</PCourse>
        <UlCourse>
            <LICourse>le javascript envoyé au client est beaucoup moins lours, donc bon pour les performances et la sécurité</LICourse>
            <LICourse>les données sont persistantes, donc plus besoin de créer une API séparée</LICourse>
            <LICourse>les données sont chargées côté serveur, donc le temps de chargement est plus rapide ainsi que le SEO</LICourse>
        </UlCourse>


        <H3Course>Caractéristiques des Server Components</H3Course>
        <UlCourse>
            <LICourse>tout les composants sont <SpanCourse>Server Component</SpanCourse> par défaut</LICourse>
            <LICourse>ils sont <SpanCourse>ASYNCHRONE</SpanCourse></LICourse>
            <LICourse>ne peuvent pas avoir de <SpanCourse>state</SpanCourse></LICourse>
            <LICourse>le code est éxécuté <SpanCourse>coté serveur</SpanCourse> (Node.js) pour renvoyer du html au client</LICourse>
            <LICourse>possibilité de contacter une base de données</LICourse>
            <LICourse>la variable <SpanCourse>window</SpanCourse> est undefined</LICourse>
        </UlCourse>



        <H3Course>Caractéristiques des Clients Components</H3Course>
        <UlCourse>
            <LICourse>ils sont <SpanCourse>SYNCHRONE</SpanCourse></LICourse>
            <LICourse>peuvent avoir un/des <SpanCourse>state(s)</SpanCourse></LICourse>
            <LICourse>les données sont chargées et éxécutés <SpanCourse>côté client</SpanCourse>(navigateur)</LICourse>
            <LICourse>ne peuvent pas contacter de base de données à moins de <SpanCourse>fetch</SpanCourse></LICourse>
            <LICourse>la variable <SpanCourse>window</SpanCourse> est définie</LICourse>
        </UlCourse>



        <H3Course>Hiérarchie des composants dans Next.js</H3Course>
        <PCourse>Première chose importante tout est par défaut <SpanCourse>Server Component</SpanCourse>.</PCourse>
        <PCourse className={"my-6"}>Pour rendre un composant <SpanCourse>Client Component</SpanCourse> il suffit d&apos;ajouter <SpanCourse>&ldquo;use client&rdquo;;</SpanCourse> tout en haut d&apos;un composant.</PCourse>
        <PCourse>Tout les composants <SpanCourse>ENFANTS</SpanCourse> d&apos;un <SpanCourse>Client Component</SpanCourse> est par défaut un <SpanCourse>Client Component</SpanCourse>.</PCourse>
        <PCourse className={"my-6"}>Il est possible d&apos;avoir un <SpanCourse>Server Component</SpanCourse> <b>ENFANT</b> d&apos;un <SpanCourse>Client Component</SpanCourse> en le passant par la <SpanCourse>props children</SpanCourse> cela est appelé la composition et peut-être très utile afin d&apos;éviter de rendre toute notre application <SpanCourse>Client Component</SpanCourse> si par exemple, nous devons l&apos;entourer d&apos;un <SpanCourse>Provider</SpanCourse>.</PCourse>
        <PCourse>La directive <SpanCourse>&ldquo;use server&rdquo;;</SpanCourse> est utilisée seulement pour les <SpanCourse>Server Actions</SpanCourse> que nous verrons très vite.</PCourse>






        <H2Course>Routing</H2Course>
        <PCourse>Une autre fonctionnalité très pratique de Next.js est la gestion simple et efficace du routing en fonction de la structure des dossiers.</PCourse>

        <PCourse className={"mt-6 mb-2"}>Avantages :</PCourse>
        <UlCourse>
            <LICourse>Next.js facilite la gestion des <SpanCourse>Params</SpanCourse> et <SpanCourse>SearchParams</SpanCourse> de l&apos;URL ainsi que d&apos;autres fonctionnalités</LICourse>
            <LICourse>Moins de fichiers ce qui diminue la possibilité d&apos;erreurs</LICourse>
            <LICourse>le code est plus lisible et plus facile à maintenir</LICourse>
            <LICourse>la structure des dossiers reflète les chemins (routes) donc nous pouvons rapidement avoir une vue d&apos;ensemble de l&apos;application</LICourse>
        </UlCourse>





        <H2Course>Créer une application</H2Course>
        <PCourse>Pour créer une application Next.js vous met à disposition une commande très pratique :</PCourse>
        <MultiLignesCodeWrapper className={"my-4"}>
            <CodeCourse langage={"bash"}>
                npx create-next-app@latest
            </CodeCourse>
        </MultiLignesCodeWrapper>
        <PCourse className={"mb-6"}>Si vous tapez cette commande dans votre terminal, Next.js vous posera quelques questions.</PCourse>

        <Link href="/next-js/next-starting.jpg" target="_blank"><Image src={imgNextStarting} alt="next-starting" /></Link>

        <PCourse className={'mt-6 mb-2'}>Next.js vous propose :</PCourse>
        <UlCourse>
            <LICourse>De choisir le nom de votre projet (doit être en minuscule sans caractères spéciaux)</LICourse>
            <LICourse>d&apos;utiliser <SpanCourse>Typescript</SpanCourse> ou non mais il est fortement recommandé de l&apos;utiliser</LICourse>
            <LICourse>d&apos;utiliser <SpanCourse>ESLint</SpanCourse> ou non mais il est fortement recommandé de l&apos;utiliser</LICourse>
            <LICourse>d&apos;utiliser <SpanCourse>TailwindCSS</SpanCourse> (conseillé aussi)</LICourse>
            <LICourse>d&apos;utiliser ou non le <SpanCourse>src</SpanCourse> directory (j&apos;utilise le dossier src)</LICourse>
            <LICourse>d&apos;utiliser ou non <SpanCourse>APP Router</SpanCourse> mais comme tout le reste, cela est très pratique</LICourse>
            <LICourse>et pour finir un <SpanCourse>alias</SpanCourse> qui va vous permet d&apos;importer vos fichiers beaucoup plus simplement : <SpanCourse>&ldquo;@/&rdquo;</SpanCourse> correspondra soit à la <SpanCourse>racine du projet</SpanCourse>, soit au dossier <SpanCourse>src</SpanCourse> en fonction de votre choix précédent.</LICourse>
        </UlCourse>



        <H2Course>Structure des dossiers</H2Course>
        <PCourse>Après avoir répondu à toutes les questions Next.js créer un nouveau projet.</PCourse>
        <PCourse className={"my-6"}>Il faudra ensuite ouvrir le dossier dans votre éditeur de code préféré et taper <SpanCourse>npm install</SpanCourse> dans le terminal.</PCourse>
        <PCourse>Ensuite, en fonction du choix ou non d&apos;utiliser le dossier src, vous verrez une ou l&apos;autre structure de dossier comme celle-ci :</PCourse>


        <H3Course><b>Avec</b> dossier &ldquo;src&rdquo; (ma préférence)</H3Course>
        <Link href="/next-js/exemple-src.png" target="_blank"><Image className={"shadow-md rounded-3xl"} src={imgExempleSrc} alt="next-structure-folder" /></Link>


        <H3Course><b>Sans</b> dossier &ldquo;src&rdquo;</H3Course>
        <Link href="/next-js/exemple-no-src.png" target="_blank"><Image className={"shadow-md rounded-3xl"} src={imgExempleNoSrc} alt="next-structure-folder" /></Link>



        <H3Course>Explication des fichiers &ldquo;spéciaux&rdquo;</H3Course>
        <UlCourse>
            <LICourse><SpanCourse>layout.tsx</SpanCourse> : ce fichier à la racine du dossier app englobe toutes vos autres pages. Vous pouvez en avoir un dans chaque dossier de page.</LICourse>
            <LICourse><SpanCourse>page.tsx</SpanCourse> : c&apos;est ce fichier et non son dossier qui créer la route (doit forcément s&apos;appeler page et retourner du JSX)</LICourse>
            <LICourse><SpanCourse>route.tsx</SpanCourse> : appeler un fichier route.ts en fait une route API (nous verrons ca le moment venu)</LICourse>
            <LICourse><SpanCourse>loading.tsx</SpanCourse> : permet de creer un loader personnalisé par page</LICourse>
            <LICourse><SpanCourse>not-found.tsx</SpanCourse> : permet de créer une page 404 personnalisée</LICourse>
            <LICourse><SpanCourse>error.tsx</SpanCourse> : permet d&apos;englober la page d&apos;un <SpanCourse>Error Boundary</SpanCourse> afin de gérer les potentielles erreurs</LICourse>
            <LICourse><SpanCourse>middleware.tsx</SpanCourse> : à mettre non pas dans le dossier <SpanCourse>app</SpanCourse> mais dans le dossier <SpanCourse>src</SpanCourse> ou à la racine de l&apos;application. Il intercepte les requêtes (comme un péage). Très pratique pour l&apos;authentification par exemple</LICourse>
            <LICourse><SpanCourse>components</SpanCourse> : c&apos;est ici que vous allez mettre vos composants réutilisables</LICourse>
            <LICourse><SpanCourse>lib</SpanCourse> : c&apos;est ici que vous allez mettre vos fonctions utilitaires</LICourse>
            <LICourse><SpanCourse>public</SpanCourse> : c&apos;est ici que vous allez mettre vos fichiers statiques (images, vidéos, etc.)</LICourse>
            <LICourse><SpanCourse>.env</SpanCourse> : c&apos;est dans de fichier que les informations sensibles seront stockées (exemple des clefs)</LICourse>
            <LICourse><SpanCourse>tailwind.config.js</SpanCourse> : c&apos;est ici que vous allez configurer TailwindCSS</LICourse>
            <LICourse><SpanCourse>next.config.js</SpanCourse> : c&apos;est ici que vous allez configurer votre application Next.js (comme les nom de domaine autorisés pour les images)</LICourse>
            <LICourse><SpanCourse>package.json</SpanCourse> : liste toutes vos dépendance (paquet node.js)</LICourse>
        </UlCourse>




        <H2Course>Nettoyer la structure des dossiers</H2Course>

        <PCourse>De base Next.js vous creer une &ldquo;template&rdquo; de base afin que vous puissiez comprendre comment fonctionne le framework. Vous pouvez donc supprimer tout ce qui ne vous sert pas dans le fichier CSS (attention à ne pas enlever les imports tailwind si vous voulez l&apos;utiliser) et dans le fichier &ldquo;page.js&rdquo;.</PCourse>


        <H2Course>Informations complémentaires</H2Course>
        <PCourse>Next.js met à votre disposition énormément d&apos;outils et il faut aussi importer certaines balises depuis Next.js.</PCourse>
        <PCourse className={"my-6"}>Quelques exemples dans Next.js :</PCourse>
        <UlCourse>
            <LICourse>les liens ne se font pas avec des balises <SpanCourse>a</SpanCourse> mais des balises <SpanCourse>Link</SpanCourse></LICourse>
            <LICourse>les images ne se font pas avec des balises <SpanCourse>img</SpanCourse> mais des balises <SpanCourse>Image</SpanCourse></LICourse>
        </UlCourse>

    </LayoutCourseCustom>
}
