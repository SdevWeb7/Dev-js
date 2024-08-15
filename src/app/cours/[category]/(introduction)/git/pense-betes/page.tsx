import CodeCourse from "@/components/cours/code-course";
import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import H3Course from "@/components/cours/h3-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import React from "react";

export default function Page() {

    return <>
        <H1Course>Git - Pense-Bête</H1Course>


        <H2Course>Commandes de base</H2Course>



        <H3Course>Récupérer un dépôt</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git clone url_du_depot
            </CodeCourse>
        </MultiLignesCodeWrapper>




        <H3Course>Créer un dépôt</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git init
            </CodeCourse>
        </MultiLignesCodeWrapper>




        <H3Course>Ajouter un fichier</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git add nom_du_fichier
            </CodeCourse>
        </MultiLignesCodeWrapper>




        <H3Course>Ajouter tous les fichiers</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git add .
            </CodeCourse>
        </MultiLignesCodeWrapper>




        <H3Course>Valider un fichier</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git commit -m &ldquo;Message&rdquo;
            </CodeCourse>
        </MultiLignesCodeWrapper>




        <H3Course>Envoyer sur un dépôt</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git push origin main
            </CodeCourse>
        </MultiLignesCodeWrapper>




        <H3Course>Récupérer les modifications</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git fetch
            </CodeCourse>
            <CodeCourse langage={"bash"}>
                git merge origin/master
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <H3Course>Récupérer les modifications (fetch+merge)</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git pull
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <H3Course>Créer une branche</H3Course>
            <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git branch nom_de_la_branche
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <H3Course>Changer de branche</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git checkout nom_de_la_branche
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <H3Course>Fusionner une branche</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git merge nom_de_la_branche
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <H3Course>Supprimer une branche</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git branch -d nom_de_la_branche
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <H3Course>Voir les modifications</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git status
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <H3Course>Voir l&apos;historique</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git log
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <H3Course>Revenir en arrière</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git checkout -- nom_du_fichier
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <H3Course>Gérer son authentification Git</H3Course>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git config --global user.name &ldquo;PseudoGithub&rdquo;
            </CodeCourse>
            <CodeCourse langage={"bash"}>
                git config --global user.email &ldquo;EmailGithub&rdquo;
            </CodeCourse>
            <CodeCourse langage={"bash"}>
                git config --global credential.username &ldquo;new_username&rdquo;
            </CodeCourse>
        </MultiLignesCodeWrapper>
    </>
}
