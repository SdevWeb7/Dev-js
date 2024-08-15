import {ReactNode} from "react";
import {cn} from "@/lib/utils";


type ULCourseProps = {
    className?: string;
    children: ReactNode;
}
export default function UlCourse({className, children}: ULCourseProps) {

    return <ul className={cn('mb-12', className)}>{children}</ul>
}
