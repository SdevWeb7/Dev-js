import {PropsWithChildren} from "react";
import {cn} from "@/lib/utils";

type MainProps = PropsWithChildren<{
    className?: string;
}>
export default function Main({children, className=""}: MainProps) {

    return <main className={cn('my-8 p-2 min750:p-12', className)}>{children}</main>
}
