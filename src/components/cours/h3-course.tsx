import {ReactNode} from "react";
import {cn} from "@/lib/utils";


type H3CourseProps = {
    className?: string;
    children: ReactNode;
}
export default function H3Course({className, children}: H3CourseProps) {

    return <h3 className={cn('mb-12', className)}>{children}</h3>
}
