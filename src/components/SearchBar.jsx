import React from 'react';
import { Search } from 'lucide-react'; // Importing the Search icon from lucide-react

const SearchBar = (
    { searchTerm, setSearchTerm, placeholder } // Destructure props for search term and setter function
) => {
    return (
        <div className="mb-6 sm:mb-10 relative">
            <Search className="absolute left-4 top-3 text-[#000000]" />
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder={placeholder || "Search"}
                className="pl-14 border border-[#000000] w-full px-4 py-3 bg-[#ffffff] text-[#000000] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000000] transition"
            />
        </div>
    );
}

export default SearchBar;