import {ReactNode} from "react";
import {cn} from "@/lib/utils";


type SpanCourseProps = {
    className?: string;
    children: ReactNode;
}
export default function SpanCourse({className, children}: SpanCourseProps) {

    return <span className={cn('mb-12', className)}>{children}</span>
}
