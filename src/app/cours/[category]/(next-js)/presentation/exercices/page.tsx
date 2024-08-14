export default function page() {

    return <>

        <h1>Next.js - Présentation - Exercices</h1>



        <h2>Exercice 1</h2>

        <p>Créer un projet Next.js :</p>
        ```bash
        npx create-next-app nomduprojet
        ```
        <p>Ouvrir le dossier dans un IDE et taper :</p>
        ```bash
        npm install
        npm run dev
        ```

        <p>Ouvrir un navigateur et aller à l'adresse "http://localhost:3000"</p>

        <p>Nettoyer "page.tsx" et "style.css" et mettre une balise <b>h1</b> "Hello World!"</p>

        <p>Créer un dossier "contact" dans le dossier "app" et créer un fichier "page.tsx" avec un <b>h1</b> "Contact"</p>

        <p>Créer un fichier "header.tsx" dans le dossier component et l'appeler dans le fichier "layout.tsx"</p>
        <p>Dans ce "header.tsx", créer 2 balises <b>Link</b> qui pointent vers "/" et "/contact"</p>

        <p>Admirez que votre "header" s'affiche sur toutes les pages et que le routing est bien effectué juste en créant 2 fichiers.</p>

        <p>Entrainez vous un petit peu au style avec <b>TailwindCSS</b> dont la documentation officielle est sublime.</p>
        <p>Commencez éventuellement à coder un compteur et à vous confronter à certains bugs inconnus pendant que vous commencez à saisir le potentiel de Next.js.</p>
    </>
}
