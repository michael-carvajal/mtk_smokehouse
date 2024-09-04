import React from 'react';
import { Button } from '../../components/ui/button'
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  
  return (
    <nav>
      <Link href="/home" className='flex justify-center items-center h-32 w-32 my-0 mt-4 rounded mx-auto '>
        <Image  alt='company logo' src='/mtk_photos/logo.jpg' width="128" height="128"/>
      </Link>
      <div className="mx-auto px-4 py-2 md:flex justify-between items-center flex-wrap hidden">
          <Link href='#'>
            <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
              Smoked Salmon
            </Button>
          </Link>
          <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
            Our Roots
          </Button>
          <Link href="/home/contact">
            <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
              Contact / Locations
            </Button>
          </Link>
          <Link href='/home/products'>
            <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
              Order Online
            </Button>
          </Link>
          {/* <Button variant='ghost' className='text-slate-600'>
            <SignInAndOut />
          </Button> */}
      </div>
    </nav>
  );
};

export default Navbar;
