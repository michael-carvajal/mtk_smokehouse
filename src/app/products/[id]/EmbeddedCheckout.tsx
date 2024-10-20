import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
const stripePromise = loadStripe("pk_test_51QAuDDAOSV4xdGhW7bX3wpHlxTEkMMLvj7x7KdqEL0I20QRxe3XsboUqFDra5ej5VoCpTgttUYbqySAN36lsahfS00PgYNw92W");

export default function EmbeddedCheckoutComp() {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers :  {
    "Content-Type": "application/json",
  }, 
      body : JSON.stringify({priceId : "price_1QBnkNAOSV4xdGhWP1dQv4Yn", quantity : 2})
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
