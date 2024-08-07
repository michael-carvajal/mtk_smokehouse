import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function SignInAndOut() {
    const { status } = useSession()

    return (
        <>          {status !== "authenticated" ?
            <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href="/api/auth/signin">Sign In</Link> :
            <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href="/api/auth/signout">Sign out
            </Link>
        }</>
    )
}
