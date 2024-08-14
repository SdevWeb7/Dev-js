import {ReactNode} from "react";
import {cn} from "@/lib/utils";


type LiCourseProps = {
    className?: string;
    children: ReactNode;
}
export default function LICourse({className, children}: LiCourseProps) {

    return <h1 className={cn('mb-12', className)}>{children}</h1>
}
