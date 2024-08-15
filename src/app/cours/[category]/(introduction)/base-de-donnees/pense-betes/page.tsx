import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import CodeCourse from "@/components/cours/code-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";

export default function page() {

    return <>

        <H1Course>Base de données - Pense-Bêtes</H1Course>


        <H2Course>Structure d&apos;une requête <b>SELECT</b> avec <b>JOINTURE</b></H2Course>

        <MultiLignesCodeWrapper>
            <CodeCourse langage={'sql'}>
                SELECT u.email, u.firstname, r.name as role_name
            </CodeCourse>
            <CodeCourse langage={'sql'}>
                FROM user as u
            </CodeCourse>
            <CodeCourse langage={'sql'}>
                JOIN role as r ON u.role_id = r.id
            </CodeCourse>
            <CodeCourse langage={'sql'}>
                WHERE u.id = 1
            </CodeCourse>
            <CodeCourse langage={'sql'}>
                ORDER BY u.firstname ASC;
            </CodeCourse>
        </MultiLignesCodeWrapper>
        <PCourse>Cette requête récupère :</PCourse>

        <UlCourse>
            <LICourse><b>email</b> et <b>firstname</b> de la table <b>user</b> que nous avons renommé <b>u</b></LICourse>
            <LICourse><b>name</b> que nous avons renommé <b>role_name</b> de la table <b>role</b> que nous avons renommé <b>r</b>.</LICourse>
            <LICourse>Où <b>id</b> est égal a <b>1</b></LICourse>
        </UlCourse>
        <PCourse>Nous les trions ensuite par <b>u.firstname</b> (user.firstname).</PCourse>
        <PCourse>Cela est rendu possible grâce à une <b>jointure</b>.</PCourse>


        <H2Course>Structure d&apos;une requête <b>INSERT</b></H2Course>


        <MultiLignesCodeWrapper>
            <CodeCourse langage={"sql"}>
                INSERT INTO user (email, firstname, role_id)
            </CodeCourse>
            <CodeCourse langage={"sql"}>
                VALUES (&ldquo;test@test.fr&rdquo;, &ldquo;John&rdquo;, 1), (&ldquo;test2@.test.fr&rdquo;, &ldquo;Doe&rdquo;, 2)
            </CodeCourse>
        </MultiLignesCodeWrapper>
        <PCourse>Cette requête insère deux utilisateurs dans la table <b>user</b>.</PCourse>
        <PCourse>Les champs doivent être remplis dans le bon ordre.</PCourse>




        <H2Course>Structure d&apos;une requête <b>UPDATE</b></H2Course>

        <MultiLignesCodeWrapper>
            <CodeCourse langage={"sql"}>
                UPDATE user
            </CodeCourse>
            <CodeCourse langage={"sql"}>
                SET email = &ldquo;&rdquo;, firstname = &ldquo;Jane&rdquo;
            </CodeCourse>
            <CodeCourse langage={"sql"}>
                WHERE id = 1
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <PCourse>Cette requête met à jour l&apos;utilisateur ayant un <b>id</b> égal à <b>1</b>.</PCourse>
        <PCourse>Seuls les champs <b>email</b> et <b>firstname</b> sont mis à jour.</PCourse>




        <H2Course>Structure d&apos;une requête <b>DELETE</b></H2Course>

        <MultiLignesCodeWrapper>
            <CodeCourse langage={"sql"}>
                DELETE FROM user
            </CodeCourse>
            <CodeCourse langage={"sql"}>
                WHERE id = 1
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <PCourse>Cette requête supprime l&apos;utilisateur ayant un <b>id</b> égal à <b>1</b>.</PCourse>
    </>
}
