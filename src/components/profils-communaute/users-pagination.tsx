import { Pagination, PaginationEllipsis, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink, PaginationContent } from "@/components/ui/pagination";
import prisma from "@/lib/db";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";


type UsersPaginationProps = {
    page: number;
    perPage: number;
}
export default async function UsersPagination({page, perPage} : UsersPaginationProps) {
        const baseUrl = `${process.env.CANONICAL_URL}/profils-communaute?page=`;
        const totalUsersPublic = await prisma.user.count({
            where: { isProfilPublic: true }
        });
        const nombrePages = Math.ceil(totalUsersPublic / perPage);

        return (
            <Pagination>
                <PaginationContent>

                    {page > 1 && (
                        <PaginationItem>
                            <PaginationPrevious href={`${baseUrl}${page-1}`} />
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
                            <PaginationNext href={`${baseUrl}${page+1}`} />
                        </PaginationItem>)}

                </PaginationContent>
            </Pagination>
        );
}
