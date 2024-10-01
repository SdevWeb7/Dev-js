import {getAllCourses, getCourseByCategorySlugAndType} from "@/lib/mdx/cours-mdx";
import Main from "@/components/main";
import CourseSectionNavigation from "@/components/course-section-navigation";
import MyCustomBreadcrumb from "@/components/my-custom-breadcrumb";
import MdxRemote from "@/lib/mdx/mdx-remote";
import {Metadata} from "next";


export async function generateStaticParams() {
    const allCourses = await getAllCourses(); // Une fonction que tu crées pour récupérer tous les cours

    return allCourses.map(course => ({
        category: course.category,
        slug: course.slug,
        type: course.type,
    }));
}


type MetadataProps = {
    params: {
        category: string;
        slug: string;
        type: string;
    }
}
export const generateMetadata = async ({params}: MetadataProps) : Promise<Metadata> => {
    const course = await getCourseByCategorySlugAndType(params.category, params.slug, params.type);

    if (!course) {
        return {
            title: 'Not found',
            description: 'Not found'
        };
    }
    return {
        title: course.title,
        description: course.description,
        category: course.category,
    };
}

type CourseProps = {
    params: {
        category: string;
        slug: string;
        type: string;
    },
    searchParams: string;
}
export default async function Page({params}: CourseProps) {

    const course = await getCourseByCategorySlugAndType(params.category, params.slug, params.type);

    if (!course) {
        return <div>Loading...</div>;
    }


    return <Main>

        <MyCustomBreadcrumb course={course} />



        <section className="flex flex-col lg:flex-row mt-8 gap-2">


            <CourseSectionNavigation course={course} />



            <article className={'flex-1 w-full lg:border-l-2 lg:pl-12 mt-8 lg:mt-0 break-words'}>
                <div className={'prose mx-auto'}>
                    <MdxRemote>
                        {course.content}
                    </MdxRemote>
                </div>
            </article>


        </section>
    </Main>
}
