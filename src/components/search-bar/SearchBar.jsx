import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchBarTerm } from '../../context/slices/SearchBarTermSlice';

function SearchBar() {
  const dispatch = useDispatch();
  const searchBarTerm = useSelector((state) => state.searchTerm.value); // Use a selector to get the search term
  const [value, setValue] = useState(searchBarTerm || ""); // Initialize with the current search term
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setSearchBarTerm(value));
  };

  return (
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="relative w-full max-w-xs">
        <input
          type="number"
          placeholder="limit ?"
          value={value}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
      >
        Filter
      </button>
    </div>
  );
}

export default SearchBar;
