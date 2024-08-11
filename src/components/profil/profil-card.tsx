import {auth} from "@/lib/auth-no-edge";


export default async function ProfilCard() {
    const session = await auth();

    return <>
        <p><b>Photo de profil</b> : {session?.user.avatarImgSrc ?? "non renseigné"}</p>



        <p><b>Email</b> : {session?.user.email}</p>
        <p><b>Prénom</b> : {session?.user.firstname ?? "non renseigné"}</p>
        <p><b>Nom</b> : {session?.user.lastname ?? "non renseigné"}</p>
        <p><b>Bio</b> : {session?.user.bio ?? "non renseigné"}</p>
        <p><b>LinkedIn</b> : {session?.user.urlLinkedIn ?? "non renseigné"}</p>
        <p><b>Github</b> : {session?.user.urlGithub ?? "non renseigné"}</p>
        <p><b>Portfolio</b> : {session?.user.urlPortfolio ?? "non renseigné"}</p>
    </>
}
