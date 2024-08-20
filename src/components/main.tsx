import {PropsWithChildren} from "react";
import {cn} from "@/lib/utils";

type MainProps = PropsWithChildren<{
    className?: string;
}>
export default function Main({children, className=""}: MainProps) {

    return <main className={cn('my-8 px-6 min750:px-12', className)}>{children}</main>
}
