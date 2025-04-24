"use client"
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="flex w-full bg-white max-w-xl mx-auto rounded-full border border-gray-300 overflow-hidden">
      <input
        type="text"
        placeholder="What do you need help with?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-6 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-900 hover:bg-blue-800 px-6 flex items-center justify-center text-white"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
}
