import {ReactNode} from "react";
import {cn} from "@/lib/utils";


type H2CourseProps = {
    className?: string;
    children: ReactNode;
}
export default function H2Course({className, children}: H2CourseProps) {

    return <h2 className={cn('text-green-700 mt-16 mb-6 font-bold text-2xl', className)}>{children}</h2>
}
