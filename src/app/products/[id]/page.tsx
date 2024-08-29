'use client'
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import React from 'react';
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
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <p>Created by: {product.createdBy}</p>
                    {/* Add more product details as needed */}
                </>
            ) : (
                <p className='bg-slate-900'>No product found for ID {productId}</p>
            )}
        </div>
    );
}

export default ProductDetails;
