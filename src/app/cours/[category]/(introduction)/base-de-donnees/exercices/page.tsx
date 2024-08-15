import UlCourse from "@/components/cours/ul-course";
import H2Course from "@/components/cours/h2-course";
import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import LICourse from "@/components/cours/li-course";
import Link from "next/link";

export default function Page() {

    return <>

        <H1Course>Base de données - Exercices</H1Course>


        <H2Course>Exercice 1</H2Course>

        <UlCourse>
            <LICourse>Installer WAMP. <Link href="https://wampserver.aviatechno.net/" target="_blank">Télécharger WAMP</Link> ou <Link href="https://www.clubic.com/telecharger-fiche27009-wampserver.html" target="_blank">Clubic.com</Link> </LICourse>
            <LICourse>Créer une base de donnée avec phpmyadmin</LICourse>
            <LICourse>Créer 2 table avec une relation entre elles</LICourse>
            <LICourse>Se familiariser avec les 4 types de requêtes SQL à l&apos;aide de phpmyadmin</LICourse>
        </UlCourse>

        <PCourse>N&apos;hésitez pas à vous documenter sur internet (voir ressources utiles).</PCourse>

    </>
}
