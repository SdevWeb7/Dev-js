import Link from "next/link";
import {auth} from "@/lib/auth-no-edge";


export default async function Footer() {
    const session = await auth();

    return <footer className={'border-t-2 flex justify-between items-center py-2 mt-auto px-8'}>

        <small>Dev.js</small>


        {session?.user?.isAdmin && <Link href={'/admin'}>Admin</Link>}

    </footer>
}
