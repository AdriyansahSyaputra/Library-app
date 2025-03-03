import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import { Head } from "@inertiajs/react";
import SearchInput from "../../components/Layouts/UsersDashboard/SearchInput";
import TableUsers from "../../components/Layouts/UsersDashboard/TableUsers";

const Users = ({ users }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

    // Fungsi untuk memfilter data users
    const filteredUsers = users.filter((user) => {
        const matchesSearch =
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    // Fungsi untuk toggle dropdown action
    const toggleDropdown = (id) => {
        setIsDropdownOpen(isDropdownOpen === id ? null : id);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <Head title="Dashboard" />

            <div
                className={`${
                    isDarkMode
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-900"
                } h-screen w-full`}
            >
                <div className="flex max-h-screen">
                    <Sidebar
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        isDarkMode={isDarkMode}
                    />

                    <div
                        className={`flex-1 transition-all duration-300 ease-in-out ${
                            isSidebarOpen ? "pl-60" : "pl-20"
                        }`}
                    >
                        <Topbar
                            isDarkMode={isDarkMode}
                            setIsDarkMode={toggleDarkMode}
                        />

                        <main
                            className={`p-6 max-w-screen-xl mx-auto ${
                                isDarkMode
                                    ? "bg-gray-900 text-white"
                                    : "bg-gray-100 text-gray-900"
                            }`}
                        >
                            {/* Header, Search Input & Filter */}
                            <div className="flex items-center justify-between mb-6">
                                <SearchInput
                                    isDarkMode={isDarkMode}
                                    setSearchQuery={setSearchQuery}
                                    searchQuery={searchQuery}
                                />  
                            </div>

                            {/* Table Users */}
                            <div
                                className={`rounded-lg shadow-md overflow-hidden ${
                                    isDarkMode ? "bg-gray-800" : "bg-white"
                                }`}
                            >
                                <TableUsers
                                    isDarkMode={isDarkMode}
                                    users={filteredUsers}
                                    toggleDropdown={toggleDropdown}
                                    isDropdownOpen={isDropdownOpen}
                                />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;
