import {Card} from "@/components/ui/card";
import Image from "next/image";
import defaultSmileyAvatar from "../../../public/smiley.webp";
import Link from "next/link";
import prisma from "@/lib/db";

export default async function ProfilsCommuContent() {

    const usersPublic = await prisma.user.findMany({
        where: { isProfilPublic: true },
        select: {
            firstname: true,
            lastname: true,
            bio: true,
            avatarImgSrc: true,
            urlGithub: true,
            urlLinkedIn: true,
            urlPortfolio: true,
            createdAt: true
        },
        orderBy: { createdAt: 'asc' }
    })

    return <section className={'flex flex-wrap gap-12'}>

        {usersPublic.map(user => (
            <Card
                key={user.urlGithub}
                className={"w-full min750:max-w-[400px] mt-8 pt-4 mx-auto min750:px-16 space-y-3 relative pb-8"}>
                <Image
                    src={user.avatarImgSrc || defaultSmileyAvatar}
                    alt={"avatar profil"}
                    width={300} height={200}
                    className={"mx-auto w-[300px] h-[200px] object-contain rounded-full"}/>


                <p className={'pt-8'}><b>Prénom</b> : {user.firstname ?? "non renseigné"}</p>
                <p><b>Nom</b> : {user.lastname ?? "non renseigné"}</p>
                <p><b>Bio</b> : {user.bio ?? "non renseigné"}</p>


                <Link
                    className={'block'}
                    href={user.urlLinkedIn ?? "#"}>
                    <b>LinkedIn</b> : {user.urlLinkedIn ?? "non renseigné"}</Link>
                <Link
                    className={'block'}
                    href={user.urlGithub ?? "#"}>
                    <b>Github</b> : {user.urlGithub ?? "non renseigné"}</Link>
                <Link
                    className={'block'}
                    href={user.urlPortfolio ?? "#"}>
                    <b>Portfolio</b> : {user.urlPortfolio ?? "non renseigné"}</Link>

            </Card>))}

    </section>
}
