import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import CodeCourse from "@/components/cours/code-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";


export default function page() {

    return <LayoutCourseCustom>

        <H1Course>Base de données</H1Course>


        <H2Course>Structure d&apos;une requête <b>SELECT</b> avec <b>JOINTURE</b></H2Course>
        <MultiLignesCodeWrapper className={"simple-my"}>
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


        <PCourse className={'mb-3'}>Cette requête récupère :</PCourse>
        <UlCourse>
            <LICourse><SpanCourse>email</SpanCourse> et <SpanCourse>firstname</SpanCourse> de la table <SpanCourse>user</SpanCourse> que nous avons renommé <SpanCourse>u</SpanCourse></LICourse>
            <LICourse><SpanCourse>name</SpanCourse> que nous avons renommé <SpanCourse>role_name</SpanCourse> de la table <SpanCourse>role</SpanCourse> que nous avons renommé <SpanCourse>r</SpanCourse>.</LICourse>
            <LICourse>Où <SpanCourse>id</SpanCourse> est égal a <SpanCourse>1</SpanCourse></LICourse>
        </UlCourse>
        <PCourse className={'simple-my'}>Nous les trions ensuite par <SpanCourse>u.firstname</SpanCourse> (user.firstname) par ordre croissant (alphabétique, utiliser DESC pour décroissant).</PCourse>
        <PCourse>Cela est rendu possible grâce à une <SpanCourse>jointure</SpanCourse>.</PCourse>



        <H2Course>Structure d&apos;une requête <b>INSERT</b></H2Course>
        <MultiLignesCodeWrapper className={"simple-my"}>
            <CodeCourse langage={"sql"}>
                INSERT INTO user (email, firstname, role_id)
            </CodeCourse>
            <CodeCourse langage={"sql"}>
                VALUES (&ldquo;test@test.fr&rdquo;, &ldquo;John&rdquo;, 1), (&ldquo;test2@.test.fr&rdquo;, &ldquo;Doe&rdquo;, 2)
            </CodeCourse>
        </MultiLignesCodeWrapper>
        <PCourse>Cette requête insère deux utilisateurs dans la table <SpanCourse>user</SpanCourse>.</PCourse>
        <PCourse className={'simple-mt'}>Les champs doivent être remplis dans le bon ordre.</PCourse>




        <H2Course>Structure d&apos;une requête <b>UPDATE</b></H2Course>
        <MultiLignesCodeWrapper className={"simple-my"}>
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

        <PCourse>Cette requête met à jour l&apos;utilisateur ayant un <SpanCourse>id</SpanCourse> égal à <SpanCourse>1</SpanCourse>.</PCourse>
        <PCourse className={"simple-mt"}>Seuls les champs <SpanCourse>email</SpanCourse> et <SpanCourse>firstname</SpanCourse> sont mis à jour.</PCourse>




        <H2Course>Structure d&apos;une requête <b>DELETE</b></H2Course>
        <MultiLignesCodeWrapper className={"simple-my"}>
            <CodeCourse langage={"sql"}>
                DELETE FROM user
            </CodeCourse>
            <CodeCourse langage={"sql"}>
                WHERE id = 1
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <PCourse>Cette requête supprime l&apos;utilisateur ayant un <SpanCourse>id</SpanCourse> égal à <SpanCourse>1</SpanCourse>.</PCourse>
    </LayoutCourseCustom>
}
