import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {auth} from "@/lib/auth-no-edge";

type menuDesktopProps = {
    hrefs: {
        title: string;
        href: string;
    }[]
}
export default async function MenuDesktop({hrefs}: menuDesktopProps) {
    const session = await auth();

    return <NavigationMenu className={"hidden  md:block"}>
        <NavigationMenuList>

            <NavigationMenuItem>
                <NavigationMenuTrigger
                    className={buttonVariants({
                        variant: 'outline'
                    })}>Cours</NavigationMenuTrigger>

                <NavigationMenuContent className={'min-w-[170px]'}>
                        {hrefs.map((href) => (
                            <NavigationMenuLink
                                    href={href.href}
                                    key={href.title}
                                    className={cn(navigationMenuTriggerStyle(), 'w-full')}>{href.title}</NavigationMenuLink>
                        ))}
                </NavigationMenuContent>
            </NavigationMenuItem>



            <NavigationMenuItem>
                <NavigationMenuLink
                            href={'/profil'}
                            className={cn(navigationMenuTriggerStyle(), buttonVariants({
                                    variant: 'outline'
                            }))}>Profil</NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
                <NavigationMenuLink
                            href={'/aide'}
                            className={cn(navigationMenuTriggerStyle(), buttonVariants({
                                    variant: 'outline'
                             }))}>Demande d&apos;aide</NavigationMenuLink>
            </NavigationMenuItem>

            {session?.user?.isAdmin && (
                <NavigationMenuItem>
                        <NavigationMenuLink
                                href={'/admin'}
                                className={cn(navigationMenuTriggerStyle(), buttonVariants({
                                    variant: 'outline'
                                }))}>Admin</NavigationMenuLink>
                </NavigationMenuItem>)}
        </NavigationMenuList>
    </NavigationMenu>
}
