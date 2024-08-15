import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";


export default function Page() {

    return <>

        <H1Course>Next.js - Les bases - Introduction</H1Course>


        <PCourse>Dans le chapitre précédent nous avons survolé les concepts de bases de <b>Next.js</b>.</PCourse>

        <PCourse>Il est temps de rentrer dans le vif du sujet et de voir comment créer une application <b>Next.js</b> de A à Z.</PCourse>

        <PCourse>Liste non exhaustive de ce que nous allons approfondir :</PCourse>


        <UlCourse>
            <LICourse>Les <b>Static Site Generation</b> et <b>Server Side Rendering</b></LICourse>
            <LICourse>Démystifier le terme <b>Hydratation</b></LICourse>
            <LICourse>Les <b>Params</b> et <b>SearchParams</b> d&apos;une url</LICourse>
            <LICourse>Créer une <b>route API</b></LICourse>
        </UlCourse>
    </>
}
