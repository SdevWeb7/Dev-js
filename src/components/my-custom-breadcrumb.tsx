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

export default function MyCustomBreadcrumb() {
    const pathname = usePathname();
    const params = pathname.split('/').filter(Boolean);

    return <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link
                        href={`/cours/${params[1]}`}>
                        {params[1] === "next-js" ? "Next.js" : params[1].charAt(0).toUpperCase()+params[1].replace('-', ' & ').slice(1)}
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
                        href={`/cours/${params[1]}/${params[2]}/introduction`}>
                        {params[2].charAt(0).toUpperCase()+params[2].replace(/-/g, ' ').slice(1)}
                    </Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
}
