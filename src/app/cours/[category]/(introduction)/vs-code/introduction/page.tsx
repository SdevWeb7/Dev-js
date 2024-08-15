import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import H1Course from "@/components/cours/h1-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";


export default function Page() {

    return <>
        <H1Course>1.1 Qu&apos;est-ce que Visual Studio Code ?</H1Course>

        <PCourse>VS Code est un éditeur de code open source développé par Microsoft.</PCourse>


        <PCourse>Contrairement à un <b>Environnement de Développement Intégré</b> (IDE) traditionnel, qui comprend un large éventail d&apos;outils dédiés au développement logiciel complet tel que le débogage avancé, un <b>éditeur de code</b> comme VS Code se concentre sur l&apos;écriture et la modification de code. Néanmoins, il est très apprécié par les développeurs web à travers le monde part sa grande variété de plugins et extensions. Bien configuré, il offre des fonctionnalités comparables à celle d&apos;un IDE.</PCourse>



        <H2Course>Quelques fonctionnalités :</H2Course>
        <UlCourse>
            <LICourse>Intégration de Git</LICourse>
            <LICourse>Support de l&apos;autocomplétion</LICourse>
            <LICourse>Support de l&apos;analyse statique</LICourse>
            <LICourse>Support de la refactorisation</LICourse>
            <LICourse>Support de la navigation dans les fichiers</LICourse>
            <LICourse>Support des extensions</LICourse>

        </UlCourse>

        <H2Course>Pourquoi utiliser Visual Studio Code ?</H2Course>
        <PCourse>Conçu pour être rapide, léger et hautement configurable, VSCode plait aux développeurs de tous niveaux. Il est également très facile à apprendre et à utiliser, et ne vous coutera rien, oui oui c&apos;est gratuit.</PCourse>
    </>
}
