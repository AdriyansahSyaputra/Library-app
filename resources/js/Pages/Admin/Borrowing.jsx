import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import { Head } from "@inertiajs/react";
import TableBorrow from "../../components/Layouts/Borrow/TableBorrow";
import SearchInput from "../../components/Layouts/Borrow/SearchInput";
import Filter from "../../components/Layouts/Borrow/Filter";

const Borrowing = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [books, setBooks] = useState([
        {
            id: 1,
            name: "John Doe",
            book: "The Great Gatsby",
            borrow_date: "2023-01-01",
            return_date: "2023-01-15",
            status: "Dipinjam",
        },
        {
            id: 2,
            name: "Jane Smith",
            book: "1984",
            borrow_date: "2023-02-01",
            return_date: "2023-02-15",
            status: "Dipinjam",
        },
        {
            id: 3,
            name: "Alice Johnson",
            book: "To Kill a Mockingbird",
            borrow_date: "2023-03-01",
            return_date: "2023-03-15",
            status: "Dipinjam",
        },
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

    // Fungsi untuk memfilter data books
    const filteredBooks = books.filter((book) => {
        const matchesSearch =
            book.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === "" || book.status === filterStatus;
        return matchesSearch && matchesStatus;
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

                                <Filter
                                    isDarkMode={isDarkMode}
                                    setFilterStatus={setFilterStatus}
                                    filterStatus={filterStatus}
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
                                    filteredBorrow={filteredBooks}
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
