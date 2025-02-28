import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import { Head } from "@inertiajs/react";
import Header from "../../components/Layouts/BooksDashboard/Header";
import Filters from "../../components/Layouts/BooksDashboard/Filters";
import BooksTable from "../../components/Layouts/BooksDashboard/BooksTable";
import FormModal from "../../components/Layouts/BooksDashboard/FormModal";

const Books = ({ books }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);
    const [isAddBookOpen, setIsAddBookOpen] = useState(false);
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
                            <Header
                                setIsAddBookOpen={setIsAddBookOpen}
                                isDarkMode={isDarkMode}
                            />

                            <Filters isDarkMode={isDarkMode} />

                            <BooksTable
                                books={books}
                                isDarkMode={isDarkMode}
                                isDropdownOpen={isDropdownOpen}
                                toggleDropdown={toggleDropdown}
                            />

                            {isAddBookOpen && (
                                <FormModal
                                    isAddBookOpen={isAddBookOpen}
                                    setIsAddBookOpen={setIsAddBookOpen}
                                    isDarkMode={isDarkMode}
                                />
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Books;
