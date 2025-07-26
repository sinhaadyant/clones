import { SearchIcon } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <form className="flex w-full max-w-[600px] min-w-0">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 min-w-0 pl-4 py-2 text-sm rounded-l-full border border-r-0 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 md:px-5 py-2 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
      >
        <SearchIcon className="size-4 md:size-5" />
      </button>
    </form>
  );
};

export default SearchInput;
