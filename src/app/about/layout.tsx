'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const AboutLayout = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname(); // Hozirgi yo'lni olish

  return (
    <div className='flex'>
      <div className='bg-blue-500 py-5 w-[200px] h-[100vh] flex flex-col px-5 gap-3'>
        <Link href="/about/headphones" className={pathname === '/about/subscription' ? 'bg-blue-600 text-white px-2 py-2 rounded' : ''}>Smartfonlar</Link>
        <Link href="/about/tablets" className={pathname === '/about/price' ? 'bg-blue-600 text-white px-3 py-2 rounded' : ''}>Planshetlar</Link>
        <Link href="/about" className={pathname === '/about/books' ? 'bg-blue-600 text-white px-3 py-2 rounded' : ''}>Quloqchinlar</Link>
        <Link href="/about/memory" className={pathname === '/about/settings' ? 'bg-blue-600 text-white px-3 py-2 rounded' : ''}>Xotira kartalari</Link>
      </div>
      <div className='flex-1'>
        {children}
      </div>
    </div>
  );
}

export default AboutLayout;
