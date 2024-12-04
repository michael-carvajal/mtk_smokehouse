'use client'
import React, { Suspense, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe("pk_test_51QAuDDAOSV4xdGhW7bX3wpHlxTEkMMLvj7x7KdqEL0I20QRxe3XsboUqFDra5ej5VoCpTgttUYbqySAN36lsahfS00PgYNw92W");

function StripeEmbeddedCheckout() {
  const params = useSearchParams();
  const cart = params.get('cart')
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session using the cart items
    return fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart), // Send the cart data
    })
      .then((res) => res.json())
      .then((data) => {
        return data.clientSecret
      });
  }, [cart]); // Rerun the function when the cart changes


  const options = { fetchClientSecret };

  return (
    <div id="checkout" style={{width : "80%"}}>
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}

function CustomEmbeddedCheckout() {
  return (
    <Suspense>
      <StripeEmbeddedCheckout />
    </Suspense>
  )
}

export default CustomEmbeddedCheckout