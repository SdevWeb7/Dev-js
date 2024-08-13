import Main from "@/components/main";
import H1 from "@/components/h1";
import CommunauteSearch from "@/components/communaute/communaute-search";
import UsersPagination from "@/components/communaute/users-pagination";
import CommunauteContent from "@/components/communaute/communaute-content";


const PER_PAGE = 3;

type PageProps = { searchParams: { [key: string]: string | undefined } }
export default async function Page({searchParams} : PageProps) {

    return <Main>

        <H1 className={"mb-12"}>Profils Communauté</H1>


        <CommunauteSearch searchKey={searchParams?.searchKey} page={parseInt(searchParams?.page || "1")} />


        <UsersPagination perPage={PER_PAGE} page={parseInt(searchParams?.page || "1")} searchKey={searchParams?.searchKey} />


        <CommunauteContent perPage={PER_PAGE} page={parseInt(searchParams?.page || "1")} searchKey={searchParams?.searchKey} />

    </Main>
}
