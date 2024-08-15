import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";

export default function Page() {

    return <>
        <H1Course>Git</H1Course>

        <PCourse>1) Pour s&apos;habituer aux manipulations de Git :</PCourse>


        <UlCourse>
            <LICourse>Créer un dépôt localement</LICourse>
            <LICourse>Créer un dépôt sur une plateforme de gestion (Github par exemple)</LICourse>
            <LICourse>Les lier</LICourse>
            <LICourse>Faire des modifications et push</LICourse>
        </UlCourse>


        <PCourse className={"mt-16"}>2) Pour apprendre à gérer les conflits, avec un ou plusieurs collègues, essayez de travailler sur le meme dépôt distant en meme temps. Vous pouvez ensuite vous entrainer au mécanisme des <b>pull requests</b></PCourse>

    </>
}
