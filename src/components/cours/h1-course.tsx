import {ReactNode} from "react";
import {cn} from "@/lib/utils";


type H1CourseProps = {
    className?: string;
    children: ReactNode;
}
export default function H1Course({className="", children}: H1CourseProps) {

    return <h1 className={cn('text-center text-4xl font-bold mb-20', className)}>{children}</h1>
}
