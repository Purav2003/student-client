'use client';
import React, { useState, useEffect } from 'react';// Adjust the import path as necessary
import Link from 'next/link';
import { fetchStatsCards, fetchData } from '@/helper/ViewStats'; // Adjust the import path as necessary
import StatCard from '@/components/StatCard';
import { Loader } from 'lucide-react';

export default function Home() {
  const [statsCards, setStatsCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    const a = await fetchData(setLoading);
    const stats = fetchStatsCards(a);
    setStatsCards(stats);
  }

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {loading ? (
        <Loader className="w-10 h-10 text-primaryText animate-spin" />
      ) : (
        <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-6xl bg-[#ffffff] rounded-[40px] sm:rounded-[50px] shadow-xl border-b-[15px] border-r-[6px] border-t-[4px] border-l-4 border border-primaryText p-6 sm:p-10 md:p-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primaryText font-bold mb-6 sm:mb-10 flex items-center gap-4">
            Statistics Dashboard
          </h1>

          <StatCard statsCards={statsCards} />
        </div>
      )}
    </div>
  );
}