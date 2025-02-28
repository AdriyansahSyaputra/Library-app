import React from "react";
import PropTypes from "prop-types";

const RecentInfo = ({ isDarkMode, recentBorrowers }) => {
    return (
        <div
            className={`p-4 rounded-lg shadow-md ${
                isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
        >
            <h2 className="text-lg font-semibold mb-4">Recent Borrowers</h2>
            <div className="space-y-2">
                {recentBorrowers.map((borrower, index) => (
                    <div
                        key={index}
                        className={`flex items-center space-x-4 p-2 rounded-lg transition-colors 
                  ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"}`}
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
                            <span className="text-white">👤</span>
                        </div>
                        <div>
                            <p className="font-semibold">{borrower.name}</p>
                            <p
                                className={`text-sm ${
                                    isDarkMode
                                        ? "text-gray-400"
                                        : "text-gray-500"
                                }`}
                            >
                                {borrower.book}
                            </p>
                            <p className="text-xs text-gray-400">
                                {borrower.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

RecentInfo.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    recentBorrowers: PropTypes.array.isRequired,
};  

export default RecentInfo;