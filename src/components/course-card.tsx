import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {Course} from "@prisma/client";



type CourseCardProps = {
    course: Course
}
export default function CourseCard({course}: CourseCardProps) {

    return <Link className={'hover:scale-105 transition'} href={`/cours/${course.category}/${course.slug}/introduction`}>
        <Card className={'w-full min750:w-[350px] h-full flex flex-col gap-8 p-4'}>
            <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={course.logoImgSrc} alt={course.title} width={256} height={135} className={"mx-auto max-h-[135px] object-contain"} />
            </CardContent>
            <CardFooter className={'mt-auto'}>
                <p>{course.duration} heures</p>
            </CardFooter>
        </Card>
    </Link>
}
