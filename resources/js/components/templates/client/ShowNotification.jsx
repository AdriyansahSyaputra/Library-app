import React from "react";
import { Bell } from "lucide-react";
import PropTypes from "prop-types";

const ShowNotification = ({ isDarkMode }) => {
    return (
        <div
            className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg py-2 border ${
                isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-100"
            }`}
        >
            <div
                className={`px-4 py-2 border-b ${
                    isDarkMode ? "border-gray-700" : "border-gray-100"
                }`}
            >
                <h3
                    className={`font-medium ${
                        isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                >
                    Notifications
                </h3>
            </div>
            <div className="max-h-72 overflow-y-auto">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className={`px-4 py-3 hover:bg-gray-50 border-b ${
                            isDarkMode
                                ? "hover:bg-gray-700 border-gray-700"
                                : "hover:bg-gray-50 border-gray-100"
                        }`}
                    >
                        <div className="flex items-start">
                            <div
                                className={`flex-shrink-0 rounded-full p-2 ${
                                    isDarkMode
                                        ? "bg-indigo-800"
                                        : "bg-indigo-100"
                                }`}
                            >
                                <Bell
                                    className={`h-4 w-4 ${
                                        isDarkMode
                                            ? "text-indigo-400"
                                            : "text-indigo-600"
                                    }`}
                                />
                            </div>
                            <div className="ml-3 w-0 flex-1">
                                <p
                                    className={`text-sm font-medium ${
                                        isDarkMode
                                            ? "text-gray-200"
                                            : "text-gray-700"
                                    }`}
                                >
                                    New order received
                                </p>
                                <p
                                    className={`text-xs ${
                                        isDarkMode
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }`}
                                >
                                    Order #12345 needs your attention
                                </p>
                                <p
                                    className={`text-xs ${
                                        isDarkMode
                                            ? "text-gray-500"
                                            : "text-gray-400"
                                    } mt-1`}
                                >
                                    2 min ago
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className={`px-4 py-2 border-t ${
                    isDarkMode ? "border-gray-700" : "border-gray-100"
                }`}
            >
                <button
                    className={`text-sm font-medium ${
                        isDarkMode
                            ? "text-indigo-400 hover:text-indigo-300"
                            : "text-indigo-600 hover:text-indigo-800"
                    }`}
                >
                    View all notifications
                </button>
            </div>
        </div>
    );
};

ShowNotification.propTypes = {
    isDarkMode: PropTypes.bool,
};

export default ShowNotification;
