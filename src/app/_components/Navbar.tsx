import React from 'react';
import { Button } from '../../components/ui/button'
const Navbar = () => {
  return (
    <nav>
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
        <Button className="ml-4">Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
