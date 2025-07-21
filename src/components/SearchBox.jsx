import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBox = ({ city, setCity, onSubmit, rounded = true }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`w-full flex items-center bg-white/10 backdrop-blur-md border border-white/30
                  ${rounded ? 'rounded-xl' : 'rounded-full'} overflow-hidden 
                  p-0 text-sm sm:text-base`}
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-3 py-2 sm:px-5 sm:py-2 text-white bg-transparent focus:outline-none placeholder-white flex-grow text-sm sm:text-base"
      />
      <button type="submit" className="px-3 sm:px-4 text-white">
        <FiSearch size={18} className="sm:size-5" />
      </button>
    </form>
  );
};

export default SearchBox;




