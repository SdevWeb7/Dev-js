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


export default function Page() {

    return <>

        <H1Course>Base de données - Cours</H1Course>

        <H2Course>SGBD (Système de Gestion Base de Données)</H2Course>

        <PCourse>Un système de gestion de base de données (SGBD) est le logiciel qui permet à un ordinateur de stocker, récupérer, ajouter, supprimer et modifier des données. Un SGBD gère tous les aspects primaires d&apos;une base de données, y compris la gestion de la manipulation des données, comme l&apos;authentification des utilisateurs, ainsi que l&apos;insertion ou l&apos;extraction des données. Un SGBD définit ce qu&apos;on appelle le schéma de données ou la structure dans laquelle les données sont stockées.</PCourse>

        <PCourse>Les plus courantes sont : <b>Mysql</b>, <b>MongoDB</b>, <b>Sqlite</b>, <b>Postgresql</b> mais il en existe d&apos;autres.</PCourse>

        <PCourse>Il faudra de plus ouvrir un serveur afin d&apos;éffectuer nos requêtes SQL pour cela un outil très utilisé est <Link href={"https://wampserver.aviatechno.net/"} target={"_blank"}>WAMP ou ses variants suivant le système d&apos;exploitation (Windows, Mac, Linux...)</Link>.</PCourse>


        <H2Course>SQL (Structured Query Language)</H2Course>

        <PCourse>Bien que des nuances peuvent être présente suivant le SGBD utilisé, le langage de base pour effectuer nos requêtes est appelé le SQL.</PCourse>
        <PCourse>SQL est un langage de programmation utilisé pour gérer et manipuler des bases de données relationnelles. SQL est un langage standardisé qui permet de communiquer avec les bases de données relationnelles. Il est utilisé pour effectuer des tâches telles que la récupération de données, l&apos;insertion de données, la mise à jour de données et la suppression de données dans une base de données.</PCourse>

        <MultiLignesCodeWrapper>
            <CodeCourse langage={'sql'}>
                SELECT * FROM users;
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <H2Course>Les types de bases de données</H2Course>

        <UlCourse>
            <LICourse><b>Texte</b> : Chaine de caractères</LICourse>
            <LICourse><b>Nombre</b> : Un chiffre</LICourse>
            <LICourse><b>Date</b> : Date</LICourse>
            <LICourse><b>Booléen</b> : Vrai ou Faux</LICourse>
        </UlCourse>
        <PCourse>Il existe d&apos;autres types de données, mais ceux-ci sont les plus courants.</PCourse>


        <H2Course>La structure des données</H2Course>

        <PCourse>Une base de données est composée de tables.</PCourse>
        <PCourse>Chaque table est composée de colonnes et de lignes.</PCourse>
        <PCourse>Les colonnes représentent les attributs de la table, tandis que les lignes représentent les enregistrements de la table.</PCourse>
        <PCourse>Les colonnes sont également appelées champs, tandis que les lignes sont également appelées enregistrements.</PCourse>

        <H2Course>Les requêtes SQL</H2Course>

        <PCourse>Les requêtes SQL sont utilisées pour récupérer, ajouter, modifier ou supprimer des données dans une base de données.</PCourse>
        <PCourse>Il existe plusieurs types de requêtes SQL, les plus courantes sont :</PCourse>

        <UlCourse>
            <LICourse><b>SELECT</b> : Récupérer des données</LICourse>
            <LICourse><b>INSERT</b> : Ajouter des données</LICourse>
            <LICourse><b>UPDATE</b> : Mettre à jour des données</LICourse>
            <LICourse><b>DELETE</b> : Supprimer des données</LICourse>
        </UlCourse>
        <PCourse>La requête <b>SELECT</b> est la plus compliquée à prendre en main surtout en cas de relations entre différentes tables.</PCourse>


        <H2Course>Les relations entre les tables</H2Course>

        <PCourse>Les bases de données relationnelles permettent de créer des relations entre les tables.</PCourse>
        <PCourse>Il existe plusieurs types de relations, les plus courantes sont :</PCourse>

        <UlCourse>
            <LICourse><b>One-to-One</b> : Une ligne d&apos;une table est associée à une seule ligne d&apos;une autre table.</LICourse>
            <LICourse><b>One-to-Many</b> : Une ligne d&apos;une table est associée à plusieurs lignes d&apos;une autre table.</LICourse>
            <LICourse><b>Many-to-Many</b> : Plusieurs lignes d&apos;une table sont associées à plusieurs lignes d&apos;une autre table.</LICourse>
        </UlCourse>
        <PCourse>Les clés primaires et étrangères sont utilisées pour créer des relations entre les tables.</PCourse>
        <PCourse>Dans une relation <b>One-to-Many</b>, la clé primaire de la table parente (One) est utilisée comme clé étrangère dans la table enfant (Many).</PCourse>
        <PCourse>Dans une relation <b>Many-to-Many</b>, une table de jointure est utilisée pour relier les deux tables et stocker les clés.</PCourse>


        <H2Course>MCD, MLD et MPD</H2Course>

        <PCourse>Le Modèle Conceptuel de Données (MCD) est un schéma conceptuel qui représente les entités et les relations entre les entités d&apos;une base de données.</PCourse>
        <PCourse>Le Modèle Logique de Données (MLD) est un schéma logique qui représente les tables, les colonnes et les clés d&apos;une base de données.</PCourse>
        <PCourse>Le Modèle Physique de Données (MPD) est un schéma physique qui représente la structure de stockage des données dans une base de données.</PCourse>

        <Link href="/bdd/MCD.jpg" target="_blank"><Image src={imgMCD} alt="MCD, MLD et MPD" /></Link>


        <PCourse>Vue d&apos;une table, ses champs (colonnes) et enregistrements (lignes).</PCourse>
        <Link href="/bdd/exemple-database.jpg" target="_blank"><Image src={imgExempleDatabase} alt="exemple base de données" /></Link>

        <H3Course>Rendez vous partie exercice pour la pratique!</H3Course>
    </>
}
