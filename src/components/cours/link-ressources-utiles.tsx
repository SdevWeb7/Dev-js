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
    }), "text-2xl p-0 block whitespace-normal inline-block", className)} href={href} target="_blank">{children}</Link>
}
