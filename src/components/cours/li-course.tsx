import {ReactNode} from "react";
import {cn} from "@/lib/utils";


type LiCourseProps = {
    className?: string;
    children: ReactNode;
}
export default function LICourse({className, children}: LiCourseProps) {

    return <li className={cn('text-xl ml-16 list-disc', className)}>{children}</li>
}
