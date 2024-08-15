import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import CodeCourse from "@/components/cours/code-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";

export default function page() {

    return <>

        <H1Course>Base de données - Pense-Bêtes</H1Course>


        <H2Course>Structure d&apos;une requête <b>SELECT</b> avec <b>JOINTURE</b></H2Course>

        <CodeCourse langage={'sql'}>
        SELECT u.email, u.firstname, r.name as role_name
        FROM user as u
        JOIN role as r ON u.role_id = r.id
        WHERE u.id = 1
        ORDER BY u.firstname ASC
        </CodeCourse>
        <PCourse>Cette requête récupère :</PCourse>


        <UlCourse>
            <LICourse><b>email</b> et <b>firstname</b> de la table <b>user</b> que nous avons renommé <b>u</b></LICourse>
            <LICourse><b>name</b> que nous avons renommé <b>role_name</b> de la table <b>role</b> que nous avons renommé <b>r</b>.</LICourse>
            <LICourse>Où <b>id</b> est égal a <b>1</b></LICourse>
        </UlCourse>
        <PCourse>Nous les trions ensuite par <b>u.firstname</b> (user.firstname).</PCourse>
        <PCourse>Cela est rendu possible grâce à une <b>jointure</b>.</PCourse>


        <H2Course>Structure d&apos;une requête <b>INSERT</b></H2Course>

        <CodeCourse langage={"sql"}>
        INSERT INTO user (email, firstname, role_id)
        VALUES (&ldquo;test@test.fr&rdquo;, &ldquo;John&rdquo;, 1), (&ldquo;test2@.test.fr&rdquo;, &ldquo;Doe&rdquo;, 2)
        </CodeCourse>
        <PCourse>Cette requête insère deux utilisateurs dans la table <b>user</b>.</PCourse>
        <PCourse>Les champs doivent être remplis dans le bon ordre.</PCourse>




        <H2Course>Structure d&apos;une requête <b>UPDATE</b></H2Course>

        <CodeCourse langage={"sql"}>
        UPDATE user
        SET email = &ldquo;&rdquo;, firstname = &ldquo;Jane&rdquo;
        WHERE id = 1
        </CodeCourse>

        <PCourse>Cette requête met à jour l&apos;utilisateur ayant un <b>id</b> égal à <b>1</b>.</PCourse>
        <PCourse>Seuls les champs <b>email</b> et <b>firstname</b> sont mis à jour.</PCourse>




        <H2Course>Structure d&apos;une requête <b>DELETE</b></H2Course>

        <CodeCourse langage={"sql"}>
        DELETE FROM user
        WHERE id = 1
        </CodeCourse>

        <PCourse>Cette requête supprime l&apos;utilisateur ayant un <b>id</b> égal à <b>1</b>.</PCourse>
    </>
}
