import Main from "@/components/main";
import H1 from "@/components/h1";

export default function Page() {

    return <Main>

        <H1>Exercices - Git (Versioning)</H1>


        <h2>Commandes utiles</h2>

        <p>git clone adresse_du_repo</p>
        <p>git checkout</p>
        <p>git branch</p>
        <p>git pull</p>
        <p>git remote add origin</p>

        <p>git add .</p>
        <p>git commit -m &quot;message&quot;</p>
        <p>git push origin main</p>


        <p>git config --global credential.username &quot;name&quot;</p>

        <p>git config --global user.name &quot;Mona Lisa&quot;</p>
        <p>git config --global user.email &quot;Mona@gmail.com&quot;</p>
    </Main>
}

