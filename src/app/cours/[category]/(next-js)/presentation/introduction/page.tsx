import H1Course from "@/components/cours/h1-course";
import Link from "next/link";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";


export default function Page() {

    return <>

        <H1Course>Next.js - Presentation - Introduction</H1Course>




        <PCourse><Link href="https://nextjs.org/" target="_blank"><b>Next.js</b></Link> est un framework <b>React</b> et <b>Node.js</b> open-source créé par <Link href="https://vercel.com/" target="_blank"><b>Vercel</b></Link> dont la première version est sortie le 25 octobre 2016. La version 13 sortie en 2023 a vraiment changer le monde du développement web. A l&apos;heure où je parle, la version 14 est disponible.</PCourse>

        <PCourse>Utiliser Next.js peut paraître complexe au premier abord, mais une fois que vous avez compris les concepts de base, vous verrez que c&apos;est un outil très puissant et très utile pour créer des applications web modernes et évolutives avec un code efficace, le rendant plus facile à maintenir.</PCourse>

        <PCourse>C&apos;est un framework fullstack, c&apos;est-à-dire qu&apos;il permet de gérer le front-end et le back-end d&apos;une application web de toutes tailles et de tous types.</PCourse>

        <PCourse>Il est utilisé par de nombreuses entreprises comme Netflix, Uber, TikTok, ou encore Spotify.</PCourse>

        <PCourse>Il est très apprécié pour sa simplicité d&apos;utilisation, sa rapidité de développement, sa performance, le SEO, ses fonctionnalités comme le SSR (Server Side Rendering) etc.</PCourse>



        <PCourse>Liste non exhaustive des avantages de Next.js :</PCourse>
        <UlCourse>
            <LICourse>Next.js est un framework très intéressant à apprendre et à maîtriser.</LICourse>
            <LICourse>Un seul langage et un seul serveur pour l&apos;application</LICourse>
            <LICourse>Next.js est un framework très puissant qui est très recommandé pour créer des applications web.</LICourse>
            <LICourse>Next.js est un framework très complet qui est très apprécié par les développeurs web.</LICourse>
            <LICourse>très bien documenté qui propose de nombreux tutoriels, guides, exemples, et ressources.</LICourse>
            <LICourse>très populaire et très actif, est régulièrement mis à jour.</LICourse>
            <LICourse>Next.js est un framework très performant qui est très utilisé par les entreprises.</LICourse>
            <LICourse>très prometteur, qui a un bel avenir.</LICourse>
        </UlCourse>
    </>
}
