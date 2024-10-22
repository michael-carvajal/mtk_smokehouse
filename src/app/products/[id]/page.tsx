'use client';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { api } from '~/utils/api';
import { useCart } from "~/context/cartContext"; // Import the Cart Context

function ProductDetails() {
  const pathname = usePathname();
  const productId = pathname.split("/").at(-1);
  const { data: product, error, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => api.getProductById(productId),
    enabled: !!productId,
  });

  // State to manage quantity
  const [quantity, setQuantity] = useState(1); // Default quantity set to 1
  const { addItem, cart } = useCart(); // Get addItem function from cart context

  if (isLoading) return <div className='text-slate-800'>Loading...</div>;
  if (error) return <div className='text-slate-800'>Error: {error.message}</div>;

  const handleAddToCart = () => {
    if (product) {
      addItem({
        priceId: product.stripePriceId, // Assuming the product has a priceId property
        quantity,
      });
      alert(`${quantity} ${product.name} added to cart!`); // Notify user
    }
  };
console.log(cart);

  return (
    <div className='text-xl text-slate-800'>
      <Card className="md:w-[400px] max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-lg">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={product.imageLink}
              alt={"product image"}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <p className="text-2xl font-bold mb-2">{product.price}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
            {/* Quantity Selection */}
            <div className="flex items-center mt-4">
              <label htmlFor="quantity" className="mr-2">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-500 rounded-md p-1 w-16 text-center"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleAddToCart} className="w-full">Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProductDetails;
