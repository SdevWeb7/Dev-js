import {PropsWithChildren} from "react";
import {cn} from "@/lib/utils";


type MultiLignesCodeWrapperProps = PropsWithChildren<{
    className?: string;
}>;

export default function MultiLignesCodeWrapper({className="", children} : MultiLignesCodeWrapperProps) {

    return <div className={cn('w-fit p-2 bg-bg-code rounded-xl shadow-md', className)}>{children}</div>;
}
