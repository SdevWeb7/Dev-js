import CodeCourse from "@/components/cours/code-course";
import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import H2Course from "@/components/cours/h2-course";
import LICourse from "@/components/cours/li-course";
import ULCourse from "@/components/cours/ul-course";
import MultiLignesCodeWrapper from "@/components/cours/multi-lignes-code-wrapper";
import SpanCourse from "@/components/cours/span-course";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import LinkCustom from "@/components/cours/link-custom";


export default function Page() {

    return <LayoutCourseCustom>
        <H1Course>Git</H1Course>


        <H2Course>Débuter</H2Course>

        <PCourse>Pour utiliser Git, il faut d&apos;abord l&apos;installer.</PCourse>

        <PCourse className={"simple-my"}>Pour cela, rendez-vous sur le <LinkCustom href="https://git-scm.com/downloads">site officiel de Git</LinkCustom> et téléchargez la version correspondant à votre système d&apos;exploitation.</PCourse>

        <PCourse>Après avoir installé Git, vous pouvez commencer à utiliser les commandes de base depuis votre terminal (il faut ajouter le chemin de Git dans les variables d&apos;environnement pour que les commandes soient reconnues).</PCourse>

        <PCourse className={"simple-mt"}>Il existe des outils intégrés dans les <SpanCourse>IDE</SpanCourse> (Integrated Development Environment) ou <SpanCourse>Github Desktop</SpanCourse> qui permettent de gérer les dépôts Git de manière plus visuelle, cependant il est important de connaître les commandes de bases.</PCourse>



        <H2Course>Fonctionnement</H2Course>

        <PCourse>La première chose à faire est de <SpanCourse>créer un dépôt</SpanCourse>.</PCourse>

        <PCourse className={"simple-my"}>Pour cela, il suffit de se rendre à partir du terminal dans le dossier de votre projet et de taper la commande suivante :</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git init
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <PCourse className={"double-mt simple-mb"}>Après cela 2 commandes sont très utiles :</PCourse>
        <PCourse>Ajouter <SpanCourse>un</SpanCourse> fichier en particulier</PCourse>
        <MultiLignesCodeWrapper className={"simple-my"}>
            <CodeCourse langage={'bash'}>
                git add nom_du_fichier
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <PCourse className={"double-mt simple-mb"}>Ajouter <SpanCourse>tous</SpanCourse> les fichiers</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git add .
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <PCourse className={'double-mt simple-mb'}>Pour finir, valider les modifications avec la commande :</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git commit -m &ldquo;Message&rdquo;
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <PCourse className={"double-mt"}>Le message doit être le plus descriptif possible.</PCourse>




        <H2Course>Poster son dépôt sur une plateforme</H2Course>

        <PCourse><LinkCustom href={"https://github.com/"}>Github</LinkCustom> est une des plateformes de <SpanCourse>gestion de dépôts</SpanCourse> les plus utilisées.</PCourse>

        <PCourse className={"simple-my"}>Elle facilite le travail d&apos;équipe grâce à de nombreuses fonctionnalités et son interface user friendly.</PCourse>
        <PCourse>Après avoir créé un compte, vous pouvez naviguer section repositories et chercher le bouton <SpanCourse>Create new repository</SpanCourse>.</PCourse>
        <PCourse className={'simple-my'}>Github vous redirige et vous explique la marche à suivre.</PCourse>
        <PCourse>Il faut <SpanCourse>créer ou lier un dépôt</SpanCourse>.</PCourse>


        <PCourse className={"simple-my"}>Pour lier le dépôt local au dépôt distant, il faut faire la commande :</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git remote add origin lien_du_depôt_Github
            </CodeCourse>
        </MultiLignesCodeWrapper>
        <PCourse className={'simple-mt'}>Cela va enregistrer sous le label <SpanCourse>origin</SpanCourse> le dépôt distant. Le label est très important, car vous pouvez lier plusieurs dépôts distants.</PCourse>


        <PCourse className={'simple-my'}>Il ne reste plus qu&apos;à s&apos;assurer d&apos;être sur la bonne branche (nous parlerons des branches un peu plus tard) en effectuant la commande : </PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git branch -M main
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <PCourse className={"simple-my"}>Nous sommes prêt, nous pouvons <SpanCourse>push</SpanCourse> sur Github notre dépôt local avec la commande :</PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git push origin main
            </CodeCourse>
        </MultiLignesCodeWrapper>


        <PCourse className={"simple-my"}>Cela va <SpanCourse>merger</SpanCourse> la branche <SpanCourse>main</SpanCourse> locale sur le dépôt distant.</PCourse>


        <PCourse className={'simple-mb'}>En équipe, avant de push, il faut toujours s&apos;assurer d&apos;<SpanCourse>être à jour</SpanCourse> avec le dépôt distant avec la commande : </PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git pull origin main
            </CodeCourse>
        </MultiLignesCodeWrapper>



        <H2Course>Cloner un dépôt</H2Course>

        <PCourse>Il est possible de cloner un dépôt distant sur votre machine avec la commande : </PCourse>
        <MultiLignesCodeWrapper className={"simple-my"}>
            <CodeCourse langage={"bash"}>
                git clone lienDuDepôtGithub
            </CodeCourse>
        </MultiLignesCodeWrapper>
        <PCourse>Cela va créer un dossier avec le nom du dépôt et récupérer tout le code.</PCourse>

        <PCourse className={'simple-my'}>Ne pas oublier d&apos;exécuter la commande :</PCourse>
        <MultiLignesCodeWrapper className={"my-4"}>
            <CodeCourse langage={"bash"}>
                npm install
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <PCourse className={"simple-mt"}>Dans la plupart des projets, il faudra aussi renseigner les variables d&apos;environnement dans le fichier <SpanCourse>.env</SpanCourse> à la racine du projet avant de lancer le serveur (pour les projets Node.js en général <SpanCourse>npm run dev</SpanCourse>).</PCourse>




        <H2Course>Authentification</H2Course>
        <PCourse>Afin de push sur un dépôt distant, il est nécessaire de s&apos;authentifier.</PCourse>

        <PCourse className={'simple-my'}>En général, vous êtes redirigé vers le site Github pour vous connecter.</PCourse>
        <PCourse>Cependant si vous avez plusieurs comptes voici quelques commandes qui peuvent vous être utile :</PCourse>
        <MultiLignesCodeWrapper className={"simple-my"}>
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

        <PCourse>Enlevez <SpanCourse>--global</SpanCourse> si vous ne voulez changer seulement la configuration du projet dans lequel vous faites la commande.</PCourse>

        <PCourse className={"simple-my"}>Il est possible de vérifier les informations avec la commande : </PCourse>
        <MultiLignesCodeWrapper>
            <CodeCourse langage={"bash"}>
                git config --list
            </CodeCourse>
        </MultiLignesCodeWrapper>

        <H2Course>Concepts avancées</H2Course>
        <PCourse>Git est un outil très puissant et il est possible de faire beaucoup de choses avec.</PCourse>

        <PCourse className={"simple-mt mb-3"}>Voici quelques concepts avancés :</PCourse>
        <ULCourse>
            <LICourse>Les branches</LICourse>
            <LICourse>Les conflits</LICourse>
            <LICourse>Les tags</LICourse>
            <LICourse>Les pull requests</LICourse>
        </ULCourse>

        <PCourse className={"simple-my"}>Les branches permettent de travailler sur des fonctionnalités sans impacter le code principal. </PCourse>

        <PCourse>Cela permet de travailler en parallèle sur plusieurs fonctionnalités.</PCourse>
        <PCourse className={"simple-my"}>Les conflits surviennent lorsqu&apos;il y a des modifications sur la même ligne de code.</PCourse>

        <PCourse>Git ne sait pas quelle modification garder, il faut donc résoudre le conflit manuellement.</PCourse>
        <PCourse className={"simple-my"}>Les tags permettent de marquer un commit. Cela peut être utile pour marquer une version stable par exemple.</PCourse>
        <PCourse>Les Pull Request sont des demandes de fusion de code. Cela permet de vérifier le code avant de le fusionner avec la branche principale.</PCourse>
    </LayoutCourseCustom>
}
