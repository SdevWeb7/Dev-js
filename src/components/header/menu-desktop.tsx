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
                <NavigationMenuTrigger className={buttonVariants({
                    variant: 'outline'
                })}>Cours</NavigationMenuTrigger>
                <NavigationMenuContent className={'flex'}>

                    <div className={'w-[170px]'}>

                        {hrefs.map((href) => (
                            <Link href={`/cours${href.href}`} key={href.title} passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full')}>
                                    {href.title}
                                </NavigationMenuLink>
                            </Link>
                        ))}

                    </div>
                    <p className={"w-[100px] font-bold flex justify-center items-center border-l-2"}>Cours</p>
                </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger className={buttonVariants({
                    variant: 'outline'
                })}>Exercices</NavigationMenuTrigger>
                <NavigationMenuContent className={'flex'}>
                    <p className={"w-[100px] font-bold flex justify-center items-center border-r-2"}>Exercices</p>

                    <div className={'w-[170px]'}>

                        {hrefs.map((href) => (
                            <Link href={`/exercice${href.href}`} key={href.title} passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full')}>
                                    {href.title}
                                </NavigationMenuLink>
                            </Link>
                        ))}
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>



            <NavigationMenuItem>
                <Link href="/profil" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), buttonVariants({
                        variant: 'outline'
                    }))}>
                        Profil
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>


            <NavigationMenuItem>
                <Link href="/aide" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), buttonVariants({
                        variant: 'outline'
                    }))}>
                        Demande d&apos;aide
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

            {session?.user?.isAdmin && (
                <NavigationMenuItem>
                    <Link href="/admin" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), buttonVariants({
                            variant: 'outline'
                        }))}>
                            Admin
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>)}
        </NavigationMenuList>
    </NavigationMenu>
}
