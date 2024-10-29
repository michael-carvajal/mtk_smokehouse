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

  const handleQuantityChange = (priceId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(priceId);
    } else {
      updateQuantity(priceId, newQuantity);
    }
  };

  // Don't render the cart until on the client
  if (!isClient) {
    return null;
  }

  // Encode the cart array as a JSON string and then encodeURIComponent
  const cartQueryString = encodeURIComponent(JSON.stringify(cart));
  let cartLength = cart.length;
  return (
    <div className="min-h-screen text-black p-4 flex flex-col gap-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartLength === 0 ? (
        <p className="text-lg">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.priceId} className="rounded-md">
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

      {/* Pass the cart as an encoded JSON string in the URL */}
      {cartLength === 0 ? 
      <Link href='/products'>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
        Shop our products
      </button>
    </Link>
      :
      
      <Link href={`/checkout?cart=${cartQueryString}`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
          Checkout
        </button>
      </Link>}
    </div>
  );
}
