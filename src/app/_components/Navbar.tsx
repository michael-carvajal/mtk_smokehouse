import React from 'react';
import { Button } from '../../components/ui/button'
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { Menu, Package2 } from 'lucide-react';
import DashboardNavLinks from './DashboardNavLinks';
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
      <div className="ablsolute top-0 left-20">
        <Sheet >
          <SheetTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="shrink-0 md:hidden absolute top-14 left-14"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Mt Kisco Smokehouse</span>
              </Link>
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
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;
