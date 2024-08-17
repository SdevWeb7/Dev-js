import { Pagination, PaginationEllipsis, PaginationItem, PaginationContent } from "@/components/ui/pagination";
import prisma from "@/lib/db";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";
import * as React from "react";
import {cn} from "@/lib/utils";


type UsersPaginationProps = {
    page: number;
    perPage: number;
    searchKey: string | undefined;
}
export default async function UsersPagination({page, perPage, searchKey} : UsersPaginationProps) {
        const baseUrl = searchKey ? `${process.env.CANONICAL_URL}/communaute?searchKey=${searchKey}&page=` : `${process.env.CANONICAL_URL}/communaute?page=`;
        const totalUsersPublic = await prisma.user.count({
            where: {
                AND: [
                    { isProfilPublic: true },
                    ...(searchKey ? [{
                        OR: [
                            { firstname: { contains: searchKey ?? "" } },
                            { lastname: { contains: searchKey ?? "" } },
                        ]
                    }] : [])
                ]
            },
        });
        const nombrePages = Math.ceil(totalUsersPublic / perPage);

        return (
            <Pagination>
                <PaginationContent>

                    {page > 1 && (
                        <PaginationItem>
                            <Link
                                className={buttonVariants({
                                   variant: "ghost",
                                })}
                                href={`${baseUrl}${page-1}`}>
                                    <ChevronLeftIcon className="h-4 w-4 mr-1" />
                                    <span>Page précédente</span>
                            </Link>
                        </PaginationItem>)}

                    {page > 2 && (
                        <PaginationItem>
                            <Link href={`${baseUrl}1`}>
                                <PaginationEllipsis />
                            </Link>
                        </PaginationItem>)}





                    {nombrePages > 1 && page > 1 && (
                        <PaginationItem>
                            <Link
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "icon"
                                })}
                                href={`${baseUrl}${page === 1 ? 1 : page - 1}`}>{page === 1 ? 1 : page - 1}</Link>
                        </PaginationItem>)}



                        <PaginationItem>
                            <Link
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "icon"
                                })}
                                href={`${baseUrl}${page}`}>{page}</Link>
                        </PaginationItem>


                    {page < nombrePages  && nombrePages > 2 && (
                        <PaginationItem>
                            <Link
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "icon"
                                })}
                                href={`${baseUrl}${page === nombrePages ? nombrePages : page + 1}`}>{page === nombrePages ? nombrePages : page + 1}</Link>
                        </PaginationItem>)}



                    {page < (totalUsersPublic / perPage - 1) && (
                        <PaginationItem>
                            <Link href={`${baseUrl}${nombrePages}`}>
                                <PaginationEllipsis />
                            </Link>
                        </PaginationItem>)}

                    {page < (nombrePages) && (
                        <PaginationItem>
                            <Link
                                className={buttonVariants({
                                    variant: "ghost",
                                })}
                                href={`${baseUrl}${page + 1}`}>
                                <span>Page suivante</span>
                                <ChevronRightIcon className="h-4 w-4 ml-1" />
                            </Link>
                        </PaginationItem>)}

                </PaginationContent>
            </Pagination>
        );
}
