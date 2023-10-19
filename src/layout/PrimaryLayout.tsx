'use client';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] });

const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const notNavbar = [
    '/super_admin',
    '/super_admin/manage_admin',
    '/super_admin/manage_admin/create',
    '/super_admin/manage_admin/edit',
    '/super_admin/manage_service',
    '/super_admin/manage_service/create',
    '/super_admin/manage_service/edit',
    '/super_admin/manage_content',
    '/admin',
    '/admin/manage_service',
    '/admin/manage_service/create',
    '/admin/manage_service/edit',
    '/admin/manage_content',
    '/user',
    '/user/my_services',
    '/user/booking_history',
  ];

  if (notNavbar.includes(pathname)) {
    return (
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
};
export default PrimaryLayout;
