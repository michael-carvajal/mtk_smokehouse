'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function DashboardNavLinks() {
    const links = ["Content", "Orders", "Products", "Customers", "Home"];
    const pathname = usePathname()
    return (
        <>
            {links.map(link => {
                const isActive = pathname.split("/").at(-1) === link.toLowerCase() || (pathname.endsWith("homePage") && link === "Content");
                const linkClass = isActive ? 'text-foreground' : 'text-muted-foreground';
                const href = 
                link === "Home" 
                  ? "/" 
                  : link === "Content" 
                  ? `/dashboard/${link.toLowerCase()}/homePage` 
                  : `/dashboard/${link.toLowerCase()}`;
              
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
        </>
    );
}

export default DashboardNavLinks;
