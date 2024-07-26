"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

type AuthFormBtnProps = {
    type: "logIn" | "signUp";
};

export default function AuthFormBtn({ type }: AuthFormBtnProps) {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending}>
            {type === "logIn" ? "Connexion" : "Inscription"}
        </Button>
    );
}