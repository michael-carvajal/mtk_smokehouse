'use client'
import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useCart } from '~/context/cartContext';
import { useParams, useSearchParams } from 'next/navigation';

const stripePromise = loadStripe("pk_test_51QAuDDAOSV4xdGhW7bX3wpHlxTEkMMLvj7x7KdqEL0I20QRxe3XsboUqFDra5ej5VoCpTgttUYbqySAN36lsahfS00PgYNw92W");

export default function EmbeddedCheckoutComp() {
const params = useSearchParams();
const cart = params.get('cart')
console.log('data--------> ', cart);
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
        console.log('data--------> ', data);
        
        return data.clientSecret
      });
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
