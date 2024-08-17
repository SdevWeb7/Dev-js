import PCourse from "@/components/cours/p-course";
import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import Link from "next/link";
import Image from "next/image";
import imgUrlDetails from "@/../public/http/url-details.jpg";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";


export default function page() {

    return <LayoutCourseCustom>

        <H1Course>Protocole HTTP</H1Course>

        <H2Course>Client/Serveur</H2Course>
        <PCourse>Lorsqu&apos;on essaye d&apos;accéder à un lien internet (URL en anglais pour Uniform Resource Locator), notre navigateur fait une <SpanCourse>requête HTTP</SpanCourse> au serveur distant.</PCourse>

        <PCourse className={"my-4"}>Le <SpanCourse>navigateur</SpanCourse> est le <SpanCourse>client</SpanCourse>.</PCourse>

        <PCourse>Le <SpanCourse>serveur distant</SpanCourse> n&apos;est autre qu&apos;un <SpanCourse>ordinateur</SpanCourse> qui a ouvert un <SpanCourse>PORT</SpanCourse> (une porte sur les 65 535 existantes) et qui attend une <SpanCourse>requête</SpanCourse> afin de <SpanCourse>partager</SpanCourse> des données (des images, des vidéos, des fichiers, des pages web, etc).</PCourse>

        <PCourse className={"mt-4"}>Les <SpanCourse>requêtes</SpanCourse> et les <SpanCourse>réponses</SpanCourse> contiennent des <SpanCourse>headers</SpanCourse>.</PCourse>




        <H2Course>Les méthodes HTTP</H2Course>
        <PCourse>Les <SpanCourse>méthodes HTTP</SpanCourse> sont des <SpanCourse>actions</SpanCourse> que le client peut effectuer sur le serveur.</PCourse>
        <PCourse className={"mt-4 mb-2"}>Voici quelques exemples de méthodes HTTP :</PCourse>

        <UlCourse>
            <LICourse><SpanCourse>GET</SpanCourse> : récupère des données du serveur.</LICourse>

            <LICourse><SpanCourse>POST</SpanCourse> : envoie des données au serveur.</LICourse>

            <LICourse><SpanCourse>PUT</SpanCourse> : met à jour des données sur le serveur.</LICourse>

            <LICourse><SpanCourse>DELETE</SpanCourse> : supprime des données du serveur.</LICourse>

            <LICourse><SpanCourse>HEAD</SpanCourse> : récupère les en-têtes d&apos;une ressource.</LICourse>

            <LICourse><SpanCourse>OPTIONS</SpanCourse> : récupère les méthodes HTTP supportées par le serveur.</LICourse>

            <LICourse><SpanCourse>TRACE</SpanCourse> : envoie une requête de test au serveur.</LICourse>

            <LICourse><SpanCourse>CONNECT</SpanCourse> : convertit la requête en un tunnel TCP/IP.</LICourse>
        </UlCourse>

        <PCourse className={"mt-4"}>Les méthodes <SpanCourse>GET</SpanCourse>, <SpanCourse>POST</SpanCourse>, <SpanCourse>PATCH</SpanCourse> et <SpanCourse>DELETE</SpanCourse> sont les plus utilisées.</PCourse>




        <H2Course>Les codes de statut HTTP</H2Course>
        <PCourse>Les <SpanCourse>codes de statut HTTP</SpanCourse> sont des <SpanCourse>réponses</SpanCourse> que le serveur envoie au client.</PCourse>

        <PCourse className={"mt-4 mb-2"}>Voici quelques exemples de codes de statut HTTP :</PCourse>

        <UlCourse>
            <LICourse><SpanCourse>1xx</SpanCourse> : Informationnel.</LICourse>

            <LICourse><SpanCourse>2xx</SpanCourse> : Succès.</LICourse>

            <LICourse><SpanCourse>3xx</SpanCourse> : Redirection.</LICourse>

            <LICourse><SpanCourse>4xx</SpanCourse> : Erreur du client.</LICourse>

            <LICourse><SpanCourse>5xx</SpanCourse> : Erreur du serveur.</LICourse>
        </UlCourse>




        <H2Course>URL (Uniform Resource Locator)</H2Course>
        <PCourse>L&apos;<SpanCourse>URL</SpanCourse> est l&apos;adresse d&apos;une ressource sur le web.</PCourse>

        <PCourse className={"mt-4 mb-2"}>Une URL est composée de plusieurs parties :</PCourse>
        <UlCourse className={"mb-12"}>
            <LICourse><SpanCourse>Protocole</SpanCourse> : http, https, ftp, etc.</LICourse>

            <LICourse><SpanCourse>Nom de domaine</SpanCourse> : google.com, facebook.com, etc.</LICourse>

            <LICourse><SpanCourse>Port</SpanCourse> : 80 (HTTP), 443 (HTTPS), etc. (www.exemple.com:80)</LICourse>

            <LICourse><SpanCourse>Chemin</SpanCourse> : /, /home, /about, etc.</LICourse>

            <LICourse><SpanCourse>Requête</SpanCourse> : ?id=1, ?name=John, etc.</LICourse>

            <LICourse><SpanCourse>Ancre</SpanCourse> : #section1, #section2, etc.</LICourse>
        </UlCourse>

        <Link href="/http/url-details.jpg" target="_blank"><Image className={"rounded-3xl shadow-md"} src={imgUrlDetails} alt="URL détails" /></Link>




        <H2Course>Headers</H2Course>
        <PCourse>Les <SpanCourse>headers</SpanCourse> sont des <SpanCourse>informations supplémentaires</SpanCourse> qui permettent de comprendre la requête ou la réponse.</PCourse>

        <PCourse className={"mt-4 mb-2"}>Voici quelques exemples de ce que peut contenir un header :</PCourse>

        <UlCourse>
            <LICourse><SpanCourse>Accept</SpanCourse> : indique au serveur les types de médias que le client peut traiter.</LICourse>

            <LICourse><SpanCourse>Accept-Encoding</SpanCourse> : indique au serveur les types de compression que le client peut traiter.</LICourse>

            <LICourse><SpanCourse>Accept-Language</SpanCourse> : indique au serveur les langues que le client peut traiter.</LICourse>

            <LICourse><SpanCourse>Host</SpanCourse> : indique au serveur le nom de domaine du client.</LICourse>

            <LICourse><SpanCourse>User-Agent</SpanCourse> : indique au serveur le navigateur et le système d&apos;exploitation du client.</LICourse>

            <LICourse><SpanCourse>Referer</SpanCourse> : indique au serveur la page web qui a redirigé le client vers la page actuelle.</LICourse>

            <LICourse><SpanCourse>Cookie</SpanCourse> : indique au serveur les cookies stockés sur le client.</LICourse>

            <LICourse><SpanCourse>Authorization</SpanCourse> : indique au serveur les informations d&apos;authentification du client.</LICourse>

            <LICourse><SpanCourse>Cache-Control</SpanCourse> : indique au serveur comment gérer le cache du client.</LICourse>

            <LICourse><SpanCourse>Content-Type</SpanCourse> : indique au serveur le type de contenu de la requête ou de la réponse.</LICourse>
        </UlCourse>





        <H2Course>Le corps de la requête ou <b>BODY</b></H2Course>
        <PCourse>Le <SpanCourse>corps de la requête</SpanCourse> est l&apos;endroit où le client envoie des données au serveur.</PCourse>

        <PCourse className={'my-4'}>Le corps de la requête est utilisé dans les méthodes <SpanCourse>POST</SpanCourse>, <SpanCourse>PUT</SpanCourse> et <SpanCourse>PATCH</SpanCourse>.</PCourse>

        <PCourse>Le corps de la requête peut contenir des données au format <SpanCourse>JSON</SpanCourse>, <SpanCourse>XML</SpanCourse>, <SpanCourse>HTML</SpanCourse>, <SpanCourse>texte</SpanCourse>, etc.</PCourse>
        <PCourse className={"mt-4"}>Le <SpanCourse>corps de la réponse</SpanCourse> ou <SpanCourse>BODY</SpanCourse> est l&apos;endroit où le serveur envoie des données au client.</PCourse>




        <H2Course>Les cookies</H2Course>

        <PCourse>Les <SpanCourse>cookies</SpanCourse> sont des <SpanCourse>petits fichiers</SpanCourse> stockés sur le <SpanCourse>client</SpanCourse> qui permettent de <SpanCourse>garder des informations</SpanCourse> sur le client. Pratique notamment pour l&apos;authentification.</PCourse>

        <PCourse className={"mt-4 mb-2"}>Les cookies :</PCourse>
        <UlCourse>
            <LICourse>sont utilisés pour <SpanCourse>garder une session</SpanCourse> ou pour <SpanCourse>garder des informations</SpanCourse> sur le client.</LICourse>

            <LICourse>sont envoyés dans les <SpanCourse>headers</SpanCourse> de la requête et de la réponse.</LICourse>

            <LICourse>sont <SpanCourse>stockés sur le client</SpanCourse> et <SpanCourse>envoyés au serveur à chaque requête</SpanCourse>.</LICourse>

            <LICourse>sont <SpanCourse>limités</SpanCourse> en taille et en nombre.</LICourse>

            <LICourse>peuvent être <SpanCourse>sécurisés</SpanCourse> en utilisant le <SpanCourse>flag Secure</SpanCourse> et <SpanCourse>HttpOnly</SpanCourse>.</LICourse>

            <LICourse>peuvent être <SpanCourse>chiffrés</SpanCourse> pour <SpanCourse>garder des informations</SpanCourse> sur le client.</LICourse>

            <LICourse>peuvent être <SpanCourse>signés</SpanCourse> pour <SpanCourse>garder des informations</SpanCourse> sur le client.</LICourse>

            <LICourse>peuvent être <SpanCourse>limités</SpanCourse> dans le temps.</LICourse>
        </UlCourse>




        <H2Course>DNS (Domain Name System)</H2Course>

        <PCourse>Le <SpanCourse>DNS</SpanCourse> est un <SpanCourse>service</SpanCourse> qui permet de <SpanCourse>traduire</SpanCourse> un <SpanCourse>nom de domaine</SpanCourse> en une <SpanCourse>adresse IP</SpanCourse>.</PCourse>
        <PCourse className={"mt-4"}>Il est plus facile pour un humain de retenir une adresse web (URL) qu&apos;une adresse IP.</PCourse>

        </LayoutCourseCustom>
}
