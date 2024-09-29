import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import LinkCustom from "@/components/cours/link-custom";


export default function Page() {

    return <LayoutCourseCustom>

        <H1Course>Next.js</H1Course>




        <PCourse><LinkCustom href="https://nextjs.org/"><SpanCourse>Next.js</SpanCourse></LinkCustom> est un framework <SpanCourse>React</SpanCourse> et <SpanCourse>Node.js</SpanCourse> open-source créé par <LinkCustom href="https://vercel.com/"><SpanCourse>Vercel</SpanCourse></LinkCustom> dont la première version est sortie le 25 octobre 2016. </PCourse>

        <PCourse className={'simple-my'}>La version 13 sortie en 2023 a vraiment changer le monde du développement web. A l&apos;heure actuelle, la version 14 est disponible.</PCourse>

        <PCourse>Utiliser Next.js peut paraître complexe au premier abord, mais une fois que vous avez compris les concepts de base, vous verrez que c&apos;est un outil très puissant et très utile pour créer des applications web modernes et évolutives avec un code efficace, le rendant plus facile à maintenir.</PCourse>

        <PCourse className={'simple-my'}>C&apos;est un framework fullstack, c&apos;est-à-dire qu&apos;il permet de gérer le front-end et le back-end d&apos;une application web de toutes tailles et de tous types.</PCourse>

        <PCourse>Il est utilisé par de nombreuses entreprises comme Netflix, Uber, TikTok, ou encore Spotify.</PCourse>

        <PCourse className={'simple-my'}>Il est très apprécié pour sa <SpanCourse>simplicité d&apos;utilisation</SpanCourse>, sa <SpanCourse>rapidité de développement</SpanCourse>, sa <SpanCourse>performance</SpanCourse>, le <SpanCourse>SEO</SpanCourse>, ses fonctionnalités comme le <SpanCourse>SSR</SpanCourse> (Server Side Rendering) etc.</PCourse>



        <PCourse className={"mb-3"}>Liste non exhaustive des avantages de Next.js :</PCourse>
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
    </LayoutCourseCustom>
}
