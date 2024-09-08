'use client'
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import Image  from 'next/image';
import React from 'react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { api } from '~/utils/api';

function ProductDetails() {
    const pathname = usePathname();
    const productId = pathname.split("/").at(-1);
console.log(productId);

    const { data: product, error, isLoading } = useQuery({
        queryKey: ['product', productId],
        queryFn: () => api.getProductById(productId),
        enabled: !!productId,
    });

    if (isLoading) return <div className='text-slate-800'>Loading...</div>;
    if (error) return <div className='text-slate-800'>Error: {error.message}</div>;

    return (
        <div className='text-xl text-slate-800'>
            <Card className="md:w-[400px] max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={"/"}
            alt={"product image"}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold mb-2">{product.price}</p>
          <p className="text-sm text-gray-600">{product.description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
        </div>
    );
}

export default ProductDetails;
