import Link from 'next/link'
import React from 'react'

function ContentNavBar() {
    return (
        <nav
            className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
        >
            <Link href="#" className="font-semibold text-primary">
                Home Page
            </Link>
            <Link href="#">Our Roots</Link>
            <Link href="#">Contact / Locations</Link>
        </nav>
    )
}

export default ContentNavBar