'use client';
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import TableComponent from '@/components/Table';
import SearchBar from '@/components/SearchBar';
import LoaderComponent from '@/components/LoaderComponent';
import { useDebounce } from '@/hooks/useDebounce';

const Listing = ({
  title,
  placeholder,
  addLink,
  addText,
  noDataText,
  fetchFn,
  deleteFn,
  getColumnsFn,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFn(setData, setLoading, setError, debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleDelete = (id) => {
    deleteFn(id, setData, setLoading, setError, debouncedSearchTerm);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-10 sm:py-16 flex justify-center items-center bg-primaryBg">
      <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-6xl bg-[#ffffff] rounded-[40px] sm:rounded-[50px] shadow-xl border-b-[15px] border-r-[6px] border-t-[4px] border-l-4 border border-[#000000] p-6 sm:p-10 md:p-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#000000] font-bold mb-6 sm:mb-10 flex items-center gap-4">
          {title}
        </h1>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder={placeholder}
        />

        {loading && <LoaderComponent />}
        {data?.length > 0 && !loading ? (
          <TableComponent
            columns={getColumnsFn(handleDelete)}
            data={data}
            loading={loading}
          />
        ) : !loading && (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-[#000000] text-center border-2 border-dashed border-zinc-300 rounded-2xl p-10 shadow-sm bg-[#ffffff]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{noDataText}</h2>
            <p className="text-base sm:text-lg text-zinc-600 mb-2">
              It looks like you haven't added any yet.
            </p>
            <p className="text-base sm:text-lg text-zinc-600 mb-6">
              Click below to add your first entry.
            </p>

            <Link href={addLink}>
              <button className="cursor-pointer mt-2 px-5 py-3 bg-[#000000] text-[#ffffff] rounded-xl hover:bg-[#000000]/90 transition flex items-center gap-2">
                <Plus className="w-5 h-5" />
                {addText}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;
