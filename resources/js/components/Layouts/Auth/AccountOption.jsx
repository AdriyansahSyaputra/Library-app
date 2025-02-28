import React from "react";
import { Facebook, Twitter, Github } from "lucide-react";
import PropTypes from "prop-types";

const AccountOption = ({ isDarkMode }) => {
    return (
        <div className="mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span
                        className={`px-2 ${
                            isDarkMode
                                ? "bg-gray-800 text-gray-400"
                                : "bg-white text-gray-500"
                        }`}
                    >
                        Atau masuk dengan
                    </span>
                </div>
            </div>
            <div className="mt-4 flex justify-center gap-4">
                <button className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-200">
                    <Facebook size={20} />
                </button>
                <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
                    <Twitter size={20} />
                </button>
                <button className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors duration-200">
                    <Github size={20} />
                </button>
            </div>
        </div>
    );
}

export default AccountOption;

AccountOption.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
}