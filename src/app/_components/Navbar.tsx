// src/app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { Button, Container, Nav, NavItem } from '@shadcn/ui';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <Container className="mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" passHref>
          <a className="text-lg font-bold text-gray-900">MyApp</a>
        </Link>
        <Nav>
          <NavItem>
            <Link href="/" passHref>
              <a className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about" passHref>
              <a className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact" passHref>
              <a className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </Link>
          </NavItem>
        </Nav>
        <Button className="ml-4">Sign In</Button>
      </Container>
    </nav>
  );
};

export default Navbar;
