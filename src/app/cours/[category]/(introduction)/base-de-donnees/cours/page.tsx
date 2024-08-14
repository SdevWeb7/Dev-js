export default function page() {

    return <>

        <h1> Base de données - Cours</h1>

        <h2>SGBD (Système de Gestion Base de Données)</h2>

        <p>Un système de gestion de base de données (SGBD) est le logiciel qui permet à un ordinateur de stocker, récupérer, ajouter, supprimer et modifier des données. Un SGBD gère tous les aspects primaires d'une base de données, y compris la gestion de la manipulation des données, comme l'authentification des utilisateurs, ainsi que l'insertion ou l'extraction des données. Un SGBD définit ce qu'on appelle le schéma de données ou la structure dans laquelle les données sont stockées.</p>

        <p>Les plus courantes sont : <b>Mysql</b>, <b>MongoDB</b>, <b>Sqlite</b>, <b>Postgresql</b> mais il en existe d'autres.</p>

        <p>Il faudra de plus ouvrir un serveur afin d'éffectuer nos requêtes SQL pour cela un outil très utilisé est <a href={"https://wampserver.aviatechno.net/"} target={"_blank"}>WAMP ou ses variants suivant le système d'éxploitation (Windows, Mac, Linux...)</a>.</p>


        <h2>SQL (Structured Query Language)</h2>

        <p>Bien que des nuances peuvent être présente suivant le SGBD utilisé le langage de base pour effectuer nos requêtes est appelé le SQL.</p>
        <p>SQL est un langage de programmation utilisé pour gérer et manipuler des bases de données relationnelles. SQL est un langage standardisé qui permet de communiquer avec les bases de données relationnelles. Il est utilisé pour effectuer des tâches telles que la récupération de données, l'insertion de données, la mise à jour de données et la suppression de données dans une base de données.</p>
        ```sql
        SELECT * FROM users;
        ```

        <h2>Les types de bases de données</h2>

        <ul>
            <li><b>Texte</b> : Chaine de caractères</li>
            <li><b>Nombre</b> : Un chiffre</li>
            <li><b>Date</b> : Date</li>
            <li><b>Booléen</b> : Vrai ou Faux</li>
        </ul>
        <p>Il existe d'autres types de données, mais ceux-ci sont les plus courants.</p>


        <h2>La structure des données</h2>

        <p>Une base de données est composée de tables.</p>
        <p>Chaque table est composée de colonnes et de lignes.</p>
        <p>Les colonnes représentent les attributs de la table, tandis que les lignes représentent les enregistrements de la table.</p>
        <p>Les colonnes sont également appelées champs, tandis que les lignes sont également appelées enregistrements.</p>

        <h2>Les requêtes SQL</h2>

        <p>Les requêtes SQL sont utilisées pour récupérer, ajouter, modifier ou supprimer des données dans une base de données.</p>
        <p>Il existe plusieurs types de requêtes SQL, les plus courantes sont :</p>

        <ul>
            <li><b>SELECT</b> : Récupérer des données</li>
            <li><b>INSERT</b> : Ajouter des données</li>
            <li><b>UPDATE</b> : Mettre à jour des données</li>
            <li><b>DELETE</b> : Supprimer des données</li>
        </ul>
        <p>La requête <b>SELECT</b> est la plus compliquée à prendre en main surtout en cas de relations entre différentes tables.</p>


        <h2>Les relations entre les tables</h2>

        <p>Les bases de données relationnelles permettent de créer des relations entre les tables.</p>
        <p>Il existe plusieurs types de relations, les plus courantes sont :</p>

        <ul>
            <li><b>One-to-One</b> : Une ligne d'une table est associée à une seule ligne d'une autre table.</li>
            <li><b>One-to-Many</b> : Une ligne d'une table est associée à plusieurs lignes d'une autre table.</li>
            <li><b>Many-to-Many</b> : Plusieurs lignes d'une table sont associées à plusieurs lignes d'une autre table.</li>
        </ul>
        <p>Les clés primaires et étrangères sont utilisées pour créer des relations entre les tables.</p>
        <p>Dans une relation <b>One-to-Many</b>, la clé primaire de la table parente (One) est utilisée comme clé étrangère dans la table enfant (Many).</p>
        <p>Dans une relation <b>Many-to-Many</b>, une table de jointure est utilisée pour relier les deux tables et stocker les clés.</p>


        <h2>MCD, MLD et MPD</h2>

        <p>Le Modèle Conceptuel de Données (MCD) est un schéma conceptuel qui représente les entités et les relations entre les entités d'une base de données.</p>
        <p>Le Modèle Logique de Données (MLD) est un schéma logique qui représente les tables, les colonnes et les clés d'une base de données.</p>
        <p>Le Modèle Physique de Données (MPD) est un schéma physique qui représente la structure de stockage des données dans une base de données.</p>

        <a href="/bdd/MCD.jpg" target="_blank"><img src="/bdd/MCD.jpg" alt="MCD, MLD et MPD" /></a>


        <p>Vue d'une table, ses champs (colonnes) et enregistrements (lignes).</p>
        <a href="/bdd/exemple-database.jpg" target="_blank"><img src="/bdd/exemple-database.jpg" alt="exemple base de données" /></a>

        <h3>Rendez vous partie exercice pour la pratique!</h3>
    </>
}
