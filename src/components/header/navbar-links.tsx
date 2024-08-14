"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {buttonVariants} from "@/components/ui/button";

type NavbarLinksProps = {
    hrefs: { title: string; href: string; }[]
}
export default function NavbarLinks({hrefs} : NavbarLinksProps) {
    const pathname = usePathname();

    console.log(pathname);

    return <>

    {hrefs.map((route) => (
        <div key={route.href} className={"relative"}>
                <Link className={buttonVariants({
                    variant: 'link'
                })} href={route.href}>{route.title}</Link>

            {pathname.includes(route.href) && (
                <motion.div
                    layoutId={'header-active-link'}
                    className={'bg-my-primary h-2 w-full absolute -bottom-5 rounded-full'}/>)}
        </div>
    ))}
    </>;
}
