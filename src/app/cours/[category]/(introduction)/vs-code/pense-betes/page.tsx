import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import H2Course from "@/components/cours/h2-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";

export default function page() {

    return <LayoutCourseCustom>
        <H1Course>VS-Code - Cheat Sheet</H1Course>

        <PCourse>Maitriser sont IDE est un art. Commencez par quelques raccourcis clés et intégrez en des nouveaux progressivement. La liste suivante représente les commandes par défaults, il en existe beaucoup d&apos;autres, n&apos;hésitez pas à changer l&apos;attribution des raccourcis en fonction de vos préférences.</PCourse>


        <H2Course>Navigation</H2Course>
        <UlCourse>
            <LICourse>Ctrl + P : Accéder à un fichier par son nom</LICourse>
            <LICourse>Ctrl + Shift + P : Ouvre la palette de commandes</LICourse>
            <LICourse>Ctrl + O : Ouvre un fichier</LICourse>
            <LICourse>Ctrl + K + O : Ouvre un dossier</LICourse>
            <LICourse>Ctrl + G : Aller à une ligne spécifique de votre fichier</LICourse>
        </UlCourse>



        <H2Course>Recherche</H2Course>
        <UlCourse>
            <LICourse>Ctrl + F : Rechercher dans le fichier</LICourse>
            <LICourse>Ctrl + Shift + F : Rechercher dans tous les fichiers</LICourse>
            <LICourse>Ctrl + H : Remplacer dans le fichier</LICourse>
            <LICourse>Ctrl + Shift + H : Remplacer dans tous les fichiers</LICourse>
        </UlCourse>


        <H2Course>Edition</H2Course>
        <UlCourse>
            <LICourse>Ctrl + Space : afficher les suggestions de code</LICourse>
            <LICourse>Ctrl + flèche haut ou bas : aller à la ligne précédente ou suivante</LICourse>
            <LICourse>Ctrl + L : sélectionner la ligne</LICourse>
            <LICourse>Ctrl + / : commenter le code</LICourse>
        </UlCourse>



        <H2Course>Terminal et console</H2Course>
        <UlCourse>
            <LICourse>Ctrl + J : ouvrir le terminal et la console.</LICourse>
            <LICourse>Ctrl + C : terminer une tâche en cours.</LICourse>
        </UlCourse>

    </LayoutCourseCustom>
}
