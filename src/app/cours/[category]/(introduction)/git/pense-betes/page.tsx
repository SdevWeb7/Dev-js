import CodeCourse from "@/components/cours/code-course";
import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import H3Course from "@/components/cours/h3-course";

export default function Page() {

    return <>
        <H1Course>Git - Pense-Bête</H1Course>


        <H2Course>Commandes de base</H2Course>

        <H3Course>Récupérer un dépôt</H3Course>

        <CodeCourse langage={"bash"}>
        git clone url_du_depot
        </CodeCourse>

        <H3Course>Créer un dépôt</H3Course>

        <CodeCourse langage={"bash"}>
        git init
        </CodeCourse>

        <H3Course>Ajouter un fichier</H3Course>

        <CodeCourse langage={"bash"}>
        git add nom_du_fichier
        </CodeCourse>

        <H3Course>Ajouter tous les fichiers</H3Course>

        <CodeCourse langage={"bash"}>
        git add .
        </CodeCourse>


        <H3Course>Valider un fichier</H3Course>

        <CodeCourse langage={"bash"}>
        git commit -m &ldquo;Message&rdquo;
        </CodeCourse>

        <H3Course>Envoyer sur un dépôt</H3Course>

        <CodeCourse langage={"bash"}>
        git push origin main
        </CodeCourse>

        <H3Course>Récupérer les modifications</H3Course>

        <CodeCourse langage={"bash"}>
        git fetch
        git merge origin/master
        </CodeCourse>

        <H3Course>Récupérer les modifications (fetch+merge)</H3Course>

        <CodeCourse langage={"bash"}>
        git pull
        </CodeCourse>

        <H3Course>Créer une branche</H3Course>

        <CodeCourse langage={"bash"}>
        git branch nom_de_la_branche
        </CodeCourse>

        <H3Course>Changer de branche</H3Course>

        <CodeCourse langage={"bash"}>
        git checkout nom_de_la_branche
        </CodeCourse>

        <H3Course>Fusionner une branche</H3Course>

        <CodeCourse langage={"bash"}>
        git merge nom_de_la_branche
        </CodeCourse>

        <H3Course>Supprimer une branche</H3Course>

        <CodeCourse langage={"bash"}>
        git branch -d nom_de_la_branche
        </CodeCourse>

        <H3Course>Voir les modifications</H3Course>

        <CodeCourse langage={"bash"}>
        git status
        </CodeCourse>

        <H3Course>Voir l&apos;historique</H3Course>

        <CodeCourse langage={"bash"}>
        git log
        </CodeCourse>

        <H3Course>Revenir en arrière</H3Course>

        <CodeCourse langage={"bash"}>
        git checkout -- nom_du_fichier
        </CodeCourse>

    </>
}
