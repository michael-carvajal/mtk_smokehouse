// CartPage component
'use client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '~/context/cartContext';
import { api } from '~/utils/api';
import { filterCartItems } from './filterCartItems';

export default function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart();
  const [isClient, setIsClient] = useState(false);
  const { isLoading, data: allProducts, isError } = useQuery({
    queryKey: ['allProducts'],
    queryFn: () => api.getAllProducts(),
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || isLoading || isError) return null;
  console.log('all roducts =====> ', allProducts );
  
  const filteredCartItems = filterCartItems(cart, allProducts);
  console.log('filtered cart items ---->', filteredCartItems);
  
  return (
    <div className="min-h-screen text-black p-4 flex flex-col gap-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {filteredCartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty</p>
      ) : (
        filteredCartItems.map((item) => (
          <div key={item.priceId} className="rounded-md flex items-center gap-4 p-4 border-b">
            <img src={item.imageLink} alt={item.name} className="w-16 h-16 rounded-md" />
            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.priceId, Number(e.target.value))}
                className="border text-black rounded-md p-1"
              />
            </div>
            <button
              onClick={() => removeItem(item.priceId)}
              className="ml-2 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}
      <Link href={filteredCartItems.length === 0 ? '/products' : `/checkout?cart=${encodeURIComponent(JSON.stringify(cart))}`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
          {filteredCartItems.length === 0 ? 'Shop our products' : 'Checkout'}
        </button>
      </Link>
    </div>
  );
}
