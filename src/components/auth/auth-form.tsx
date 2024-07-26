"use client";

import { logIn, signUp } from "@/actions/auth-actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthFormBtn from "./auth-form-btn";
import { useFormState } from "react-dom";

type AuthFormProps = {
    formType: "logIn" | "signUp";
};

export default function AuthForm({ formType }: AuthFormProps) {
    const [signUpError, dispatchSignUp] = useFormState(signUp, undefined);
    const [logInError, dispatchLogIn] = useFormState(logIn, undefined);

    return (
        <form action={formType === "logIn" ? dispatchLogIn : dispatchSignUp}>
            <div className="space-y-1">
                <Label htmlFor="email">Adresse e-mail</Label>
                <Input id="email" name="email" type="email" required maxLength={100} />
            </div>

            <div className="mb-4 mt-2 space-y-1">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    maxLength={100}
                />
            </div>

            <AuthFormBtn type={formType} />

            {signUpError && (
                <p className="text-red-500 text-sm mt-2">{signUpError.message}</p>
            )}
            {logInError && (
                <p className="text-red-500 text-sm mt-2">{logInError.message}</p>
            )}
        </form>
    );
}