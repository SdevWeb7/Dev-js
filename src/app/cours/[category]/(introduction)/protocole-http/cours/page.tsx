import PCourse from "@/components/cours/p-course";
import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import Link from "next/link";
import Image from "next/image";
import imgUrlDetails from "@/../public/http/url-details.jpg";


export default function page() {

    return <>

        <H1Course>Protocole HTTP - Cours</H1Course>

        <H2Course>Client/Serveur</H2Course>
        <PCourse>Lorsqu&apos;on essaye d&apos;accéder à un lien internet (URL en anglais pour Uniform Resource Locator), notre navigateur fait une <b>requête HTTP</b> au serveur distant.</PCourse>

        <PCourse>Le navigateur est le client.</PCourse>

        <PCourse>Le <b>serveur distant</b> n&apos;est autre qu&apos;un <b>ordinateur</b> qui a ouvert un <b>PORT</b> (une porte sur les 65 535 existantes) et qui attend une <b>requête</b> afin de <b>partager</b> des données (des images, des vidéos, des fichiers, des pages web, etc).</PCourse>

        <PCourse>Les <b>requêtes</b> et les <b>réponses</b> contiennent des <b>headers</b>.</PCourse>


        <H2Course>Les méthodes HTTP</H2Course>
        <PCourse>Les <b>méthodes HTTP</b> sont des <b>actions</b> que le client peut effectuer sur le serveur.</PCourse>

        <PCourse>Voici quelques exemples de méthodes HTTP :</PCourse>

        <UlCourse>
            <LICourse><b>GET</b> : récupère des données du serveur.</LICourse>

            <LICourse><b>POST</b> : envoie des données au serveur.</LICourse>

            <LICourse><b>PUT</b> : met à jour des données sur le serveur.</LICourse>

            <LICourse><b>DELETE</b> : supprime des données du serveur.</LICourse>

            <LICourse><b>HEAD</b> : récupère les en-têtes d&apos;une ressource.</LICourse>

            <LICourse><b>OPTIONS</b> : récupère les méthodes HTTP supportées par le serveur.</LICourse>

            <LICourse><b>TRACE</b> : envoie une requête de test au serveur.</LICourse>

            <LICourse><b>CONNECT</b> : convertit la requête en un tunnel TCP/IP.</LICourse>
        </UlCourse>

        <PCourse>Les méthodes <b>GET</b>, <b>POST</b>, <b>PATCH</b> et <b>DELETE</b> sont les plus utilisées.</PCourse>


        <H2Course>Les codes de statut HTTP</H2Course>
        <PCourse>Les <b>codes de statut HTTP</b> sont des <b>réponses</b> que le serveur envoie au client.</PCourse>

        <PCourse>Voici quelques exemples de codes de statut HTTP :</PCourse>

        <UlCourse>
            <LICourse><b>1xx</b> : Informationnel.</LICourse>

            <LICourse><b>2xx</b> : Succès.</LICourse>

            <LICourse><b>3xx</b> : Redirection.</LICourse>

            <LICourse><b>4xx</b> : Erreur du client.</LICourse>

            <LICourse><b>5xx</b> : Erreur du serveur.</LICourse>
        </UlCourse>

        <H2Course>URL (Uniform Resource Locator)</H2Course>

        <PCourse>L&apos;<b>URL</b> est l&apos;adresse d&apos;une ressource sur le web.</PCourse>

        <PCourse>Une URL est composée de plusieurs parties :</PCourse>

        <UlCourse>
            <LICourse><b>Protocole</b> : http, https, ftp, etc.</LICourse>

            <LICourse><b>Nom de domaine</b> : google.com, facebook.com, etc.</LICourse>

            <LICourse><b>Port</b> : 80 (HTTP), 443 (HTTPS), etc. (www.exemple.com:80)</LICourse>

            <LICourse><b>Chemin</b> : /, /home, /about, etc.</LICourse>

            <LICourse><b>Requête</b> : ?id=1, ?name=John, etc.</LICourse>

            <LICourse><b>Ancre</b> : #section1, #section2, etc.</LICourse>
        </UlCourse>

        <Link href="/http/url-details.jpg" target="_blank"><Image src={imgUrlDetails} alt="URL détails" /></Link>

        <H2Course>Headers</H2Course>
        <PCourse>Les <b>headers</b> sont des <b>informations supplémentaires</b> qui permettent de <b>comprendre</b> la requête ou la réponse.</PCourse>

        <PCourse>Voici quelques exemples de ce que peut contenir un header :</PCourse>

        <UlCourse>
            <LICourse><b>Accept</b> : indique au serveur les types de médias que le client peut traiter.</LICourse>

            <LICourse><b>Accept-Encoding</b> : indique au serveur les types de compression que le client peut traiter.</LICourse>

            <LICourse><b>Accept-Language</b> : indique au serveur les langues que le client peut traiter.</LICourse>

            <LICourse><b>Host</b> : indique au serveur le nom de domaine du client.</LICourse>

            <LICourse><b>User-Agent</b> : indique au serveur le navigateur et le système d&apos;exploitation du client.</LICourse>

            <LICourse><b>Referer</b> : indique au serveur la page web qui a redirigé le client vers la page actuelle.</LICourse>

            <LICourse><b>Cookie</b> : indique au serveur les cookies stockés sur le client.</LICourse>

            <LICourse><b>Authorization</b> : indique au serveur les informations d&apos;authentification du client.</LICourse>

            <LICourse><b>Cache-Control</b> : indique au serveur comment gérer le cache du client.</LICourse>

            <LICourse><b>Content-Type</b> : indique au serveur le type de contenu de la requête ou de la réponse.</LICourse>
        </UlCourse>



        <H2Course>Le corps de la requête ou <b>BODY</b></H2Course>
        <PCourse>Le <b>corps de la requête</b> est l&apos;endroit où le client envoie des données au serveur.</PCourse>

        <PCourse>Le corps de la requête est utilisé dans les méthodes <b>POST</b>, <b>PUT</b> et <b>PATCH</b>.</PCourse>

        <PCourse>Le corps de la requête peut contenir des données au format <b>JSON</b>, <b>XML</b>, <b>HTML</b>, <b>texte</b>, etc.</PCourse>


        <h2>Le corps de la réponse ou <b>BODY</b></h2>
        <PCourse>Le <b>corps de la réponse</b> est l&apos;endroit où le serveur envoie des données au client.</PCourse>


        <H2Course>Les cookies</H2Course>

        <PCourse>Les <b>cookies</b> sont des <b>petits fichiers</b> stockés sur le <b>client</b> qui permettent de <b>garder des informations</b> sur le client.</PCourse>

        <PCourse>Les cookies :</PCourse>

        <UlCourse>

            <LICourse>sont utilisés pour <b>garder une session</b> ou pour <b>garder des informations</b> sur le client.</LICourse>

            <LICourse>sont envoyés dans les <b>headers</b> de la requête et de la réponse.</LICourse>

            <LICourse>sont stockés sur le client et envoyés au serveur à chaque requête.</LICourse>

            <LICourse>sont <b>limités</b> en taille et en nombre.</LICourse>

            <LICourse>peuvent être <b>sécurisés</b> en utilisant le <b>flag Secure</b> et <b>HttpOnly</b>.</LICourse>

            <LICourse>peuvent être <b>chiffrés</b> pour <b>garder des informations</b> sur le client.</LICourse>

            <LICourse>peuvent être <b>signés</b> pour <b>garder des informations</b> sur le client.</LICourse>

            <LICourse>peuvent être <b>limités</b> dans le temps.</LICourse>
        </UlCourse>



        <H2Course>DNS (Domain Name System)</H2Course>

        <PCourse>Le <b>DNS</b> est un <b>service</b> qui permet de <b>traduire</b> un <b>nom de domaine</b> en une <b>adresse IP</b>.</PCourse>
        <PCourse>Il est plus facile pour un humain de retenir une adresse web (URL) qu&apos;une adresse IP.</PCourse>

        </>
}
