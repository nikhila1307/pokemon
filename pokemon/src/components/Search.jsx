import { useState } from "react";


export const Search = ({searchTerm, handleChange}) => {

    
  
    return (
        <div className="flex justify-center my-8">
          <input
            type="text"
            placeholder="Search Pokemon..."
            value={searchTerm}
            onChange={handleChange}
            className="p-2 w-1/2 rounded-lg border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      );
};