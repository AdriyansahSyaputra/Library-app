import React from "react";
import { Sun, Moon } from "lucide-react";
import PropTypes from "prop-types";

const Toggle = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <div className="flex justify-end mb-4">
            <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                    isDarkMode ? "text-yellow-400" : "text-gray-900"
                }`}
            >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>
    );
}

export default Toggle;

Toggle.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
}