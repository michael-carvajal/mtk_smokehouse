'use client'
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import DashboardNavBar from './DashboardNavBar';

const RenderNavBar = () => {
  const pathname = usePathname();

  const renderNavBar = () => {
  if (pathname.startsWith('/dashboard')) {
      return <DashboardNavBar />;
    } else {
        return <Navbar />
    }
  };

  return (
    <>
      {renderNavBar()}
    </>
  );
};

export default RenderNavBar;
