import Logo from "@/components/logo";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu";



export default function Header() {

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
                            <Link href="/cours/html-css" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full')}>
                                    Html / Css
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/cours/tools" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full')}>
                                    Les outils
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/cours/javascript-react" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full')}>
                                    Javascript / React
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/cours/next-js" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full')}>
                                    Next.js
                                </NavigationMenuLink>
                            </Link>
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
                            <Link href="/exercices/html-css" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full')}>
                                    Html / Css
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/exercices/tools" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full')}>
                                    Les outils
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/exercices/javascript-react" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full')}>
                                    Javascript / React
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/exercices/next-js" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'w-full')}>
                                    Next.js
                                </NavigationMenuLink>
                            </Link>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>



                <NavigationMenuItem>
                    <Link href="/progression" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), buttonVariants({
                            variant: 'outline'
                        }))}>
                            Ma progression
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
            </NavigationMenuList>
        </NavigationMenu>

    </header>
}
