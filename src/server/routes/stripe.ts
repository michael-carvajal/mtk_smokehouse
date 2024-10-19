import { stripe } from "libs/stripe";

export const createCheckoutSession = async () => {
  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'pr_1234', // Replace with your actual price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url: `${'http://localhost:3000'}/return.html?session_id={CHECKOUT_SESSION_ID}`,
    });

    return { clientSecret: session.client_secret };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error; // Handle the error as needed
  }
};
