'use client'

import FeaturedOne from "../_components/FeaturedOne";

export default function HomePage() {
  return (
    <main >

      <div className='text-slate-800 flex flex-col gap-8 justify-center items-center flex-1'>
        <h1 className='text-2xl font-bold text-center'>Welcome To MT Kisco smokehouse</h1>
        <h3 className='text-sm'>520 Lexington Ave, Mt Kisco, NY 10549</h3>
        <FeaturedOne />
      </div>
    </main>
  );
}
