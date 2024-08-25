'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

function ProductDetails() {
const pathname = usePathname();
const productId = pathname.split("/").at(-1)
    return (
        <div className='text-xl text-slate-800'>ProductDetails for product ID {productId}</div>
    )
}

export default ProductDetails