import {auth} from "@/lib/auth-no-edge";
import LogOutBtn from "@/components/auth/log-out-btn";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";


export default async function Footer() {
    const session = await auth();

    return <footer className={'border-t-2 flex justify-between items-center py-2 mt-auto'}>

        <small>Contenu crée par la WebStanSchool</small>

        <small>License MIT - 2024 &copy;</small>


        {session?.user ? <>
            <small>Connecté en tant que {session.user.email}</small><LogOutBtn />
        </> : <Link
                className={buttonVariants({
                    variant: 'outline'
                })}
                href="/auth/login">Connexion</Link>}

    </footer>
}
