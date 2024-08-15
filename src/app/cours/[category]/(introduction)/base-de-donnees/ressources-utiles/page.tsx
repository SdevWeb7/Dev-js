import Link from "next/link";
import H1Course from "@/components/cours/h1-course";

export default function Page() {

    return <>

        <H1Course>Next.js - Presentation - Ressources utiles</H1Course>


        <Link href="https://sql.sh/" target="_blank"><b>SQL.sh</b> - Le SQL (Structured Query Language) est un langage permettant de communiquer avec une base de données. SQL.sh permet d&apos;apprendre le langage SQL.</Link>


        <Link href="https://wampserver.aviatechno.net/" target="_blank"><b>WAMP</b> - Site internet pour télécharger WAMP.</Link>
    </>
}
