import React, { useState } from "react";
import {
    Sun,
    Moon,
    Bell,
    ChevronDown,
    User,
    Settings,
    LogOut,
} from "lucide-react";
import ShowNotification from "./ShowNotification";

const Topbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div
            className={`${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            } 
      flex items-center justify-between p-4 shadow-sm`}
        >
            {/* Tulisan Selamat Datang */}
            <div className="text-xl font-semibold">
                Selamat datang, <span className="text-blue-500">Admin!</span>
            </div>

            {/* Input Pencarian */}
            <div className="flex-1 mx-8">
                <input
                    type="text"
                    placeholder="Cari sesuatu..."
                    className={`w-full max-w-md px-4 py-2 rounded-lg border 
            ${
                isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-gray-100 border-gray-300 text-gray-900"
            }`}
                />
            </div>

            {/* Bagian Kanan: Toggle Dark Mode, Notifikasi, dan Informasi Admin */}
            <div className="flex items-center space-x-6">
                {/* Tombol Toggle Dark Mode */}
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Ikon Notifikasi */}
                <div className="relative">
                    <button
                        onClick={() =>
                            setIsNotificationOpen(!isNotificationOpen)
                        }
                        className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                    >
                        <Bell size={20} />
                    </button>
                    {/* Preview Notifikasi */}
                    {isNotificationOpen && (
                       <ShowNotification />
                    )}
                </div>

                {/* Garis Vertikal Pembatas */}
                <div
                    className={`h-8 w-px ${
                        isDarkMode ? "bg-gray-600" : "bg-gray-300"
                    }`}
                />

                {/* Informasi Admin dan Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                    >
                        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                            <User size={20} className="text-white" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-semibold">John Doe</p>
                            <p className="text-xs text-gray-500">Admin</p>
                        </div>
                        <ChevronDown size={16} />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div
                            className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg 
              ${
                  isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-900"
              }`}
                        >
                            <div className="p-2">
                                <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-600 rounded-lg">
                                    <User size={16} />
                                    <span>Profile</span>
                                </button>
                                <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-600 rounded-lg">
                                    <Settings size={16} />
                                    <span>Settings</span>
                                </button>
                                <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-600 rounded-lg">
                                    <LogOut size={16} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
