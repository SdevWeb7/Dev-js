import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";
import LogOutBtn from "@/components/auth/log-out-btn";
import {auth} from "@/lib/auth-no-edge";
import NavbarLinks from "@/components/header/navbar-links";

type menuDesktopProps = {
    hrefs: { title: string; href: string; }[]
}
export default async function MenuDesktop({hrefs}: menuDesktopProps) {
    const session = await auth();


    return <NavigationMenu className={"hidden min750:block"}>
        <NavigationMenuList className={"space-x-6"}>


            <NavigationMenuItem>
                {!session?.user ?
                    <NavigationMenuLink asChild><Link className={buttonVariants({
                        variant: "link"
                    })} href="/auth/login">Connexion</Link></NavigationMenuLink> :
                    <LogOutBtn />}
            </NavigationMenuItem>


            <NavbarLinks />


            <NavigationMenuItem>
                <NavigationMenuTrigger
                    className={buttonVariants({
                        variant: 'outline'
                    })}>Cours</NavigationMenuTrigger>

                <NavigationMenuContent className={'min-w-[170px]'}>
                    {hrefs.map((href) => (
                        <NavigationMenuLink key={href.href} asChild>
                            <Link
                                href={href.href}
                                key={href.title}
                                className={cn(navigationMenuTriggerStyle(), 'w-full')}>{href.title}</Link>
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
}
