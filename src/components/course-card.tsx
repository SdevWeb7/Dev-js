import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {Course} from "@/lib/types";


type CourseCardProps = {
    course: Course
}
export default function CourseCard({course}: CourseCardProps) {

    return <Link href={course.href}>
        <Card className={'w-[300px] h-full flex flex-col gap-4'}>
            <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={course.image} alt={course.title} width={200} height={200} className={"w-[200px] mx-auto object-bottom"} />
            </CardContent>
            <CardFooter className={'mt-auto'}>
                <p>{course.duration} heures</p>
            </CardFooter>
        </Card>
    </Link>
}
