import { Pagination, PaginationEllipsis, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink, PaginationContent } from "@/components/ui/pagination";
import prisma from "@/lib/db";
import Link from "next/link";
import {cn} from "@/lib/utils";


type UsersPaginationProps = {
    page: number;
    perPage: number;
}
export default async function UsersPagination({page, perPage} : UsersPaginationProps) {
        const baseUrl = `${process.env.CANONICAL_URL}/profils-communaute?page=`;
        const totalUsersPublic = await prisma.user.count({
            where: { isProfilPublic: true }
        });


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



                    {page > 1 && (
                        <PaginationItem>
                            <PaginationLink href="#">{page > 1 ? page - 1 : 1}</PaginationLink>
                        </PaginationItem>)}


                    <PaginationItem>
                        <Link href={`${baseUrl}${Math.ceil(totalUsersPublic / perPage)}`}>{page === 1 ? 1 : page}</Link>
                    </PaginationItem>

                    {page < (totalUsersPublic / perPage - 2) && (
                        <PaginationItem>
                            <PaginationLink href="#" >{page + 1}</PaginationLink>
                        </PaginationItem>)}



                    {page < (totalUsersPublic / perPage - 2) && (
                        <PaginationItem>
                            <Link href={`${baseUrl}${Math.ceil(totalUsersPublic / perPage)}`}>
                                <PaginationEllipsis />
                            </Link>
                        </PaginationItem>)}

                    {page < (totalUsersPublic / perPage) && (
                        <PaginationItem>
                            <PaginationNext href={`${baseUrl}${page+1}`} />
                        </PaginationItem>)}

                </PaginationContent>
            </Pagination>
        );
}
