import React from 'react';
import { Button } from '../../components/ui/button'
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { Menu, Package2, ShoppingCart } from 'lucide-react';
import DashboardNavLinks from './DashboardNavLinks';
import MobileNav from './MobileNavBar';
const Navbar = () => {

  return (
    <>
      <nav className='mb-10'>
        <Link href="/" className='flex justify-center items-center h-32 w-32 my-0 mt-4 rounded mx-auto '>
          <div className="relative h-full w-full">
            <Image alt='company logo' src='/mtk_photos/logo.jpg' fill
              className="object-cover rounded-lg" />
          </div>
        </Link>
        <div className="mx-auto px-4 py-2 md:flex justify-between items-center flex-wrap hidden">
          <Link href='/products'>
            <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
              Smoked Salmon
            </Button>
          </Link>
          <Link href='/roots'>
            <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
              Our Roots
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
              Contact / Locations
            </Button>
          </Link>
          <Link href='/products'>
            <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
              Order Online
            </Button>
          </Link>
          {/* <Button variant='ghost' className='text-slate-600'>
              <SignInAndOut />
            </Button> */}
        </div>
      </nav>
      <MobileNav />
      <Link href='/cart' className='text-slate-600 absolute right-14 top-14'>
        <ShoppingCart />
      </Link>
    </>
  );
};

export default Navbar;
