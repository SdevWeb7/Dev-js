"use client";

import H1 from "@/components/h1";
import {Button} from "@/components/ui/button";
import {createCheckoutSession} from "@/actions/auth-actions";
import {useEffect, useState, useTransition} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Main from "@/components/main";
import {Table, TableBody, TableCell, TableFooter, TableRow} from "@/components/ui/table";

type SearchParamsType = { searchParams: { [key: string]: string | string[] | undefined } };
export default function Page({searchParams} : SearchParamsType) {
    const [isPending, startTransition] = useTransition();
    const { update, data } = useSession();
    const [isUpdated, setIsUpdated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const updateJWT = async () => {
            if (searchParams.success && !isUpdated) {
                await update(true);
                setIsUpdated(true);
            }
        };
        updateJWT();
    }, [searchParams.success, isUpdated, update]);

    useEffect(() => {
        if (isUpdated && data?.user?.hasAccess) {
            router.push('/?successPaiement=true');
        }
    }, [isUpdated, data?.user?.hasAccess, router]);


    return <Main className={'flex flex-col items-center gap-16'}>
        <H1>Paiement</H1>


        <h2 className={"text-xl mt-4"}>L&apos;accès aux cours <b>React</b> et <b>Next.js</b> sont accessibles après une petite contribution de 150€.</h2>
        <Table className={'max-w-2xl mx-auto border mt-2'}>
            <TableBody>
                <TableRow>
                    <TableCell>4 cours d&apos;introduction</TableCell>
                    <TableCell className="text-right">0€</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4 cours HTML / CSS</TableCell>
                    <TableCell className="text-right">0€</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4 cours Javascript / React</TableCell>
                    <TableCell className="text-right">20€</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4 cours Next.js</TableCell>
                    <TableCell className="text-right">20€</TableCell>
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell className="text-right">40€</TableCell>
                </TableRow>
            </TableFooter>
        </Table>



        {!searchParams.success && (
            <Button
                disabled={isPending}
                onClick={() => {
                    startTransition(async () => {
                        await createCheckoutSession();
                    });
                }}>Abonnement (150€)</Button>
        )}


        {searchParams.success && <p className={'text-green-700'}>Le paiement a bien été effectué.</p>}

        {searchParams.cancelled &&
           <p className={'text-red-700'}>Le paiement a échoué. Vous pouvez retenter ou nous contacter.</p>}

    </Main>;
}