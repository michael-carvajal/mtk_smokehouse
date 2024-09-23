import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '~/components/ui/button';
import Link from 'next/link';
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
  };

  return (
    <div className="absolute top-0 left-0">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="shrink-0 md:hidden absolute top-14 left-14"
            onClick={() => setIsOpen(true)} // Open the sheet
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link onClick={handleNavClick} href="/">
              <Button variant="ghost" className="text-slate-600 tracking-wider font-thin">
                Home
              </Button>
            </Link>
            <Link onClick={handleNavClick} href="/products">
              <Button variant="ghost" className="text-slate-600 tracking-wider font-thin">
                Smoked Salmon
              </Button>
            </Link>
            <Link onClick={handleNavClick} href="/roots">
              <Button variant="ghost" className="text-slate-600 tracking-wider font-thin">
                Our Roots
              </Button>
            </Link>
            <Link onClick={handleNavClick} href="/contact">
              <Button variant="ghost" className="text-slate-600 tracking-wider font-thin">
                Contact / Locations
              </Button>
            </Link>
            <Link onClick={handleNavClick} href="/products">
              <Button variant="ghost" className="text-slate-600 tracking-wider font-thin">
                Order Online
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
