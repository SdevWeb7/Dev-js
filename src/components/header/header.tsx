import Logo from "@/components/logo";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu";
import {auth} from "@/lib/auth-no-edge";


const hrefs = [
    {
        title: 'Introduction',
        href: '/introduction'
    },
    {
        title: 'Html / Css',
        href: '/html-css'
    },
    {
        title: 'Javascript / React',
        href: '/javascript-react'
    },
    {
        title: 'Next.js',
        href: '/next-js'
    }

    ]
export default async function Header() {
    const session = await auth();

    return <header className={'flex items-center justify-between border-b-2'}>

        <Logo />


        <NavigationMenu>
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

    </header>
}
