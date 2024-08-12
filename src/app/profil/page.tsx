import Main from "@/components/main";
import H1 from "@/components/h1";
import ProfilPageWrapper from "@/components/profil/profil-page-wrapper";
import ProfilCard from "@/components/profil/profil-card";


export default async function Page() {


    return <Main>

        <H1>Profil</H1>

        <ProfilPageWrapper>
            <ProfilCard />
        </ProfilPageWrapper>

    </Main>
}
