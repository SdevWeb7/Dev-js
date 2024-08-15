import PCourse from "@/components/cours/p-course";
import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import UlCourse from "@/components/cours/ul-course";
import Link from "next/link";
import H3Course from "@/components/cours/h3-course";
import LICourse from "@/components/cours/li-course";
import Image from "next/image";
import imgNextStarting from "@/public/next-js/next-starting.jpg";


export default function page() {

    return <>

        <H1Course>Next.js - Presentation - Cours</H1Course>



        <PCourse>Next.js est un framework très complet qui propose de nombreuses fonctionnalités. Nous ne pouvons donc pas voir toutes les fonctionnalités dans le premier cours. Nous commencerons par le fonctionnement de base pour approfondir par la suite.</PCourse>



        <H2Course>Les Servers/Clients components</H2Course>
        <PCourse>Comme vu dans le cours précédent <b>Javascript / React</b> :</PCourse>

        <UlCourse>
            <LICourse>nous ne pouvions pas contacter de base de données donc les données étaient non persistantes (à moins d&apos;utiliser le LocalStorage)</LICourse>
            <LICourse>nous envoyions un gros bundle javascript et le code était éxécuté coté client (dans le navigateur)</LICourse>
            <LICourse>nous devions donc créer une API séparée (serveur) ou un service tiers afin de persister des données</LICourse>
        </UlCourse>

        <PCourse>Next.js a révolutionné une première fois le monde du développement web en introduisant les <b>Server Components</b> et les <b>Client Components</b> (qui est en train d&apos;être intégré nativement dans <b>React.js</b>).</PCourse>
        <PCourse>Je dis première fois, car nous verrons par la suite les <b>Servers Actions</b> qui vont révolutionner une seconde fois le monde du développement web.</PCourse>

        <PCourse>Les <b>Server Components</b> sont des composants qui sont éxécutés <b>côté serveur</b> (<b>Node.js)</b> et les <b>Client Components</b> sont des composants qui sont éxécutés <b>côté client</b> (<b>navigateur</b>).</PCourse>

        <PCourse>Les avantages sont nombreux, vous le verrez au fer et à mesure, mais voici quelques exemples :</PCourse>
        <UlCourse>
            <LICourse>le javascript envoyé au client est beaucoup moins lours, donc bon pour les performances et la sécurité</LICourse>
            <LICourse>les données sont persistantes, donc plus besoin de créer une API séparée</LICourse>
            <LICourse>les données sont chargées côté serveur, donc le temps de chargement est plus rapide ainsi que le SEO</LICourse>
        </UlCourse>


        <H3Course>Caractéristiques des Server Components</H3Course>
        <UlCourse>
            <LICourse>tout les composants sont <b>Server Component</b> par défaut</LICourse>
            <LICourse>ils sont <b>ASYNCHRONE</b></LICourse>
            <LICourse>ne peuvent pas avoir de <b>state</b></LICourse>
            <LICourse>le code est éxécuté <b>coté serveur</b> (Node.js) pour renvoyer du html au client</LICourse>
            <LICourse>possibilité de contacter une base de données</LICourse>
            <LICourse>la variable <b>window</b> est undefined</LICourse>
        </UlCourse>



        <H3Course>Caractéristiques des Clients Components</H3Course>
        <UlCourse>
            <LICourse>ils sont <b>SYNCHRONE</b></LICourse>
            <LICourse>peuvent avoir un/des <b>state(s)</b></LICourse>
            <LICourse>les données sont chargées et éxécutés <b>côté client</b>(navigateur)</LICourse>
            <LICourse>ne peuvent pas contacter de base de données à moins de <b>fetch</b></LICourse>
            <LICourse>la variable <b>window</b> est définie</LICourse>
        </UlCourse>



        <H3Course>Hiérarchie des composants dans Next.js</H3Course>
        <PCourse>Première chose importante tout est par défaut <b>Server Component</b>.</PCourse>
        <PCourse>Pour rendre un composant <b>Client Component</b> il suffit d&apos;ajouter <b>&ldquo;use client&rdquo;;</b> tout en haut d&apos;un composant (c&apos;est à ce moment qu&apos;on commence normalement à comprendre la puissance de Next.js).</PCourse>
        <PCourse>Tout les composants <b>ENFANTS</b> d&apos;un <b>Client Component</b> est par défaut un <b>Client Component</b>.</PCourse>
        <PCourse>Il est possible d&apos;avoir un <b>Server Component</b> <b>ENFANT</b> d&apos;un <b>Client Component</b> en le passant par la <b>props children</b> cela est appelé la composition et peut-être très utile afin d&apos;éviter de rendre toute notre application <b>Client Component</b> si par exemple, nous devons l&apos;entourer d&apos;un <b>Provider</b>.</PCourse>
        <PCourse>la directive &ldquo;use server&rdquo; est utilisée seulement pour les <b>Server Actions</b> que nous verrons très vite.</PCourse>






        <H2Course>Routing</H2Course>
        <PCourse>Une autre fonctionnalité très pratique de Next.js est la gestion simple et efficace du routing en fonction de la structure des dossiers.</PCourse>
        <PCourse>Avantages :</PCourse>
        <ul>
            <li>Next.js facilite la gestion des <b>Params</b> et <b>SearchParams</b> de l&apos;URL ainsi que d&apos;autres fonctionnalités</li>
            <li>Moins de fichiers ce qui diminue la possibilité d&apos;erreurs</li>
            <li>le code est plus lisible et plus facile à maintenir</li>
            <li>la structure des dossiers reflète les chemins (routes) donc nous pouvons rapidement avoir une vue d&apos;ensemble de l&apos;application</li>
        </ul>





        <H2Course>Créer une application</H2Course>
        <PCourse>Pour créer une application Next.js vous met à disposition une commande très pratique <b>npx create-next-app@latest</b> dans votre terminal, Next.js vous posera quelques questions.</PCourse>

        <Link href="/next-js/next-starting.jpg" target="_blank"><Image src={imgNextStarting} alt="next-starting" /></Link>

        <PCourse>Next.js vous propose :</PCourse>
        <UlCourse>
            <LICourse>De choisir le nom de votre projet (doit être en minuscule sans caractères spéciaux)</LICourse>
            <LICourse>d&apos;utiliser <b>Typescript</b> ou non mais il est fortement recommandé de l&apos;utiliser</LICourse>
            <LICourse>d&apos;utiliser <b>ESLint</b> ou non mais il est fortement recommandé de l&apos;utiliser</LICourse>
            <LICourse>d&apos;utiliser <b>TailwindCSS</b> (conseillé aussi)</LICourse>
            <LICourse>d&apos;utiliser ou non le <b>src</b> directory (j&apos;utilise le dossier src)</LICourse>
            <LICourse>d&apos;utiliser ou non <b>APP Router</b> mais comme tout le reste, cela est très pratique</LICourse>
            <LICourse>et pour finir un <b>alias</b> qui va vous permet d&apos;importer vos fichiers beaucoup plus simplement : &ldquo;@/&rdquo; correspondra soit à la <b>racine du projet</b>, soit au dossier <b>src</b> en fonction de votre choix précédent.</LICourse>
        </UlCourse>



        <H2Course>Structure des dossiers</H2Course>
        <PCourse>Après avoir répondu à toutes les questions Next.js créer un nouveau projet.</PCourse>
        <PCourse>Il faudra ensuite ouvrir le dossier dans votre éditeur de code préféré et taper <b>npm install</b> dans le terminal.</PCourse>
        <PCourse>Ensuite, en fonction du choix ou non d&apos;utiliser le dossier src, vous verrez une ou l&apos;autre structure de dossier comme celle-ci :</PCourse>


        <H3Course><b>Avec</b> dossier &ldquo;src&rdquo; (ma préférence)</H3Course>
        <Link href="/next-js/exemple-src.png" target="_blank"><img src="/next-js/exemple-src.png" alt="next-structure-folder" /></Link>


        <H3Course><b>Sans</b> dossier &ldquo;src&rdquo;</H3Course>
        <Link href="/next-js/exemple-src.png" target="_blank"><img src="/next-js/exemple-src.png" alt="next-structure-folder" /></Link>



        <H3Course>Explication des fichiers &ldquo;spéciaux&rdquo;</H3Course>
        <UlCourse>
            <LICourse><b>layout.tsx</b> : ce fichier à la racine du dossier app englobe toutes vos autres pages. Vous pouvez en avoir un dans chaque dossier de page.</LICourse>
            <LICourse><b>page.tsx</b> : c&apos;est ce fichier et non son dossier qui créer la route (doit forcément s&apos;appeler page et retourner du JSX)</LICourse>
            <LICourse><b>route.tsx</b> : appeler un fichier route.ts en fait une route API (nous verrons ca le moment venu)</LICourse>
            <LICourse><b>loading.tsx</b> : permet de creer un loader personnalisé par page</LICourse>
            <LICourse><b>not-found.tsx</b> : permet de créer une page 404 personnalisée</LICourse>
            <LICourse><b>error.tsx</b> : permet d&apos;englober la page d&apos;un <b>Error Boundary</b> afin de gérer les potentielles erreurs</LICourse>
            <LICourse><b>middleware.tsx</b> : à mettre non pas dans le dossier <b>app</b> mais dans le dossier <b>src</b> ou à la racine de l&apos;application. Il intercepte les requêtes (comme un péage). Très pratique pour l&apos;authentification par exemple</LICourse>
            <LICourse><b>components</b> : c&apos;est ici que vous allez mettre vos composants réutilisables</LICourse>
            <LICourse><b>lib</b> : c&apos;est ici que vous allez mettre vos fonctions utilitaires</LICourse>
            <LICourse><b>public</b> : c&apos;est ici que vous allez mettre vos fichiers statiques (images, vidéos, etc.)</LICourse>
            <LICourse><b>.env</b> : c&apos;est dans de fichier que les informations sensibles seront stockées (exemple des clefs)</LICourse>
            <LICourse><b>tailwind.config.js</b> : c&apos;est ici que vous allez configurer TailwindCSS</LICourse>
            <LICourse><b>next.config.js</b> : c&apos;est ici que vous allez configurer votre application Next.js (comme les nom de domaine autorisés pour les images)</LICourse>
            <LICourse><b>package.json</b> : liste toutes vos dépendance (paquet node.js)</LICourse>
        </UlCourse>




        <H2Course>Nettoyer la structure des dossiers</H2Course>

        <PCourse>De base Next.js vous creer une &ldquo;template&rdquo; de base afin que vous puissiez comprendre comment fonctionne le framework. Vous pouvez donc supprimer tout ce qui ne vous sert pas dans le fichier CSS (attention à ne pas enlever les imports tailwind si vous voulez l&apos;utiliser) et dans le fichier &ldquo;page.js&rdquo;.</PCourse>
        <PCourse>Fin du premier cours, je vous propose de faire les exercices afin de vous familiariser avec Next.js avant de passer aux cours suivants.</PCourse>




        <H2Course>Informations complémentaires</H2Course>
        <PCourse>Next.js met à votre disposition énormément d&apos;outils et il faut aussi importer certaines balises depuis Next.js.</PCourse>
        <PCourse>Quelques exemples dans Next.js :</PCourse>
        <PCourse>les liens ne se font pas avec des balises <b>a</b> mais des balises <b>Link</b></PCourse>
        <PCourse>les images ne se font pas avec des balises <b>img</b> mais des balises <b>Image</b></PCourse>

    </>
}
