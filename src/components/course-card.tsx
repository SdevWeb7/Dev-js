import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {CourseDatas} from "@/lib/mdx/cours-mdx";



type CourseCardProps = {
    course: CourseDatas
}
export default function CourseCard({course}: CourseCardProps) {

    return <Link className={'hover:scale-105 transition'} href={`/${course.category}/${course.slug}/introduction`}>
        <Card className={'w-full min750:w-[350px] flex flex-col justify-around h-[300px] p-4'}>
            <CardHeader className={'p-0'}>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className={'p-0'}>
                <Image src={course.logoImgSrc} alt={course.title} width={256} height={135} className={"mx-auto max-h-[135px] object-contain"} />
            </CardContent>
            <CardFooter className={'p-0'}>
                <p>{course.duration}</p>
            </CardFooter>
        </Card>
    </Link>
}
