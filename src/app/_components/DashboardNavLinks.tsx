import Link from 'next/link'

function DashboardNavLinks({ pathname }) {
    const links = ["Content", "Orders", "Products", "Customers", "Home"];
    console.log("path name ===>",pathname);
    
    return (
        <>{links.map(link => {
            const isActive = pathname.split("/").at(-1) === link.toLowerCase();
            const linkClass = isActive ? 'text-foreground' : 'text-muted-foreground';

            return (
                <Link 
                    className={`${linkClass} transition-colors hover:text-foreground`}
                    href={`/dashboard/${link.toLowerCase()}`} 
                    key={`link-key-${link}`}
                >
                    {link}
                </Link>
            )
        })}</>
    )
}

export default DashboardNavLinks;
