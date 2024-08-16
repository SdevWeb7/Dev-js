import {ReactNode} from "react";
import {cn} from "@/lib/utils";


type H3CourseProps = {
    className?: string;
    children: ReactNode;
}
export default function H3Course({className, children}: H3CourseProps) {

    return <h3 className={cn('text-2xl font-bold text-green-900 mt-12 mb-4', className)}>{children}</h3>
}
