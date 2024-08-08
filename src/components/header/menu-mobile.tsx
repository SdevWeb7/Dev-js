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
import {cn} from "@/lib/utils";


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
                <DropdownMenuTrigger asChild  className={"block min750:hidden"}>
                    <Button variant="outline">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={"block min750:hidden w-56"}>
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


                    <Link
                        key={"aide"}
                        className={buttonVariants({
                            variant: 'link'
                        })}
                        href={"/aide"}><DropdownMenuItem>Demande d&apos;aide</DropdownMenuItem></Link></>}

                    <DropdownMenuSeparator />

                    {session?.user?.email ? <LogOutBtn className={'ml-2'} /> :
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
