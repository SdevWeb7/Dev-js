import {PropsWithChildren} from "react";
import {cn} from "@/lib/utils";


type ContainerProps = PropsWithChildren<{
    className?: string
}>
export default function Container ({children, className} : ContainerProps) {

    return <div className={cn("h-full max-w-6xl mx-auto", className)}>{children}</div>
}
