"use client";

import {NavigationMenuItem, NavigationMenuLink} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {buttonVariants} from "@/components/ui/button";

const routes = [
    {
        name: "Profil",
        path: "/profil"
    },
    {
        name: "Demande d'aide",
        path: "/aide"
    }
]
export default function NavbarLinks() {
    const pathname = usePathname();

    return <>

    {routes.map((route) => (
        <div key={route.path}>
                <Link className={buttonVariants({
                    variant: 'link'
                })} href={route.path}>{route.name}</Link>

            {pathname === route.path && (
                <motion.div
                    layoutId={'header-active-link'}
                    className={'bg-my-primary h-2 w-full absolute -bottom-5 rounded-full'}/>)}
        </div>
    ))}
    </>;
}
