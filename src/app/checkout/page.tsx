'use client'
import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useCart } from '~/context/cartContext';

const stripePromise = loadStripe("pk_test_51QAuDDAOSV4xdGhW7bX3wpHlxTEkMMLvj7x7KdqEL0I20QRxe3XsboUqFDra5ej5VoCpTgttUYbqySAN36lsahfS00PgYNw92W");

export default function EmbeddedCheckoutComp() {
  const { cart } = useCart(); // Use the cart from context

  // Function to create the body for the checkout session
  const createCheckoutSessionBody = () => {
    return cart.map((item) => ({
      priceId: item.priceId,
      quantity: item.quantity
    }));
  };

  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session using the cart items
    return fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createCheckoutSessionBody()), // Send the cart data
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, [cart]); // Rerun the function when the cart changes

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
