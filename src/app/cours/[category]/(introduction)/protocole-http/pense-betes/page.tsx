import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import SpanCourse from "@/components/cours/span-course";


export default function page() {

    return <>

        <H1Course>Protocole HTTP - Pense-Bêtes</H1Course>


        <H2Course>Une requête/réponse HTTP :</H2Course>

        <UlCourse>
            <LICourse>se fait entre deux ordinateurs</LICourse>
            <LICourse>possède une <SpanCourse>méthode</SpanCourse> (GET par défaut)</LICourse>
            <LICourse>contient des <SpanCourse>headers</SpanCourse> (informations sur la requête/réponse)</LICourse>
            <LICourse>peut contenir un <SpanCourse>body</SpanCourse> (des données souvent au format <SpanCourse>JSON</SpanCourse>)</LICourse>
            <LICourse>envoi un <SpanCourse>cookie</SpanCourse> pouvant contenir une clé d&apos;authentification</LICourse>
        </UlCourse>

    </>
}
