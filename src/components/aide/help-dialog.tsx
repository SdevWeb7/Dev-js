"use client";

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {useState, useTransition} from "react";
import {flushSync} from "react-dom";
import {sendEmail} from "@/actions/mail-actions";
import {toast} from "@/components/ui/use-toast";


export default function HelpDialog() {
        const [helpModalIsOpen, setHelpModalIsOpen] = useState(false);
        const [isPending, startTransition] = useTransition()


        const handleSendEmail = () => {
            startTransition(async() => {
                const {data, error} = await sendEmail();
                if (error) {
                    toast({description: 'Une erreur est survenue, veuillez réessayer plus tard'});
                    return;
                }
                flushSync(() => setHelpModalIsOpen(false))
                toast({description: 'Votre demande a bien été envoyée, nous vous recontacterons bientôt'});
            });
        }

        return (
            <Dialog open={helpModalIsOpen} onOpenChange={setHelpModalIsOpen}>
                <DialogTrigger asChild>
                    <Button variant="link" className={'ml-2'}>Demande d&apos;aide</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Demande d&apos;aide</DialogTitle>
                        <DialogDescription>
                            En cliquant sur le bouton un mail va m&apos;être envoyé afin de vous recontacter sur l&apos;adresse e-mail avec laquelle vous vous êtes inscrit(e).
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <Button
                            disabled={isPending}
                            onClick={handleSendEmail}>Demander un rendez-vous</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )

}
