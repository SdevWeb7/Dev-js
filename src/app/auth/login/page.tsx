import Main from "@/components/main";
import AuthForm from "@/components/auth/auth-form";
import H1 from "@/components/h1";
import CustomToaster from "@/components/custom-toaster";

export default function Page({searchParams} : {searchParams: { [key: string]: string | string[] | undefined } }) {

    return <Main>

        <H1 className={'mb-20'}>Connexion</H1>

        <AuthForm formType="logIn"/>


        {searchParams.mustConnect && <CustomToaster message={"Veuillez vous connecter pour accéder à cette page."} />}


    </Main>
}
