'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '~/context/cartContext';

export default function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart();
  const [isClient, setIsClient] = useState(false);

  // Ensure this code only runs on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleQuantityChange = (priceId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(priceId);
    } else {
      updateQuantity(priceId, newQuantity);
    }
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      });

      const data = await response.json();
      if (data.url) {
        // router.push(data.url);  // Uncomment this line to redirect to Stripe Checkout page
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  // Don't render the cart until on the client
  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen text-black p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.priceId} className="rounded-md p-4 mb-4">
            <p>Price ID: {item.priceId}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.priceId, Number(e.target.value))}
              className="border 0 text-black rounded-md p-1"
            />
            <button
              onClick={() => removeItem(item.priceId)}
              className="ml-2 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}
      <Link href='/checkout'>
        <button
          onClick={handleCheckout}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
        >
          Checkout
        </button>
      </Link>
    </div>
  );
}
