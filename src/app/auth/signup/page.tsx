import Link from "next/link";
import AuthForm from "@/components/auth/auth-form";
import Main from "@/components/main";
import H1 from "@/components/h1";

export default function Page() {
    return <Main className={'w-[300px] mx-auto'}>

            <H1 className={'mb-20'}>Inscription</H1>


            <AuthForm formType="signUp" />

            <p className="mt-6 text-sm text-zinc-500">
                Déjà inscrit(e)?{" "}
                <Link href="/auth/login" className="font-medium">Connexion</Link>
            </p>
        </Main>;
}