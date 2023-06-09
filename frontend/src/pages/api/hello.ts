import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";


export default async function handler(req: NextRequest, res: NextApiResponse) {
    const priceId = '';

    const successUrl = `${process.env.NEXT_URL}/sucess`
    const cancelUrl = `${process.env.NEXT_URL}/`
    const checkoutSession = await stripe.checkout.sessions.create({
        success_url:successUrl,
        cancel_url:cancelUrl,
        mode: 'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1,
            }
        ]
    })
}