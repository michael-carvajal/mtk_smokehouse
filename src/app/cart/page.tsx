'use client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useCart } from '~/context/cartContext';
import { api } from '~/utils/api';
import { filterCartItems } from './filterCartItems';
import { ArrowLeftSquare, Trash } from 'lucide-react';
import { QuantityInput } from '~/components/ui/quantity-input';

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
  console.log('all products =====> ', allProducts);

  const filteredCartItems = filterCartItems(cart, allProducts);
  console.log('filtered cart items ---->', filteredCartItems);

  return (
    <div className="min-h-screen text-black p-4 flex flex-col gap-6">
      <div className='flex justify-between'>
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <Link href='/products' className='flex items-center gap-2'><ArrowLeftSquare />  Continue Shopping</Link>
      </div>
      {filteredCartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty</p>
      ) : (
        filteredCartItems.map((item) => (
          <div key={item.priceId} className="rounded-md flex items-center gap-4 p-4 border-b">
            <div className="relative aspect-[4/3] h-32 sm:h-48 md:h-48 lg:h-64">
              <Image
                fill
                src={item.imageLink}
                alt={item.name}
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-1 flex-col flex gap-4 items-center h-full">
              <p className="font-semibold">{item.name}</p>
              <QuantityInput
                value={item.quantity}
                onChange={(newQuantity) => updateQuantity(item.priceId, newQuantity)}
                min={1}
                max={10}
                step={1}
              />
              <Trash
                onClick={() => removeItem(item.priceId)}
                color='red'
                className='cursor-pointer'
              />
            </div>
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