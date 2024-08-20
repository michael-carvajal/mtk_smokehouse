'use client'
import { SessionProvider } from 'next-auth/react'
import Navbar from './_components/Navbar';
import FeaturedOne from './_components/FeaturedOne';
export default function HomePage() {
  return (
    <SessionProvider>
      <Navbar />
      <main >
        <FeaturedOne />
      </main>
    </SessionProvider>
  );
}
