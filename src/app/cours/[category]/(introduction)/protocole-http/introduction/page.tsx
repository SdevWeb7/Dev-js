

export default function Page() {

    return <>

        <h1>Protocole HTTP - Cours</h1>

        <p>Le protocole HTTP (HyperText Transfer Protocol) est un protocole de communication client-serveur.</p>

        <p>Il permet de transférer des données sur le web basé sur une architecture client-serveur et sur le protocole TCP/IP.</p>

        <p>Le client envoie une requête au serveur et le serveur renvoie une réponse au client.</p>


        <p><b>Le protocol HTTP est un protocole :</b></p>

        <ul>
            <li><b>Texte</b> : les requêtes et les réponses sont des messages textuels. Les messages HTTP sont composés d'une ligne de requête ou de statut, d'en-têtes et d'un corps.</li>

            <li><b>Sans état</b> (Stateless) : Cela signifie que le serveur ne conserve pas d'informations sur les requêtes précédentes du client. Chaque requête est traitée indépendamment des autres.</li>

            <li><b>Extensible</b> : Il est possible d'ajouter de nouveaux en-têtes et méthodes HTTP.</li>

            <li>De la <b>couche application du modèle OSI</b>. Il est utilisé pour transférer des ressources (texte, images, vidéos, etc.) entre un client et un serveur.</li>
        </ul>    </>
}
