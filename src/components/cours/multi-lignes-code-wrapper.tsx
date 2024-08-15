import {PropsWithChildren} from "react";
import {cn} from "@/lib/utils";


type MultiLignesCodeWrapperProps = PropsWithChildren<{
    className?: string;
}>;

export default function MultiLignesCodeWrapper({className="", children} : MultiLignesCodeWrapperProps) {

    return <div className={cn('w-fit bg-[#FDF6E3] p-2 rounded-xl', className)}>{children}</div>;
}
