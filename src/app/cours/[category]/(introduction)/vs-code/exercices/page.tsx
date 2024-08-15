import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import H2Course from "@/components/cours/h2-course";
import H3Course from "@/components/cours/h3-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import CodeCourse from "@/components/cours/code-course";


export default function page() {

    return <>
        <H1Course>VS-Code - Exercices</H1Course>


        <H2Course>Exercice 1</H2Course>

        <PCourse>Ouvrez VS Code et explorez les différentes sections. Essayez de trouver les différentes fonctionnalités proposées par VS Code comme l&apos;explorateur de fichier, le terminal intégré et la console.</PCourse>




        <H2Course>Exercice 2</H2Course>
        <PCourse>Installez les extensions suivantes :</PCourse>
        <UlCourse>
            <LICourse>Prettier</LICourse>
            <LICourse>Live Server</LICourse>
        </UlCourse>
        <PCourse>Une fois installée, configurez l&apos;extension Prettier pour qu&apos;elle formate automatiquement votre code, ensuite lancez un projet HTML simple pour voir comment fonctionne Live Server.</PCourse>





        <H2Course>Exercice 3</H2Course>
        <PCourse>Après vous êtes amusé à découvrir VS Code, placez-vous dans la barre de recherche en haut de l&apos;écran et tapez &gt; pour sélectionner <b>Open User Settings (JSON)</b>. Ce fichier JSON contient toutes vos configurations de VS Code. Vous pouvez y ajouter des extensions, changer les couleurs, etc. Vous pouvez également exporter votre configuration en JSON et l&apos;importer dans un autre projet.</PCourse>

        <H3Course>Comprendre le fichier JSON</H3Course>
        <PCourse>Ci-dessous un exemple de fichier JSON et des explications de chaque propriété qui peut être utilisée.</PCourse>

        <CodeCourse langage={"json"}>
            &#123;
                &ldquo;editor.defaultFormatter&rdquo;: &ldquo;esbenp.prettier-vscode&rdquo;,
            &#125;


        </CodeCourse>



        <UlCourse>
          <LICourse>Définit &ldquo;Prettier&rdquo; comme formateur par défaut pour tous les fichiers. L&apos;identifiant &ldquo;esbenp.prettier-vscode&rdquo; correspond à l&apos;extension &ldquo;Prettier&rdquo; installée dans l&apos;exercice 1.</LICourse>
        </UlCourse>

        <CodeCourse langage={"json"}>
            &ldquo;editor.formatOnSave&rdquo;: true,
        </CodeCourse>

        <UlCourse>
          <LICourse>Active le formatage automatique du code à chaque fois que le fichier est sauvegardé.</LICourse>
        </UlCourse>


        <CodeCourse langage={"json"}>
            &ldquo;editor.detectIndentation&rdquo;: true,
        </CodeCourse>


        <UlCourse>
          <LICourse>Permet à l&apos;éditeur de détecter automatiquement le type d&apos;indentation (espaces ou tabulations).</LICourse>
        </UlCourse>

        <CodeCourse langage={"json"}>
            &ldquo;editor.rulers&rdquo;: [80],
        </CodeCourse>

        <UlCourse>
          <LICourse>Affiche une ligne de 80 caractères sur la gauche de l&apos;éditeur afin de respecter les conventions de longueur de ligne dans le code.</LICourse>
        </UlCourse>

        <CodeCourse langage={"json"}>
            &#123;
            &ldquo;[javascript]&rdquo; : &#123;
                    &ldquo;editor.defaultFormatter&rdquo;: &ldquo;esbenp.prettier-vscode&rdquo;,
                    &ldquo;editor.suggestSelection&rdquo;: &ldquo;recentlyUsed&rdquo;,
                    &ldquo;editor.suggest.showKeywords&rdquo;: false
                &#125;
            &#125;
        </CodeCourse>

        <UlCourse>
          <LICourse><b>editor.defaultFormatter</b> utilise &ldquo;Prettier&rdquo; comme formateur par défault spécifiquement pour les fichiers javascript.</LICourse>
          <LICourse><b>editor.suggestSelection</b> pré sélectionne les suggestions dans l&apos;auto-complétion (par exemple, lorsque vous tapez &ldquo;const&rdquo; dans un fichier javascript).</LICourse>
          <LICourse><b>editor.suggest.showKeywords</b> désactive la suggestion des mots-clés JavaScript dans les suggestions automatiques.</LICourse>
        </UlCourse>


        <H2Course>Exercice 4</H2Course>
        <PCourse><em>voir le cours sur GIT et GitHub</em></PCourse>

    </>
}
