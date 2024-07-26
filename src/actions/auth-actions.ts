"use server";

import {auth, signIn, signOut} from "@/lib/auth-no-edge";
import {authSchema} from "@/lib/zod-schemas";
import bcrypt from "bcryptjs";
import prisma from "@/lib/db";
import {redirect} from "next/navigation";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


export async function logIn(prevState: unknown, formData: unknown) {
    if (!(formData instanceof FormData)) return { message: "Invalid form data." };

    try {
        await signIn("credentials", formData);
    } catch (error) {
        throw error; // nextjs redirects throws error, so we need to rethrow it
    }
}

export async function signUp(prevState: unknown, formData: unknown) {
    if (!(formData instanceof FormData)) return { message: "Invalid form data." };

    const formDataEntries = Object.fromEntries(formData.entries());

    const validatedFormData = authSchema.safeParse(formDataEntries);
    if (!validatedFormData.success) return { message: "Invalid form data." };

    const { email, password } = validatedFormData.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await prisma.user.create({
            data: {
                email,
                hashedPassword,
            },
        });
    } catch (error) {
        return { message: "Could not create user." };
    }

    await signIn("credentials", formData);
}

export async function logOut() {
    await signOut({ redirectTo: "/" });
}

export async function createCheckoutSession() {
    const session = await auth();
    if (!session) return { message: "Not authenticated." };


    // create checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
        customer_email: session.user.email,
        line_items: [
            {
                price: "price_1PgowsGYAchVW4YpOCWBq2YK",
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `${process.env.CANONICAL_URL}/paiement?success=true`,
        cancel_url: `${process.env.CANONICAL_URL}/paiement?cancelled=true`,
    });

    // redirect user
    redirect(checkoutSession.url);
}