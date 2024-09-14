'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function ProductsNavBar() {
    const links = ["All Products", "Add Product"]
    const pathname = usePathname()
    return (
        <nav className='grid gap-4 text-sm text-muted-foreground'>
            {links.map(link => {
                const isActive = (pathname.endsWith("products") && link === "All Products") || (pathname.endsWith("add") && link === "Add Product")  ;
                const linkClass = isActive ? 'text-foreground' : 'text-muted-foreground';
                const href = 
                link === "All Products" 
                  ? `/dashboard/products` 
                  : link === "Add Product" 
                  ? `/dashboard/products/add` 
                  : "";
              
                return (
                    <Link 
                        className={`${linkClass} transition-colors hover:text-foreground`}
                        href={href} 
                        key={`link-key-${link}`}
                    >
                        {link}
                    </Link>
                );
            })}
        </nav>
    );
}

export default ProductsNavBar