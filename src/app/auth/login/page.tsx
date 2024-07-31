import Main from "@/components/main";
import AuthForm from "@/components/auth/auth-form";
import H1 from "@/components/h1";

export default function Page() {

    return <Main className={'w-[300px] mx-auto'}>

        <H1 className={'mb-20'}>Connexion</H1>

        <AuthForm formType="logIn"/>


    </Main>
}
