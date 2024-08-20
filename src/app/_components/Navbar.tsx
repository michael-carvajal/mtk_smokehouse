import React from 'react';
import { Button } from '../../components/ui/button'
import SignInAndOut from './signInAndOut';
const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-center items-center h-32 w-32 my-0 mt-4 rounded mx-auto bg-red-400'>
        logo
      </div>
      <div className="mx-auto px-4 py-2 flex justify-between items-center">
        <div>
          <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
            Smoked Salmon
          </Button>
          <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
            Our Roots
          </Button>
          <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
            Contact / Locations
          </Button>
          <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
            Jobs
          </Button>
          <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>
            Order Online
          </Button>
          <Button variant='ghost' className='text-slate-600'>
            <SignInAndOut />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
