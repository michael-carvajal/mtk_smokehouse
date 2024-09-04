'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function ContentNavBar() {
    const links = ["Home Page", "Our Roots", "Contact / Locations"]
    const pathname = usePathname()
    return (
        <nav className='grid gap-4 text-sm text-muted-foreground'>
            {links.map(link => {
                const isActive = pathname.split("/").at(-1) === link.toLowerCase();
                const linkClass = isActive ? 'text-foreground' : 'text-muted-foreground';
                const href = 
                link === "Home Page" 
                  ? `/dashboard/content/homePage` 
                  : link === "Our Roots" 
                  ? `/dashboard/content/roots` 
                  : `/dashboard/content/contact`;
              
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

export default ContentNavBar