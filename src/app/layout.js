"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from "@/components/Sidebar";
import './globals.css'
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
  const pathname = usePathname();
  const authPaths = ['/login', '/verify-otp'];

  useEffect(() => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (!token && !authPaths.includes(pathname)) {
      window.location.href = '/login';
    }
  }, [pathname]);

  return (
    <>
      <html>
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
          <title>SRMS</title>
        </head>
        <body>
          {authPaths.includes(pathname) ? null :
            <Sidebar />
          }
          <NextTopLoader showSpinner={false} />
          <Toaster />
          <div className={`${authPaths.includes(pathname) ? '' : 'lg:ml-64'} min-h-screen bg-[#f8f4ee]`}>
            {children}
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout; 