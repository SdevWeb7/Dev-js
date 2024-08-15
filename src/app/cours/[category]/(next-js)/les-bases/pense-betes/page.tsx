import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";

export default function page() {

    return <>

        <H1Course>Next.js - Les Bases - Pense-Bêtes</H1Course>



        <PCourse>Les <b>Client Components</b> sont d&apos;abord rendus une première fois <b>Coté Serveur</b>.</PCourse>

        <PCourse>Penser à la propriété <b>CHILDREN</b> afin de pouvoir garder un maximum de <b>Serveur Components</b>.</PCourse>



        <H2Course>Caractéristiques des Server Components</H2Course>
        <UlCourse>
            <LICourse>tout les composants sont <b>Server Component</b> par défaut</LICourse>
            <LICourse>ils sont <b>ASYNCHRONE</b></LICourse>
            <LICourse>ne peuvent pas avoir de <b>state</b></LICourse>
            <LICourse>le code est éxécuté <b>coté serveur</b> (Node.js) pour renvoyer du html au client</LICourse>
            <LICourse>possibilité de contacter une base de données</LICourse>
            <LICourse>la variable <b>window</b> est undefined</LICourse>
        </UlCourse>



        <H2Course>Caractéristiques des Clients Components</H2Course>
        <UlCourse>
            <LICourse>ils sont <b>SYNCHRONE</b></LICourse>
            <LICourse>peuvent avoir un/des <b>state(s)</b></LICourse>
            <LICourse>les données sont chargées et éxécutés <b>côté client</b>(navigateur)</LICourse>
            <LICourse>ne peuvent pas contacter de base de données à moins de <b>fetch</b></LICourse>
            <LICourse>la variable <b>window</b> est définie</LICourse>
        </UlCourse>


    </>
}
