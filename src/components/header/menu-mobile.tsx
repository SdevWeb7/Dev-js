import {Button, buttonVariants} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import {auth} from "@/lib/auth-no-edge";
import LogOutBtn from "@/components/auth/log-out-btn";
import HelpDialog from "@/components/aide/help-dialog";


type menuMobileProps = {
    hrefs: {
        title: string;
        href: string;
    }[]
}
export default async function MenuMobile({hrefs} : menuMobileProps) {
        const session = await auth();

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild  className={"block min800:hidden"}>
                    <Button variant="outline">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={"block min800:hidden w-56"}>
                    <DropdownMenuLabel>Cours</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>

                        {hrefs.map((href) => (
                            <Link className={buttonVariants({
                                variant: 'link'
                            })} key={href.title} href={href.href}><DropdownMenuItem>{href.title}</DropdownMenuItem></Link>
                        ))}
                    </DropdownMenuGroup>


                    {session?.user?.email && <>
                    <DropdownMenuSeparator />
                    <Link
                        key={"profil"}
                        className={buttonVariants({
                            variant: 'link'
                        })}
                        href={"/profil"}><DropdownMenuItem>Profil</DropdownMenuItem></Link>


                    <HelpDialog /></>}

                    <DropdownMenuSeparator />

                    {session?.user?.email ? <DropdownMenuItem><LogOutBtn /></DropdownMenuItem> :
                        <Link
                            className={buttonVariants({
                                variant: 'link'
                            })}
                            key={"login"}
                            href={"/auth/login"}><DropdownMenuItem>Connexion</DropdownMenuItem></Link>
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        )

}
