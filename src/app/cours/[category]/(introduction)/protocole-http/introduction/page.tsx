import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";


export default function Page() {

    return <>

        <H1Course>Protocole HTTP - Cours</H1Course>

        <PCourse>Le protocole HTTP (HyperText Transfer Protocol) est un protocole de communication client-serveur.</PCourse>

        <PCourse>Il permet de transférer des données sur le web basé sur une architecture client-serveur et sur le protocole TCP/IP.</PCourse>

        <PCourse>Le client envoie une requête au serveur et le serveur renvoie une réponse au client.</PCourse>


        <PCourse><b>Le protocol HTTP est un protocole :</b></PCourse>

        <UlCourse>
            <LICourse><b>Texte</b> : les requêtes et les réponses sont des messages textuels. Les messages HTTP sont composés d&apos;une ligne de requête ou de statut, d&apos;en-têtes et d&apos;un corps.</LICourse>

            <LICourse><b>Sans état</b> (Stateless) : Cela signifie que le serveur ne conserve pas d&apos;informations sur les requêtes précédentes du client. Chaque requête est traitée indépendamment des autres.</LICourse>

            <LICourse><b>Extensible</b> : Il est possible d&apos;ajouter de nouveaux en-têtes et méthodes HTTP.</LICourse>

            <LICourse>De la <b>couche application du modèle OSI</b>. Il est utilisé pour transférer des ressources (texte, images, vidéos, etc.) entre un client et un serveur.</LICourse>
        </UlCourse>
    </>
}
