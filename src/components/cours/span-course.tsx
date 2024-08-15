import {ReactNode} from "react";
import {cn} from "@/lib/utils";


type SpanCourseProps = {
    className?: string;
    children: ReactNode;
}
export default function SpanCourse({className, children}: SpanCourseProps) {

    return <span className={cn('text-black/80 text-my-primary font-bold', className)}>{children}</span>
}
