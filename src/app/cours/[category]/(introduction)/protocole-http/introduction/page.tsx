import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";


export default function Page() {

    return <LayoutCourseCustom>

        <H1Course>Protocole HTTP</H1Course>

        <PCourse>Le protocole HTTP (HyperText Transfer Protocol) est un protocole de communication <SpanCourse>client-serveur</SpanCourse>.</PCourse>

        <PCourse className={"simple-my"}>Il permet de transférer des données sur le web basé sur une architecture client-serveur et sur le <SpanCourse>protocole TCP/IP</SpanCourse>.</PCourse>

        <PCourse>Le client envoie une <SpanCourse>requête</SpanCourse> au serveur et le serveur renvoie une <SpanCourse>réponse</SpanCourse> au client.</PCourse>



        <PCourse className={"simple-mt mb-3"}><SpanCourse>Le protocol HTTP est un protocole :</SpanCourse></PCourse>
        <UlCourse>
            <LICourse><SpanCourse>Texte</SpanCourse> : les requêtes et les réponses sont des messages textuels. Les messages HTTP sont composés d&apos;une ligne de requête ou de statut, d&apos;en-têtes et d&apos;un corps.</LICourse>

            <LICourse><SpanCourse>Sans état</SpanCourse> (Stateless) : Cela signifie que le serveur ne conserve pas d&apos;informations sur les requêtes précédentes du client. Chaque requête est traitée indépendamment des autres.</LICourse>

            <LICourse><SpanCourse>Extensible</SpanCourse> : Il est possible d&apos;ajouter de nouveaux en-têtes et méthodes HTTP.</LICourse>

            <LICourse>De la <SpanCourse>couche application du modèle OSI</SpanCourse>. Il est utilisé pour transférer des ressources (texte, images, vidéos, etc.) entre un client et un serveur.</LICourse>
        </UlCourse>
    </LayoutCourseCustom>
}
