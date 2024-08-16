import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import SpanCourse from "@/components/cours/span-course";


export default function Page() {

    return <>

        <H1Course>Protocole HTTP</H1Course>

        <PCourse>Le protocole HTTP (HyperText Transfer Protocol) est un protocole de communication client-serveur.</PCourse>

        <PCourse className={"my-4"}>Il permet de transférer des données sur le web basé sur une architecture client-serveur et sur le protocole TCP/IP.</PCourse>

        <PCourse>Le client envoie une requête au serveur et le serveur renvoie une réponse au client.</PCourse>


        <PCourse className={"mt-4 mb-2"}><SpanCourse>Le protocol HTTP est un protocole :</SpanCourse></PCourse>

        <UlCourse>
            <LICourse><SpanCourse>Texte</SpanCourse> : les requêtes et les réponses sont des messages textuels. Les messages HTTP sont composés d&apos;une ligne de requête ou de statut, d&apos;en-têtes et d&apos;un corps.</LICourse>

            <LICourse className={"my-2"}><SpanCourse>Sans état</SpanCourse> (Stateless) : Cela signifie que le serveur ne conserve pas d&apos;informations sur les requêtes précédentes du client. Chaque requête est traitée indépendamment des autres.</LICourse>

            <LICourse><SpanCourse>Extensible</SpanCourse> : Il est possible d&apos;ajouter de nouveaux en-têtes et méthodes HTTP.</LICourse>

            <LICourse className={'mt-2'}>De la <SpanCourse>couche application du modèle OSI</SpanCourse>. Il est utilisé pour transférer des ressources (texte, images, vidéos, etc.) entre un client et un serveur.</LICourse>
        </UlCourse>
    </>
}
