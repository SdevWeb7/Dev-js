import CodeCourse from "@/components/cours/code-course";
import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import H2Course from "@/components/cours/h2-course";
import LICourse from "@/components/cours/li-course";
import ULCourse from "@/components/cours/ul-course";
import Link from "next/link";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";


export default function Page() {

    return <>
        <H1Course>Git - Cours</H1Course>



        <H2Course>Débuter</H2Course>

        <PCourse>Pour utiliser Git, il faut d&apos;abord l&apos;installer. Pour cela, rendez-vous sur le <Link href="https://git-scm.com/downloads" target="_blank">site officiel de Git</Link> et téléchargez la version correspondant à votre système d&apos;exploitation.</PCourse>
        <PCourse>Après avoir installé Git, vous pouvez commencer à utiliser les commandes de base depuis votre terminal (il faut ajouter le chemin de Git dans les variables d&apos;environnement pour que les commandes soient reconnues).</PCourse>
        <PCourse>Il existe des outils intégrés dans les <b>IDE</b> (Integrated Development Environment) ou <b>Github Desktop</b> qui permettent de gérer les dépôts Git de manière plus visuelle, cependant il est important de connaître les commandes de bases.</PCourse>



        <H2Course>Fonctionnement</H2Course>

        <PCourse>La première chose à faire est de créer un dépôt. Pour cela, il suffit de se rendre dans le dossier de votre projet et de taper la commande :</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git init
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <PCourse>Après cela 2 commandes sont très utiles :</PCourse>


        <PCourse>Ajouter un fichier en particulier</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={'bash'}>
                git add nom_du_fichier
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <PCourse>Ajouter tous les fichiers</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git add .
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <PCourse>Pour finir, valider les modifications avec la commande :</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git commit -m &ldquo;Message&rdquo;
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <PCourse>Le message doit être le plus descriptif possible.</PCourse>




        <H2Course>Poster son dépôt sur une plateforme</H2Course>

        <PCourse><Link href={"https://github.com/"} target={'_blank'}>Github</Link> est une des plateformes de gestion de dépôts les plus utilisées. Elle facilite le travail d&apos;équipe grâce à de nombreuses fonctionnalités et son interface user-friendly.</PCourse>
        <PCourse>Après avoir créé un compte, vous pouvez naviguer section repositories et chercher le bouton <b>Create new repository</b>.</PCourse>
        <PCourse>Github vous redirige et vous explique la marche à suivre.</PCourse>
        <PCourse>Il faut <b>créer ou lier un dépôt</b>.</PCourse>
        <PCourse>Pour lier le dépôt local au dépôt distant, il faut faire la commande :</PCourse>


        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git remote add origin lien_du_depôt_Github
            </CodeCourse>
        </MultiLignesCodeWrapper>
        <PCourse>Cela va enregistrer sous le label &ldquo;origin&rdquo; le dépôt distant. Le label est très important, car vous pouvez lier plusieurs dépôts distants.</PCourse>


        <PCourse>Il ne reste plus qu&apos;à s&apos;assurer d&apos;être sur la bonne branche (nous parlerons des branches un peu plus tard) en effectuant la commande : </PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git branch -M main
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <PCourse>Nous sommes prêt, nous pouvons <b>push</b> sur Github notre dépôt local avec la commande :</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git push origin main
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <PCourse>Cela va <b>merger</b> la branche <b>main</b> locale sur le dépôt distant.</PCourse>


        <PCourse>En équipe, avant de push, il faut toujours s&apos;assurer d&apos;être à jour avec le dépôt distant avec la commande : </PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git pull origin main
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <H2Course>Cloner un dépôt</H2Course>

        <PCourse>Il est possible de cloner un dépôt distant sur votre machine avec la commande : </PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git clone lienDuDepôtGithub
            </CodeCourse>
        </MultiLignesCodeWrapper>
        <PCourse>Cela va créer un dossier avec le nom du dépôt et récupérer tout le code.</PCourse>



        <H2Course>Authentification</H2Course>

        <PCourse>Afin de push sur un dépôt distant, il est nécessaire de s&apos;authentifier. En général, vous êtes redirigé vers le site Github pour vous connecter.</PCourse>
        <PCourse>Cependant si vous avez plusieurs comptes voici quelques commandes qui peuvent vous être utile :</PCourse>
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
            <PCourse>Enlevez <b>--global</b> si vous ne voulez changer que le projet dans lequel vous faites la commande.</PCourse>
            <PCourse>Il est possible de vérifier les informations avec la commande : </PCourse>
            <CodeCourse langage={"bash"}>
                git config --list
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <H2Course>Concepts avancées</H2Course>
        <PCourse>Git est un outil très puissant et il est possible de faire beaucoup de choses avec. Voici quelques concepts avancés :</PCourse>
        <ULCourse>
            <LICourse>Les branches</LICourse>
            <LICourse>Les conflits</LICourse>
            <LICourse>Les tags</LICourse>
            <LICourse>Les pull requests</LICourse>
        </ULCourse>
        <PCourse>Les branches permettent de travailler sur des fonctionnalités sans impacter le code principal. Cela permet de travailler en parallèle sur plusieurs fonctionnalités.</PCourse>
        <PCourse>Les conflits surviennent lorsqu&apos;il y a des modifications sur la même ligne de code. Git ne sait pas quelle modification garder, il faut donc résoudre le conflit manuellement.</PCourse>
        <PCourse>Les tags permettent de marquer un commit. Cela peut être utile pour marquer une version stable par exemple.</PCourse>
        <PCourse>Les Pull Request sont des demandes de fusion de code. Cela permet de vérifier le code avant de le fusionner avec la branche principale.</PCourse>
    </>
}
