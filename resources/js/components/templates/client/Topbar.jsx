import React, { useState, useRef } from "react";
import {
    Search,
    Sun,
    Moon,
    Bell,
    User,
    Settings,
    LogOut,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import ShowNotification from "./ShowNotification";
import { router, usePage } from "@inertiajs/react";
import PropTypes from "prop-types";

const Topbar = ({ toggleDarkMode, isDarkMode }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const { auth } = usePage().props;

    const notificationRef = useRef(null);
    const profileRef = useRef(null);

    const handleLogout = () => {
        router.post("logout");
    };

    return (
        <>
            <header
                className={`w-full h-16 shadow-sm flex items-center px-6 sticky top-0 z-10 ${
                    isDarkMode
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-900"
                }`}
            >
                <div className="flex items-center justify-between w-full">
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Search..."
                            className={`w-64 md:w-96 h-10 border rounded-lg pl-10 pr-4 focus:outline-none focus:ring-2 transition-all ${
                                isDarkMode
                                    ? "bg-gray-800 border-gray-700 focus:ring-indigo-600 focus:border-indigo-600 text-white"
                                    : "bg-white border-gray-200 focus:ring-indigo-100 focus:border-indigo-300 text-gray-900"
                            }`}
                        />
                        <Search
                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                                isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Toggle Theme */}
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full transition-colors ${
                                isDarkMode
                                    ? "hover:bg-gray-700 text-gray-300"
                                    : "hover:bg-gray-100 text-gray-600"
                            }`}
                        >
                            {isDarkMode ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>

                        {/* Notifications */}
                        <div className="relative" ref={notificationRef}>
                            <button
                                className={`p-2 rounded-full transition-colors relative ${
                                    showNotifications
                                        ? isDarkMode
                                            ? "bg-indigo-700"
                                            : "bg-indigo-50"
                                        : isDarkMode
                                        ? "hover:bg-gray-700"
                                        : "hover:bg-gray-100"
                                }`}
                                onClick={() =>
                                    setShowNotifications(!showNotifications)
                                }
                            >
                                <Bell
                                    className={`w-5 h-5 ${
                                        showNotifications
                                            ? "text-indigo-400"
                                            : isDarkMode
                                            ? "text-gray-300"
                                            : "text-gray-600"
                                    }`}
                                />
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            {showNotifications && (
                                <ShowNotification isDarkMode={isDarkMode} />
                            )}
                        </div>
                    </div>
                </div>
                {/* Line Vertical */}
                <div
                    className={`w-px h-8 mx-4 hidden md:block ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                ></div>

                {/* Profile Account */}
                {auth.user && (
                    <div className="relative" ref={profileRef}>
                        <button
                            className={`flex items-center gap-3 rounded-lg transition-colors p-2 ${
                                isDarkMode
                                    ? "hover:bg-gray-700"
                                    : "hover:bg-gray-50"
                            }`}
                            onClick={() =>
                                setShowProfileDropdown(!showProfileDropdown)
                            }
                        >
                            <div className="w-8 h-8 rounded-full bg-indigo-100 overflow-hidden flex items-center justify-center">
                                <img
                                    src="/assets/img/default.jpg"
                                    alt={auth.user.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="hidden md:block text-left max-w-xs md:max-w-sm">
                                <p
                                    className={`text-sm font-medium ${
                                        isDarkMode
                                            ? "text-gray-200"
                                            : "text-gray-700"
                                    } whitespace-nowrap overflow-hidden text-ellipsis`}
                                    title={auth.user.name}
                                >
                                    {auth.user.name}
                                </p>
                                <p
                                    className={`text-xs ${
                                        isDarkMode
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    } whitespace-nowrap overflow-hidden text-ellipsis`}
                                >
                                    {auth.user.jurusan || auth.user.email}
                                </p>
                            </div>
                            {showProfileDropdown ? (
                                <ChevronUp
                                    className={`w-4 h-4 ${
                                        isDarkMode
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }`}
                                />
                            ) : (
                                <ChevronDown
                                    className={`w-4 h-4 ${
                                        isDarkMode
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }`}
                                />
                            )}
                        </button>

                        {showProfileDropdown && (
                            <div
                                className={`absolute right-0 mt-2 w-56 rounded-lg shadow-lg py-2 border ${
                                    isDarkMode
                                        ? "bg-gray-800 border-gray-700"
                                        : "bg-white border-gray-100"
                                }`}
                            >
                                <div className="px-4 py-2 border-b border-gray-100 md:hidden">
                                    <p
                                        className={`text-sm font-medium ${
                                            isDarkMode
                                                ? "text-gray-200"
                                                : "text-gray-700"
                                        } whitespace-nowrap overflow-hidden text-ellipsis`}
                                        title={auth.user.name}
                                    >
                                        {auth.user.name}
                                    </p>
                                    <p
                                        className={`text-xs ${
                                            isDarkMode
                                                ? "text-gray-400"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        {auth.user.email}
                                    </p>
                                </div>

                                <a
                                    href="/profile"
                                    className={`flex items-center gap-3 px-4 py-2 text-sm ${
                                        isDarkMode
                                            ? "text-gray-200 hover:bg-gray-700"
                                            : "text-gray-700 hover:bg-gray-50"
                                    } transition-colors`}
                                >
                                    <User
                                        className={`w-4 h-4 ${
                                            isDarkMode
                                                ? "text-gray-400"
                                                : "text-gray-500"
                                        }`}
                                    />
                                    <span>Profile</span>
                                </a>

                                <a
                                    href="/settings"
                                    className={`flex items-center gap-3 px-4 py-2 text-sm ${
                                        isDarkMode
                                            ? "text-gray-200 hover:bg-gray-700"
                                            : "text-gray-700 hover:bg-gray-50"
                                    } transition-colors`}
                                >
                                    <Settings
                                        className={`w-4 h-4 ${
                                            isDarkMode
                                                ? "text-gray-400"
                                                : "text-gray-500"
                                        }`}
                                    />
                                    <span>Settings</span>
                                </a>

                                <div
                                    className={`border-t ${
                                        isDarkMode
                                            ? "border-gray-700"
                                            : "border-gray-100"
                                    } my-1`}
                                ></div>

                                <button
                                    onClick={handleLogout}
                                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm ${
                                        isDarkMode
                                            ? "text-red-400 hover:bg-red-900"
                                            : "text-red-600 hover:bg-red-50"
                                    } transition-colors`}
                                >
                                    <LogOut
                                        className={`w-4 h-4 ${
                                            isDarkMode
                                                ? "text-red-400"
                                                : "text-red-500"
                                        }`}
                                    />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </header>
        </>
    );
};

Topbar.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};

export default Topbar;
