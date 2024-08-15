import H1Course from "@/components/cours/h1-course";
import Link from "next/link";

export default function page() {

    return <>

        <H1Course>Protocole HTTP - Ressources utiles</H1Course>


        <Link href="https://www.postman.com/" target="_blank"><b>Postman</b> - Postman simplifie chaque étape du cycle de vie des API et rationalise la collaboration afin que vous puissiez créer des API plus rapidement.</Link>


        <Link href="https://jsonplaceholder.typicode.com/" target="_blank"><b>JsonPlaceholder</b> - Une API gratuite pour s&pos;entrainer à faire des requêtes HTTP.</Link>


        <Link href="https://www.cloudflare.com/fr-fr/learning/dns/what-is-dns/" target="_blank"><b>Cloudflare</b> - Les DNS.</Link>

    </>
}
