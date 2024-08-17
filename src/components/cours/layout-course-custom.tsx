import MyCustomBreadcrumb from "@/components/my-custom-breadcrumb";
import CourseSectionNavigation from "@/components/course-section-navigation";
import Main from "@/components/main";
import {ReactNode} from "react";

export default function LayoutCourseCustom({children} : { children: ReactNode }) {

    return <Main>

        <MyCustomBreadcrumb />



        <section className="flex flex-col lg:flex-row mt-8 gap-2">


            <CourseSectionNavigation />



            <article className={'lg:border-l-2 lg:pl-12 w-full overflow-hidden'}>
                {children}
            </article>


        </section>
    </Main>
}
