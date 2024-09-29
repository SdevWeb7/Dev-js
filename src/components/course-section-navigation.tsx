import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {Course, getCoursesListByCategoryAndSlug} from "@/lib/mdx/cours-mdx";


type CourseSectionNavigationProps = {
    course: Course;
}
export default async function CourseSectionNavigation({course}: CourseSectionNavigationProps) {
    const listCoursesByCategoryAndSlug = await getCoursesListByCategoryAndSlug(course.category, course.slug);

  return (
      <Card className={"border-none shadow-none"}>
        <CardContent className="flex flex-col gap-2 justify-center pt-6 lg:sticky lg:top-24">
          {listCoursesByCategoryAndSlug.map((fileName, index) => (
              <Link
                  key={index}
                  href={`/${course.category}/${course.slug}/${fileName.split('.')[0].split('-')[1]}`}
                  className={cn("rounded-md text-center p-2 capitalize", {
                      "bg-primary text-white": course.type === fileName.split('.')[0].split('-')[1],
                  })}
              >
                  {fileName.split('.')[0].split('-')[1]}
              </Link>
          ))}
        </CardContent>
      </Card>
  );
}
