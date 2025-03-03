import React, { useState, useEffect } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import { Head } from "@inertiajs/react";
import TableBorrow from "../../components/Layouts/Borrow/TableBorrow";
import SearchInput from "../../components/Layouts/Borrow/SearchInput";

const Borrowing = ({ borrows }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

    // Fungsi untuk mencari buku berdasarkan nama dan tanggal pinjam
    const filteredBorrows = borrows.filter((borrow) => {
        const borrowerName = borrow.user.name.toLowerCase();
        const borrowDate = new Date(borrow.tanggal_pinjam);
        const borrowYear = borrowDate.getFullYear().toString();
        const borrowTitle = borrow.book.judul.toLowerCase();

        return (
            borrowerName.includes(searchQuery.toLowerCase()) ||
            borrowYear.includes(searchQuery.toLowerCase()) ||
            borrowTitle.includes(searchQuery.toLowerCase())
        );
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

                            {/* Table */}
                            <div
                                className={`rounded-lg shadow-md overflow-hidden ${
                                    isDarkMode ? "bg-gray-800" : "bg-white"
                                }`}
                            >
                                <TableBorrow
                                    isDarkMode={isDarkMode}
                                    borrows={filteredBorrows}
                                    isDropdownOpen={isDropdownOpen}
                                    toggleDropdown={toggleDropdown}
                                />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Borrowing;
