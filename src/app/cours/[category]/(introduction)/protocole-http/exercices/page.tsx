import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import Link from "next/link";

export default function page() {

    return <>

        <H1Course>Protocole HTTP - Exercices</H1Course>


        <H2Course>Exercice 1</H2Course>

        <PCourse>Installez <Link href="https://www.postman.com/" target="_blank"><b>Postman</b></Link></PCourse>

        <PCourse>Entrainez vous aux différentes <b>méthodes de requête HTTP</b> grâce à l&apos;API gratuite <Link href="https://jsonplaceholder.typicode.com/" target="_blank"><b>JsonPlaceholder</b></Link></PCourse>

        <PCourse>Familiarisez vous avec le format <b>JSON</b> (JavaScript Object Notation) car nous l&apos;utiliserons très souvent plus tard.</PCourse>
    </>
}
