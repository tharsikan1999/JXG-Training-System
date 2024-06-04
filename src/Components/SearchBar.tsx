import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSearch} className="w-48 max-w-md">
        <div className="flex items-center rounded-full border border-CustomYellow">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search..."
            aria-label="Search"
            value={query}
            onChange={handleInputChange}
          />
          {query && (
            <FaTimes
              className="text-CustomYellow cursor-pointer mr-2"
              onClick={clearSearch}
            />
          )}
          <button type="submit" className="focus:outline-none">
            <FaSearch className="text-CustomYellow cursor-pointer mr-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
