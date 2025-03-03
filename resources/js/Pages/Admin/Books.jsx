import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import { Head, router } from "@inertiajs/react";
import Header from "../../components/Layouts/BooksDashboard/Header";
import Filters from "../../components/Layouts/BooksDashboard/Filters";
import BooksTable from "../../components/Layouts/BooksDashboard/BooksTable";
import FormModal from "../../components/Layouts/BooksDashboard/FormModal";
import Alert from "../../components/Fragments/Alert";
import UpdateBookModal from "../../components/Layouts/BooksDashboard/UpdateBookModal";

const Books = ({ books, filters }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);
    const [isAddBookOpen, setIsAddBookOpen] = useState(false);
    const [isUpdateBookOpen, setIsUpdateBookOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [year, setYear] = useState(filters.year || "");
    const [status, setStatus] = useState(filters.status || "");

    // Fungsi untuk mengirim filter ke backend
    const applyFilters = () => {
        router.get(
            "/dashboard/books",
            { year, status },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    // Reset filter
    const resetFilters = () => {
        setYear("");
        setStatus("");
        router.get(
            "/dashboard/books",
            {},
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const toggleDropdown = (id) => {
        setIsDropdownOpen(isDropdownOpen === id ? null : id);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleDeleteBook = async (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus buku ini?")) {
            try {
                router.delete(`/dashboard/books/${id}`, {
                    onSuccess: () => {
                        setIsOpen(true); // Tampilkan alert
                        setTimeout(() => {
                            setIsOpen(false); // Sembunyikan alert setelah 2 detik
                        }, 2000);
                    },
                    onError: (errors) => {
                        alert("Gagal menghapus buku.");
                    },
                });
            } catch (error) {
                console.error("Error deleting book:", error);
                alert("Terjadi kesalahan saat menghapus buku.");
            }
        }
    };

    return (
        <>
            <Head title="Dashboard" />

            <Alert
                isOpen={isOpen}
                action="Success"
                message="Data Buku Berhasil Dihapus!"
            />

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

                            <Filters
                                isDarkMode={isDarkMode}
                                year={year}
                                setYear={setYear}
                                status={status}
                                setStatus={setStatus}
                                applyFilters={applyFilters}
                                resetFilters={resetFilters}
                            />

                            <BooksTable
                                books={books}
                                isDarkMode={isDarkMode}
                                isDropdownOpen={isDropdownOpen}
                                toggleDropdown={toggleDropdown}
                                handleDeleteBook={handleDeleteBook}
                                setIsUpdateBookOpen={setIsUpdateBookOpen}
                            />

                            {isAddBookOpen && (
                                <FormModal
                                    isAddBookOpen={isAddBookOpen}
                                    setIsAddBookOpen={setIsAddBookOpen}
                                    isDarkMode={isDarkMode}
                                />
                            )}

                            {isUpdateBookOpen && (
                                <UpdateBookModal
                                    setIsUpdateBookOpen={setIsUpdateBookOpen}
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
