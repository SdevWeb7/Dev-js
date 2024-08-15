import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";


export default function Page() {

    return <>

        <H1Course>Base de données - Introduction</H1Course>

        <PCourse>Une base de données est un ensemble de données organisées et structurées. Ces données sont stockées dans un système de gestion de base de données (SGBD) qui permet de les manipuler.</PCourse>

        <PCourse>Il existe plusieurs types de bases de données, en développement informatique, les plus courantes sont les <b>bases de données relationnelles</b>.</PCourse>

        <PCourse className={'mt-12'}>Cependant, il existe d&apos;autres types de bases de données, comme les bases de données NoSQL, les bases de données orientées graphe, les bases de données en mémoire, les bases de données distribuées, les bases de données temps réel, les bases de données multi-modèles, les bases de données géospatiales, etc.</PCourse>

        <PCourse className={'mt-12'}>Ce cours a pour but de comprendre la structure, le stockage et la récupération de données depuis une base de donnée dans le développement web.</PCourse>

    </>
}
