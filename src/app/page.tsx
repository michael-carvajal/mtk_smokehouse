'use client'
import { SessionProvider } from 'next-auth/react'
import Navbar from './_components/Navbar';
export default function HomePage() {
  return (
    <SessionProvider>
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#fffef7] to-[#feffee] text-white">
        <Navbar />
        <main >
        </main>
      </div>
    </SessionProvider>
  );
}
