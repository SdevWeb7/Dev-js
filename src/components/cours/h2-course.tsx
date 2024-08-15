import {ReactNode} from "react";
import {cn} from "@/lib/utils";


type H2CourseProps = {
    className?: string;
    children: ReactNode;
}
export default function H2Course({className, children}: H2CourseProps) {

    return <h2 className={cn('mb-12', className)}>{children}</h2>
}
