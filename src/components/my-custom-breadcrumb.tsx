"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {Slash} from "lucide-react";
import { usePathname } from "next/navigation";
import {Course} from "@/lib/mdx/cours-mdx";

type MyCustomBreadcrumbProps = {
    params: {
        category: string;
        slug: string;
        type: string;
    },
    course: Course
}
export default function MyCustomBreadcrumb({params, course}: MyCustomBreadcrumbProps) {

    return <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link
                        href={`/${params.category}`}>
                        {course.category === "next-js" ? "Next.js" : course.category.split("-").join(" ").slice(0, 1).toUpperCase() + course.category.split("-").join(" ").slice(1)}
                    </Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
                <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link
                        className={"font-bold"}
                        href={`/${params.category}/${params.slug}/introduction`}>
                        {course.title}
                    </Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
}
