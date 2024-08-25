import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {PropsWithChildren} from "react";

type LinkRessourcesUtilesProps = PropsWithChildren<{
   className?: string;
    href: string;
}>;
export default function LinkRessourcesUtiles({children, className="", href}: LinkRessourcesUtilesProps) {

    return <Link className={cn(buttonVariants({
        variant: "link"
    }), "text-xl p-0 whitespace-normal inline-block simple-my w-full", className)} href={href} target="_blank">{children}</Link>
}
