'use client'
import { useState, useEffect, useRef } from 'react';
import FeaturedOne from "./_components/FeaturedOne";
import HomePageImage from './_components/HomePageImage';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);



    return () => {
      clearTimeout(timer);
    };
  }, []);



  return (
    <main className='w-full'>
      <div
        className={`relative h-[200px]  md:h-[400px] lg:h-[560px] overflow-hidden transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <HomePageImage />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className='text-white flex flex-col gap-8 justify-center items-center flex-1'>
            <h1 className='text-4xl font-bold text-center'>Welcome To MT Kisco Smokehouse</h1>
            <h3 className='text-xl text-center'>520 Lexington Ave, Mt Kisco, NY 10549</h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className='text-slate-800 flex flex-col gap-8 justify-center items-center flex-1'>
          <FeaturedOne />
        </div>
      </div>
    </main>
  );
}
