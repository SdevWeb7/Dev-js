import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function page() {

    return <>
        <h1>Git - Cours</h1>

        <h2>Débuter</h2>
        <p>Pour utiliser Git, il faut d&apos;abord l&apos;installer. Pour cela, rendez-vous sur le <a href="https://git-scm.com/downloads" target="_blank">site officiel de Git</a> et téléchargez la version correspondant à votre système d'exploitation.</p>
        <p>Après avoir installé Git, vous pouvez commencer à utiliser les commandes de base depuis votre terminal (il faut ajouter le chemin de Git dans les variables d'environnement pour que les commandes soient reconnues).</p>
        <p>Il existe des outils intégrés dans les <b>IDE</b> (Integrated Development Environment) ou <b>Github Desktop</b> qui permettent de gérer les dépôts Git de manière plus visuelle, cependant il est important de connaître les commandes de bases.</p>


        <h2>Fonctionnement</h2>
        <p>La première chose à faire est de créer un dépôt. Pour cela, il suffit de se rendre dans le dossier de votre projet et de taper la commande :</p>

        <SyntaxHighlighter language="typescript" style={solarizedlight}>
            {`git init`}
        </SyntaxHighlighter>

        <p>Après cela 2 commandes sont très utiles :</p>

        <p>Ajouter un fichier en particulier</p>
        ```bash
        git add nom_du_fichier
        ```

        <p>Ajouter tous les fichiers</p>
        ```bash
        git add .
        ```
        <p>Pour finir, valider les modifications avec la commande :</p>
        ```bash
        git commit -m "Message"
        ```
        <p>Le message doit être le plus descriptif possible.</p>


        <h2>Poster son dépôt sur une plateforme</h2>
        <p><a href={"https://github.com/"} target={'_blank'}>Github</a> est une des plateformes de gestion de dépôts les plus utilisées. Elle facilite le travail d'équipe grâce à de nombreuses fonctionnalités et son interface user-friendly.</p>
        <p>Après avoir créé un compte, vous pouvez naviguer section repositories et chercher le bouton `Create new repository`.</p>
        <p>Github vous redirige et vous explique la marche à suivre.</p>
        <p>Il faut créer un dépôt ou en lier un.</p>
        <p>Pour lier le dépôt local au dépôt distant, il faut faire la commande :</p>
        ```bash
        git remote add origin lien_du_depôt_Github
        ```
        <p>Cela va enregistrer sous le label "origin" le dépôt distant. Le label est très important, car vous pouvez lier plusieurs dépôts distants.</p>


        <p>Il ne reste plus qu'à s'assurer d'être sur la bonne branche (nous parlerons des branches un peu plus tard) en effectuant la commande : </p>
        ```bash
        git branch -M main
        ```


        <p>Nous sommes prêt, nous pouvons "push" sur Github notre dépôt local avec la commande :</p>
        ```bash
        git push origin main
        ```
        <p>Cela va "merger" la branche "main" locale sur le dépôt distant.</p>

        <p>En équipe, avant de push, il faut toujours s'assurer d'être à jour avec le dépôt distant avec la commande : </p>
        ```bash
        git pull origin main
        ```

        <h2>Cloner un dépôt</h2>
        <p>Il est possible de cloner un dépôt distant sur votre machine avec la commande : </p>
        ```bash
        git clone lienDuDepôtGithub
        ```
        <p>Cela va créer un dossier avec le nom du dépôt et récupérer tout le code.</p>


        <h2>Authentification</h2>
        <p>Afin de push sur un dépôt distant, il est nécessaire de s'authentifier. En général, vous êtes redirigé vers le site Github pour vous connecter.</p>
        <p>Cependant si vous avez plusieurs comptes voici quelques commandes qui peuvent vous être utile :</p>
        ```bash
        git config --global user.name "PseudoGithub"
        git config --global user.email "EmailGithub"
        git config --global credential.username "new_username"
        ```
        <p>Enlevez "--global" si vous ne voulez changer que le projet dans lequel vous faites la commande.</p>
        <p>Il est possible de vérifier les informations avec la commande : </p>
        ```bash
        git config --list
        ```

        <h2>Concepts avancées</h2>
        <p>Git est un outil très puissant et il est possible de faire beaucoup de choses avec. Voici quelques concepts avancées :</p>
        <ul>
            <li>Les branches</li>
            <li>Les conflits</li>
            <li>Les tags</li>
            <li>Les pull requests</li>
        </ul>
        <p>Les branches permettent de travailler sur des fonctionnalités sans impacter le code principal. Cela permet de travailler en parallèle sur plusieurs fonctionnalités.</p>
        <p>Les conflits surviennent lorsqu'il y a des modifications sur la même ligne de code. Git ne sait pas quelle modification garder, il faut donc résoudre le conflit manuellement.</p>
        <p>Les tags permettent de marquer un commit. Cela peut être utile pour marquer une version stable par exemple.</p>
        <p>Les Pull Request sont des demandes de fusion de code. Cela permet de vérifier le code avant de le fusionner avec la branche principale.</p>
    </>
}
