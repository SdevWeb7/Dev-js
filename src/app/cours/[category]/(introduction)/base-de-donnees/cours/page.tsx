import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import H3Course from "@/components/cours/h3-course";
import Link from "next/link";
import Image from "next/image";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import CodeCourse from "@/components/cours/code-course";
import imgExempleDatabase from "@/../public/bdd/exemple-database.jpg";
import imgMCD from "@/../public/bdd/MCD.jpg";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import LinkCustom from "@/components/cours/link-custom";


export default function Page() {

    return <LayoutCourseCustom>

        <H1Course>Base de données</H1Course>


        <H2Course>SGBD (Système de Gestion Base de Données)</H2Course>
        <PCourse>Un <SpanCourse>système de gestion de base de données</SpanCourse> (SGBD) est le logiciel qui permet à un ordinateur de stocker, récupérer, ajouter, supprimer et modifier des données.</PCourse>

        <PCourse className={'simple-my'}>Un SGBD gère tous les aspects primaires d&apos;une base de données, y compris la gestion de la manipulation des données, comme l&apos;authentification des utilisateurs, ainsi que l&apos;insertion ou l&apos;extraction des données.</PCourse>

        <PCourse>Un <SpanCourse>SGBD</SpanCourse> définit ce qu&apos;on appelle le <SpanCourse>schéma</SpanCourse> de données ou la <SpanCourse>structure</SpanCourse> dans laquelle les données sont stockées.</PCourse>

        <PCourse className={'simple-my'}>Les plus courantes sont : <SpanCourse>Mysql</SpanCourse>, <SpanCourse>MongoDB</SpanCourse>, <SpanCourse>Sqlite</SpanCourse>, <SpanCourse>Postgresql</SpanCourse> mais il en existe d&apos;autres.</PCourse>

        <PCourse>Il faudra de plus ouvrir un <SpanCourse>serveur</SpanCourse> afin d&apos;effectuer nos requêtes SQL pour cela un outil très utilisé est <LinkCustom href={"https://wampserver.aviatechno.net/"}>WAMP ou ses variants suivant le système d&apos;exploitation (Windows, Mac, Linux...).</LinkCustom></PCourse>



        <H2Course>SQL (Structured Query Language)</H2Course>
        <PCourse>Bien que des nuances peuvent être présente suivant le SGBD utilisé, le langage de base pour effectuer nos requêtes est appelé le SQL.</PCourse>
        <PCourse className={'simple-my'}>SQL est un langage de programmation utilisé pour gérer et manipuler des bases de données relationnelles. SQL est un langage standardisé qui permet de communiquer avec les bases de données relationnelles. </PCourse>

        <PCourse>Il est utilisé pour effectuer des tâches telles que la récupération de données, l&apos;insertion de données, la mise à jour de données et la suppression de données dans une base de données.</PCourse>

        <PCourse className={'simple-my'}>Voici un exemple de requête SQL :</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={'sql'}>
                SELECT * FROM users;
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <H2Course>Les types de données</H2Course>
        <UlCourse>
            <LICourse><SpanCourse>Text</SpanCourse> : Chaine de caractères</LICourse>
            <LICourse><SpanCourse>Number</SpanCourse> : Un nombre</LICourse>
            <LICourse><SpanCourse>Date</SpanCourse> ou <SpanCourse>DateTime</SpanCourse> : Date avec ou sans les heures, minutes et seconds</LICourse>
            <LICourse><SpanCourse>Booléen</SpanCourse> : True ou False</LICourse>
        </UlCourse>
        <PCourse className={'simple-mt'}>Il existe d&apos;autres types de données, mais ceux-ci sont les plus courants.</PCourse>



        <H2Course>La structure des données</H2Course>
        <PCourse>Une <SpanCourse>base de données</SpanCourse> est composée de <SpanCourse>tables</SpanCourse>.</PCourse>

        <PCourse className={'simple-my'}>Chaque <SpanCourse>table</SpanCourse> est composée de <SpanCourse>colonnes</SpanCourse> et de <SpanCourse>lignes</SpanCourse>.</PCourse>

        <PCourse>Les <SpanCourse>colonnes</SpanCourse> représentent les <SpanCourse>attributs de la table</SpanCourse>, tandis que les <SpanCourse>lignes</SpanCourse> représentent les <SpanCourse>enregistrements de la table</SpanCourse>.</PCourse>

        <PCourse className={'simple-mt'}>Les <SpanCourse>colonnes</SpanCourse> sont également appelées <SpanCourse>champs</SpanCourse>, tandis que les <SpanCourse>lignes</SpanCourse> sont également appelées <SpanCourse>enregistrements</SpanCourse>.</PCourse>



        <H2Course>Les requêtes SQL</H2Course>
        <PCourse>Les requêtes SQL sont utilisées pour récupérer, ajouter, modifier ou supprimer des données dans une base de données.</PCourse>
        <PCourse className={'simple-mt mb-3'}>Il existe plusieurs types de requêtes SQL, les plus courantes sont :</PCourse>

        <UlCourse>
            <LICourse><SpanCourse>SELECT</SpanCourse> : Récupérer des données</LICourse>
            <LICourse><SpanCourse>INSERT</SpanCourse> : Ajouter des données</LICourse>
            <LICourse><SpanCourse>UPDATE</SpanCourse> : Mettre à jour des données</LICourse>
            <LICourse><SpanCourse>DELETE</SpanCourse> : Supprimer des données</LICourse>
        </UlCourse>
        <PCourse className={'simple-mt'}>La requête <SpanCourse>SELECT</SpanCourse> est la plus compliquée à prendre en main surtout en cas de relations entre différentes tables.</PCourse>



        <H2Course>Les relations entre les tables</H2Course>
        <PCourse>Les bases de données relationnelles permettent de créer des <SpanCourse>relations entre les tables</SpanCourse>.</PCourse>

        <PCourse className={'simple-mt mb-3'}>Il existe plusieurs types de relations, les plus courantes sont :</PCourse>

        <UlCourse>
            <LICourse><SpanCourse>One-to-One</SpanCourse> : Une ligne d&apos;une table est associée à une seule ligne d&apos;une autre table.</LICourse>
            <LICourse><SpanCourse>One-to-Many</SpanCourse> : Une ligne d&apos;une table est associée à plusieurs lignes d&apos;une autre table.</LICourse>
            <LICourse><SpanCourse>Many-to-Many</SpanCourse> : Plusieurs lignes d&apos;une table sont associées à plusieurs lignes d&apos;une autre table.</LICourse>
        </UlCourse>

        <PCourse className={'simple-my'}>Les clés <SpanCourse className={'text-[#FFD700] bg-black px-2 py-1 rounded-md'}>primaires</SpanCourse> et <SpanCourse className={"text-[#C0C0C0] bg-black px-2 py-1 rounded-md"}>étrangères</SpanCourse> sont utilisées pour créer des relations entre les tables.</PCourse>
        <PCourse>Dans une relation <SpanCourse>One-to-Many</SpanCourse>, la clé <SpanCourse className={'text-[#FFD700] bg-black px-2 py-1 rounded-md'}>primaire</SpanCourse> de la table parente (One) est utilisée comme clé <SpanCourse className={"text-[#C0C0C0] bg-black px-2 py-1 rounded-md"}>étrangère</SpanCourse> dans la table enfant (Many).</PCourse>
        <PCourse className={'simple-mt'}>Dans une relation <SpanCourse>Many-to-Many</SpanCourse>, une <SpanCourse>table de jointure</SpanCourse> est utilisée pour relier les deux tables et stocker les clés.</PCourse>



        <H2Course>MCD, MLD et MPD</H2Course>
        <PCourse>Le <SpanCourse>Modèle Conceptuel de Données</SpanCourse> (MCD) est un schéma conceptuel qui représente les entités et les relations entre les entités d&apos;une base de données.</PCourse>
        
        <PCourse className={'simple-my'}>Le <SpanCourse>Modèle Logique de Données</SpanCourse> (MLD) est un schéma logique qui représente les tables, les colonnes et les clés d&apos;une base de données.</PCourse>
        
        <PCourse>Le <SpanCourse>Modèle Physique de Données</SpanCourse> (MPD) est un schéma physique qui représente la structure de stockage des données dans une base de données.</PCourse>

        <Link href="/bdd/MCD.jpg" target="_blank" className={"simple-mt block"}>
            <Image
                className={'rounded-3xl shadow-lg'}
                src={imgMCD} alt="MCD, MLD et MPD" />
        </Link>


        <PCourse className={'double-mt'}>Vue d&apos;une table, ses champs (colonnes) et enregistrements (lignes).</PCourse>
        <Link href="/bdd/exemple-database.jpg" target="_blank" className={'block simple-mt'}>
            <Image
                className={'rounded-3xl shadow-lg'}
                src={imgExempleDatabase}
                alt="exemple base de données" />
        </Link>

        <H3Course className={'double-mt'}>Rendez vous partie exercice pour la pratique!</H3Course>
    </LayoutCourseCustom>
}
