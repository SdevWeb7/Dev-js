import {auth} from "@/lib/auth-no-edge";
import Image from "next/image";
import defaultSmileyAvatar from "@/../public/smiley.webp";
import ProfilCardSwitch from "@/components/profil/profil-card-switch";
import Link from "next/link";


export default async function ProfilCard() {
    const session = await auth();


    return <>
        <Image
            src={session?.user.avatarImgSrc || defaultSmileyAvatar}
            alt={"avatar profil"}
            width={300} height={200}
            className={"mx-auto w-[300px] h-[200px] object-contain rounded-full"}/>


        <p className={'pt-8'}><b>Type de compte</b> : {session?.user.hasAccess ? "Abonné" : "Gratuit"}</p>
        <p><b>Heure(s) de cours individuelle restante(s)</b> : {session?.user.hasAccess ? `${session?.user.hoursLeft} heure(s)` : "Non abonné(e)"}</p>


        <p><b>Email</b> : {session?.user.email}</p>
        <p><b>Prénom</b> : {session?.user.firstname ?? "non renseigné"}</p>
        <p><b>Nom</b> : {session?.user.lastname ?? "non renseigné"}</p>
        <p><b>Bio</b> : {session?.user.bio ?? "non renseigné"}</p>


        <Link
            className={'block'}
            href={session?.user.urlLinkedIn ?? "#"}>
                <b>LinkedIn</b> : {session?.user.urlLinkedIn ?? "non renseigné"}</Link>
        <Link
            className={'block'}
            href={session?.user.urlGithub ?? "#"}>
                <b>LinkedIn</b> : {session?.user.urlGithub ?? "non renseigné"}</Link>
        <Link
            className={'block'}
            href={session?.user.urlPortfolio ?? "#"}>
                <b>LinkedIn</b> : {session?.user.urlPortfolio ?? "non renseigné"}</Link>


        <div className="flex items-center space-x-4 pt-8">
            <ProfilCardSwitch />
        </div>
    </>
}
