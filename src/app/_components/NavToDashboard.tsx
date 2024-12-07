import { Settings } from 'lucide-react';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import React from 'react'

async function NavToDashboard() {
    const session = await getServerSession();
    if (!session || !session.user) {
        return null;
    }
    return (
        <Link href='/dashboard/content/homePage' style={{ position: 'sticky', bottom: 30, marginLeft: 'auto', marginRight: 30 }}>
            <Settings height={50} width={50} color='black' />
        </Link>
    )
}

export default NavToDashboard