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
import HelpDialog from "@/components/aide/help-dialog";


type menuDesktopProps = {
    hrefs: { title: string; href: string; }[]
}
export default async function MenuDesktop({hrefs}: menuDesktopProps) {
    const session = await auth();


    return <nav className={"hidden min800:flex"}>

        <NavbarLinks hrefs={hrefs} />


        {session?.user?.email ?
            <DropdownMenu>
                <DropdownMenuTrigger asChild  className={"hidden min800:block ml-4"}>
                    <Button variant="outline">Profil</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={"hidden min800:block w-56"}>
                    <DropdownMenuGroup>
                            <Link className={buttonVariants({
                                variant: 'link'
                            })} href={"/profil"}><DropdownMenuItem>Profil</DropdownMenuItem></Link>

                        <HelpDialog />

                        <DropdownMenuItem><LogOutBtn /></DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu> : (
            <Link className={buttonVariants({
                variant: "link"
            })} href="/auth/login">Connexion</Link>)}


    </nav>
}
