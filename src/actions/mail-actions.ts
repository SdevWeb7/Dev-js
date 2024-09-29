"use server";

import { EmailTemplate } from '@/components/email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendEmail() {


    const {data, error} = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ["veustyle93310@gmail.com"],
        subject: 'Demande d\'aide',
        react: EmailTemplate({fromUserEmail: 'my website'}),
    });

    return {data, error};
};