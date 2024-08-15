import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";


export default function page() {

    return <>

        <H1Course>Protocole HTTP - Pense-Bêtes</H1Course>


        <H2Course>Une requête/réponse HTTP :</H2Course>

        <UlCourse>
            <LICourse>se fait entre deux ordinateurs</LICourse>
            <LICourse>possède une <b>méthode</b> (GET par défaut)</LICourse>
            <LICourse>contient des <b>headers</b> (informations sur la requête/réponse)</LICourse>
            <LICourse>peut contenir un <b>body</b> (des données souvent au format <b>JSON</b>)</LICourse>
            <LICourse>envoi un <b>cookie</b> pouvant contenir une &ldquo;clef&rdquo; d&pos;authentification</LICourse>
        </UlCourse>

    </>
}
