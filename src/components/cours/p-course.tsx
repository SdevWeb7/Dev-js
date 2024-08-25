import {ReactNode} from "react";
import {cn} from "@/lib/utils";


type PCourseProps = {
    className?: string;
    children: ReactNode;
}
export default function PCourse({className, children}: PCourseProps) {

    return <p className={cn('text-xl font-lato', className)}>{children}</p>
}
