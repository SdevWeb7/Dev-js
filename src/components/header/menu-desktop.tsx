import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import LogOutBtn from "@/components/auth/log-out-btn";
import {auth} from "@/lib/auth-no-edge";
import NavbarLinks from "@/components/header/navbar-links";
import {
    DropdownMenu, DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";


type menuDesktopProps = {
    hrefs: { title: string; href: string; }[]
}
export default async function MenuDesktop({hrefs}: menuDesktopProps) {
    const session = await auth();


    return <nav className={"hidden min750:flex"}>


            {!session?.user?.email ?
                <Link className={buttonVariants({
                    variant: "link"
                })} href="/auth/login">Connexion</Link> :
                <LogOutBtn />}


            <NavbarLinks />

        <DropdownMenu>
            <DropdownMenuTrigger asChild  className={"hidden min750:block"}>
                <Button variant="outline">Cours</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"hidden min750:block w-56"}>
                <DropdownMenuGroup>
                    {hrefs.map((href) => (
                        <Link className={buttonVariants({
                            variant: 'link'
                        })} key={href.title} href={href.href}><DropdownMenuItem>{href.title}</DropdownMenuItem></Link>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>


    </nav>
}
