import React from "react";
import PropTypes from "prop-types";
import { Plus } from "lucide-react";

const Header = ({ setIsAddBookOpen, isDarkMode }) => {
    return (
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Data Buku</h1>
            <button
                onClick={() => setIsAddBookOpen(true)}
                className={`flex items-center px-4 py-2 rounded-lg ${
                    isDarkMode
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-blue-500 hover:bg-blue-600"
                } text-white transition-colors`}
            >
                <Plus size={16} className="mr-2" />
                Tambah Buku
            </button>
        </div>
    );
};

Header.propTypes = {
    setIsAddBookOpen: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default Header;
