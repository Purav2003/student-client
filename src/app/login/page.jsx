"use client";
import React, { useEffect, useState } from 'react';
import LoginForm from '@/components/LoginForm';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [checkedToken, setCheckedToken] = useState(false);

  useEffect(() => {
    const storedToken = typeof window !== 'undefined' && localStorage.getItem('token');
    if (storedToken) {
      router.replace('/');
    } else {
      setCheckedToken(true);
    }
  }, [router]);

  const handleLoginSuccess = (jwt) => {
    localStorage.setItem('token', jwt);
    router.push('/');
  };

  if (!checkedToken) return null;

  return (
    <div className="login-page flex justify-center items-center h-screen min-w-full bg-[#f8f4ee]">
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
