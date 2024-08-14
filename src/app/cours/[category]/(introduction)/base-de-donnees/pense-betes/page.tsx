export default function page() {

    return <>

        <h1>Base de données - Pense-Bêtes</h1>


        <h2>Structure d'une requête <b>SELECT</b> avec <b>JOINTURE</b></h2>

        ```sql
        SELECT u.email, u.firstname, r.name as role_name
        FROM user as u
        JOIN role as r ON u.role_id = r.id
        WHERE u.id = 1
        ORDER BY u.firstname ASC
        ```
        <p>Cette requête récupère :</p>
        <ul>
            <li><b>email</b> et <b>firstname</b> de la table <b>user</b> que nous avons renommé <b>u</b></li>
            <li><b>name</b> que nous avons renommé <b>role_name</b> de la table <b>role</b> que nous avons renommé <b>r</b>.</li>
            <li>Où <b>id</b> est égal a <b>1</b></li>
        </ul>
        <p>Nous les trions ensuite par <b>u.firstname</b> (user.firstname).</p>
        <p>Cela est rendu possible grâce à une <b>jointure</b>.</p>


        <h2>Structure d'une requête <b>INSERT</b></h2>

        ```sql
        INSERT INTO user (email, firstname, role_id)
        VALUES ("test@test.fr", "John", 1), ("test2@.test.fr", "Doe", 2)
        ```
        <p>Cette requête insère deux utilisateurs dans la table <b>user</b>.</p>
        <p>Les champs doivent être remplis dans le bon ordre.</p>


        <h2>Structure d'une requête <b>UPDATE</b></h2>

        ```sql
        UPDATE user
        SET email = "", firstname = "Jane"
        WHERE id = 1
        ```
        <p>Cette requête met à jour l'utilisateur ayant un <b>id</b> égal à <b>1</b>.</p>
        <p>Seuls les champs <b>email</b> et <b>firstname</b> sont mis à jour.</p>


        <h2>Structure d'une requête <b>DELETE</b></h2>

        ```sql
        DELETE FROM user
        WHERE id = 1
        ```
        <p>Cette requête supprime l'utilisateur ayant un <b>id</b> égal à <b>1</b>.</p>
    </>
}
