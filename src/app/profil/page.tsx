
import Main from "@/components/main";
import H1 from "@/components/h1";
import ProfilPageWrapper from "@/components/profil/ProfilPageWrapper";
import ProfilCard from "@/components/profil/profil-card";


export default function Page() {

    return <Main>

        <H1>Profil</H1>

        <ProfilPageWrapper>
            <ProfilCard />
        </ProfilPageWrapper>

    </Main>
}
