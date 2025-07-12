"use client";
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    }
  }, [router]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        HOME PAGE
      </div>
    </>
  );
}
