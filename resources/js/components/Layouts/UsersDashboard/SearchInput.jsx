import React from "react";
import PropTypes from "prop-types";
import { Search } from "lucide-react";

const SearchInput = ({ searchQuery, setSearchQuery, isDarkMode }) => {
    return (
        <div className="flex items-center space-x-2 relative">
            <input
                type="text"
                placeholder="Cari user..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-64 px-4 py-2 rounded-lg border ${
                    isDarkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-100 border-gray-300"
                }`}
            />
            <Search
                size={20}
                className="text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
            />
        </div>
    );
};

SearchInput.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default SearchInput;