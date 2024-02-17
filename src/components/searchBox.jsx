import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <li className="px-4 py-2 flex items-center" >
      <button
        className=" focus:outline-none w-8 h-10 bg-white pl-2 focus:border-blue-500 rounded-tl-full rounded-bl-full"
        onClick={handleChange}
      >
        <MagnifyingGlassIcon className="w-full h-full text-gray-400" />
      </button>
      <input
        type="text"
        placeholder="Search students"
        className=" w-36 h-10 px-3 py-2 focus:outline-none focus:border-blue-500 left rounded-tr-full rounded-br-full"
      />
    </li>
  );
};

export default SearchBox;
