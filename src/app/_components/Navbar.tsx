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
          <Button>
            <a className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          </Button>
          <Button>
            <a className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
          </Button>
          <Button>
            <a className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </Button>
        </div>
        <SignInAndOut />
      </div>
    </nav>
  );
};

export default Navbar;
