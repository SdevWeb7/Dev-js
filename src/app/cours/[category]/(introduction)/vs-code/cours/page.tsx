import Link from "next/link";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";



export default function Page() {

    return <LayoutCourseCustom>
        <H1Course>Prendre en main VS Code</H1Course>


        <H2Course>2.1 Installation et configuration initiale</H2Course>
        <PCourse>VS Code est compatible avec différents systèmes d&apos;exploitation tels que Windows, macOS et Linux. Pour profiter de ses puissantes fonctionnalités, vous pouvez suivre les instructions ci-dessous pour installer l&apos;éditeur de texte sur votre système d&apos;exploitation.</PCourse>


        <UlCourse>
            <LICourse>Cliquez sur <b>Download for Windows</b> après vous être rendu à l&apos;adresse :<Link href="https://code.visualstudio.com/" target="_blank">site officiel VS Code</Link></LICourse>
        </UlCourse>

        <PCourse>Une fois installé et lancé, vous pouvez configurer VS Code pour qu&apos;il s&apos;adapte à vos préférences. Voici quelques éléments à configurer :</PCourse>


        <UlCourse>
            <LICourse>Thème</LICourse>
            <LICourse>Langue</LICourse>
            <LICourse>Formatage</LICourse>
        </UlCourse>

        <H2Course>2.3 Naviguer dans l&apos;interface</H2Course>
        <PCourse>Une bonne maitrise de l&apos;interface vous permettra de travailler plus rapidement et de manière plus efficace. L&apos;explorateur de fichier par exemple, vous permet de naviguer dans votre projet, de voir les fichiers, de les ouvrir, de les créer, de les supprimer, etc.</PCourse>


        <PCourse>Dans la barre latérale, vous trouverez les icônes de vos extensions, vous pouvez aussi customiser ceci.</PCourse>

    </LayoutCourseCustom>
}
