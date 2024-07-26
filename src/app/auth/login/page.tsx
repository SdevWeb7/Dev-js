import Main from "@/components/main";
import AuthForm from "@/components/auth/auth-form";
import Link from "next/link";
import H1 from "@/components/h1";

export default function Page() {

    return <Main className={'w-[300px] mx-auto'}>

        <H1 className={'mb-20'}>Connexion</H1>

        <AuthForm formType="logIn"/>

        <p className="mt-6 text-sm text-zinc-500">
            Pas encore de compte?{" "}
            <Link href="/auth/signup" className="font-medium">Inscription</Link>
        </p>
    </Main>
}
