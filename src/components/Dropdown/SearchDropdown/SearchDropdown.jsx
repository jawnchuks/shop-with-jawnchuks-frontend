import Link from "next/link";
import React from "react";

const SearchDropdown = (props) => {
  if (!props.visible) return null;

  return (
    <div className="relative">
      <div className="absolute h-screen inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute top-0 right-0 w-full h-full ">
        <div className="flex flex-col items-stretch justify-start bg-white px-6 py-8 shadow-xl">
          <input
            type="text"
            name="search"
            placeholder="What are you looking for?"
            id=""
            className="w-full my-8 px-4 text-xl lg:text-3xl py-2 focus:outline-none border-b border-secondary text-light-black font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
