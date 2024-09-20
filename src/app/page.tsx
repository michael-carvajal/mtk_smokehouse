'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import FeaturedOne from "./_components/FeaturedOne";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.1}px)`,
  }

  return (
    <main className='w-full'>
      <div 
        className={`relative h-screen overflow-hidden transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-busy={!isVisible}
        ref={imageRef}
      >
        <div style={parallaxStyle} className="absolute inset-0 hidden md:block ">
          <Image
            src="/mtk_photos/homePageImage.jpg"
            alt="MT Kisco Smokehouse background"
            layout="fill"
            objectFit="cover"
            priority
            
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className='text-white flex flex-col gap-8 justify-center items-center flex-1'>
            <h1 className='text-4xl font-bold text-center'>Welcome To MT Kisco Smokehouse</h1>
            <h3 className='text-xl'>520 Lexington Ave, Mt Kisco, NY 10549</h3>
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