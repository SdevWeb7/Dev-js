import Main from "@/components/main";
import H1 from "@/components/h1";
import ProfilsCommuContent from "@/components/profils-communaute/profils-commu-content";
import ProfilsCommuSearch from "@/components/profils-communaute/profils-commu-search";
import UsersPagination from "@/components/profils-communaute/users-pagination";


const PER_PAGE = 3;

type PageProps = { searchParams: { [key: string]: string | undefined } }
export default async function Page({searchParams} : PageProps) {

    return <Main>

        <H1 className={"mb-12"}>Profils Communauté</H1>


        <ProfilsCommuSearch />


        <UsersPagination perPage={PER_PAGE} page={parseInt(searchParams?.page || "1")} />


        <ProfilsCommuContent perPage={PER_PAGE} page={parseInt(searchParams?.page || "1")} />

    </Main>
}
