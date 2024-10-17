import Stripe from "stripe"

const stripeKey = process.env.ENVIRONMENT === 'development' ? process.env.STRIPE_SECRET_KEY_TEST : process.env.STRIPE_SECRET_KEY

export const stripe = new Stripe(stripeKey!)
