import {PropsWithChildren} from "react";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";



export default async function LayoutCourse({children} : PropsWithChildren) {

    return <LayoutCourseCustom>{children}</LayoutCourseCustom>;
}
