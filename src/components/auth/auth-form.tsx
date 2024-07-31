"use client";

import { logIn, signUp } from "@/actions/auth-actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthFormBtn from "./auth-form-btn";
import { useFormState } from "react-dom";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";

type AuthFormProps = {
    formType: "logIn" | "signUp";
};

export default function AuthForm({ formType }: AuthFormProps) {
    const [signUpError, dispatchSignUp] = useFormState(signUp, undefined);
    const [logInError, dispatchLogIn] = useFormState(logIn, undefined);

    return (
        <Card className="max-w-[280px] sm:max-w-[350px] mx-auto">
            <CardHeader>
                <CardTitle>Veuillez entrer vos identifiants</CardTitle>
                <CardDescription>{formType === "logIn" ? "Connectez-vous" : 'Inscrivez vous'} afin de profiter des cours React et Next.js</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={formType === "logIn" ? dispatchLogIn : dispatchSignUp}>
                    <div className="space-y-1">
                        <Label htmlFor="email">Adresse e-mail</Label>
                        <Input id="email" name="email" type="email" required maxLength={100}/>
                    </div>

                    <div className="mb-6 mt-2 space-y-1">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            maxLength={100}
                        />
                    </div>

                    <AuthFormBtn type={formType}/>

                    {signUpError && (
                        <p className="text-red-500 text-sm mt-2">{signUpError.message}</p>
                    )}
                    {logInError && (
                        <p className="text-red-500 text-sm mt-2">{logInError.message}</p>
                    )}
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">

                {formType === "logIn" ? (
                <p className="text-sm text-zinc-500">
                    Pas encore de compte?{" "}
                    <Link href="/auth/signup" className="font-medium">Inscription</Link>
                </p>
                ) : (
                    <p className="text-sm text-zinc-500">
                        Déjà inscrit(e)?{" "}
                        <Link href="/auth/login" className="font-medium">Connexion</Link>
                    </p>)}

            </CardFooter>
        </Card>
    );
}