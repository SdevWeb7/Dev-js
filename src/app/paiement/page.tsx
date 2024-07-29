"use client";

import H1 from "@/components/h1";
import {Button} from "@/components/ui/button";
import {createCheckoutSession} from "@/actions/auth-actions";
import {useEffect, useTransition} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

type SearchParamsType = { searchParams: { [key: string]: string | string[] | undefined } };
export default function Page({searchParams} : SearchParamsType) {
    const [isPending, startTransition] = useTransition();
    const { update, status, data } = useSession();
    const router = useRouter();

useEffect(() => {
    const updateJWT = async() => {
        if (data?.user.hasAccess || searchParams.success) {
            await update(true);
            router.push('/?successPaiement=true');
        }
    };
    updateJWT();
}, [searchParams.success, data]);
    return <div className={'flex flex-col items-center space-y-10'}>
        <H1>Un abonnement est nécessaire pour accéder au contenu Javascript, React et Next.js.</H1>

        {!searchParams.success && (
            <Button
                disabled={isPending}
                onClick={() => {
                    startTransition(async() => {
                        await createCheckoutSession();
                    });
                }}>Abonnement (89€)</Button>
        )}

        {searchParams.success && <p className={'text-sm text-green-700'}>Le paiement a bien été effectué.</p>}

        {searchParams.cancelled && <p className={'text-sm text-red-700'}>Le paiement a échoué. Vous pouvez retenter ou nous contacter.</p>}

    </div>
}