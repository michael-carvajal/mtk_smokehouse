import { stripe } from "libs/stripe";
import { NextRequest } from "next/server";

export default async function createCheckoutSession(items, req: NextRequest, sessionId: string | undefined) {
  console.log(typeof items);
  console.log(items);
  
  switch (req.method) {
    case "POST":
      try {
        const referer = req.headers.get('referer');
        const host = req.headers.get('host');
        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
        const origin = host ? `${protocol}://${host}` : referer;

        if (!origin) {
          throw new Error('Unable to determine the origin URL.');
        }

        // Ensure the items array is in the correct format
        if (!Array.isArray(items) || items.length === 0) {
          throw new Error('Items array is missing or empty.');
        }

        // Map over the items array to create line_items for each item in the cart
        const lineItems = items.map(item => ({
          price: item.priceId,            // Price ID of the product
          quantity: Number(item.quantity), // Convert quantity to a number
        }));

        // Create Checkout Session with multiple line items
        const session = await stripe.checkout.sessions.create({
          ui_mode: 'embedded',
          line_items: lineItems,
          mode: 'payment',
          return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        return { clientSecret: session.client_secret };
      } catch (err) {
        console.error('Error creating checkout session:', err);
        return err;
      }

    case "GET":
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId!);

        return {
          status: session.status,
          customer_email: session.customer_details?.email,
        };
      } catch (err) {
        console.error('Error retrieving session:', err);
        return err;
      }

    default:
      return "Cannot perform this method";
  }
}
