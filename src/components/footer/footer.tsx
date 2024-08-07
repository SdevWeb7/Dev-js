import Link from "next/link";
import {auth} from "@/lib/auth-no-edge";
import {Calistoga} from "next/font/google";
import {cn} from "@/lib/utils";

const calistoga = Calistoga({ subsets: ["latin"], weight: "400"});

export default async function Footer() {
    const session = await auth();

    return <footer className={cn('border-t-2 flex justify-between items-center py-2 mt-auto px-8 text-2xl font-bold', calistoga.className)}>

        <p><span className={'text-my-primary'}>Dev</span>.js</p>

        <p className={'text-sm font-normal'}>MAJ 07/08/2024</p>

        {session?.user?.isAdmin && <Link href={'/admin'}>Admin</Link>}

    </footer>
}
