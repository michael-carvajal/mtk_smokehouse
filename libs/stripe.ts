import Stripe from "stripe"

const stripeKey =  process.env.STRIPE_SECRET_KEY_TEST 

export const stripe = new Stripe(stripeKey!)
