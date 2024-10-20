import { stripe } from "libs/stripe";
import { NextRequest } from "next/server";

// export const createCheckoutSession = async () => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       ui_mode: 'embedded',
//       line_items: [
//         {
//           // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//           price: 'price_1QBnkNAOSV4xdGhWP1dQv4Yn', // Replace with your actual price ID
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       return_url: `${'http://localhost:3000'}/return.html?session_id={CHECKOUT_SESSION_ID}`,
//     });
//     return { clientSecret: session.client_secret };
//   } catch (error) {
//     console.error('Error creating checkout session:', error);
//     throw error; // Handle the error as needed
//   }
// };

export default async function createCheckoutSession(priceId: string, quantity: string, req: NextRequest, sessionId: string | undefined) {
  console.log('priceId and quantity ===>', priceId, quantity);

  switch (req.method) {
    case "POST":
      try {
        // Determine the origin from headers
        const referer = req.headers.get('referer');
        const host = req.headers.get('host');
        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

        // Build the origin using host, fallback to referer if host is unavailable
        const origin = host ? `${protocol}://${host}` : referer;

        if (!origin) {
          throw new Error('Unable to determine the origin URL.');
        }

        // Create Checkout Session
        const session = await stripe.checkout.sessions.create({
          ui_mode: 'embedded',
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: priceId,
              quantity: Number(quantity),  // Ensure quantity is passed as a number
            },
          ],
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
