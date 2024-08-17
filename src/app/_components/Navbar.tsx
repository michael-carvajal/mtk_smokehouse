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
        <a className="text-lg font-bold text-gray-900">MyApp</a>
        <div>
          <Button variant='ghost' className='text-slate-600'>
            Home
          </Button>
          <Button>
            About
          </Button>
          <Button>
            Contact
          </Button>
        </div>
        <SignInAndOut />
      </div>
    </nav>
  );
};

export default Navbar;
