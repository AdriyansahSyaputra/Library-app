import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import { Head } from "@inertiajs/react";
import Header from "../../components/Layouts/BooksDashboard/Header";
import Filters from "../../components/Layouts/BooksDashboard/Filters";
import BooksTable from "../../components/Layouts/BooksDashboard/BooksTable";
import FormModal from "../../components/Layouts/BooksDashboard/FormModal";

const Books = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const [isAddBookOpen, setIsAddBookOpen] = useState(false);
    const [books, setBooks] = useState([
        {
            id: 1,
            cover: "https://via.placeholder.com/50",
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description:
                "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
            publishedDate: "1925-04-10",
            status: "Tersedia",
        },
        {
            id: 2,
            cover: "https://via.placeholder.com/50",
            title: "1984",
            author: "George Orwell",
            description:
                "A dystopian novel set in a totalitarian society ruled by the Party.",
            publishedDate: "1949-06-08",
            status: "Dipinjam",
        },
    ]);

    const [newBook, setNewBook] = useState({
        cover: "",
        title: "",
        author: "",
        description: "",
        publishedDate: "",
        status: "Tersedia",
    });

    const [filters, setFilters] = useState({
        year: "",
        status: "",
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

    const handleAddBook = () => {
        if (
            newBook.title &&
            newBook.author &&
            newBook.description &&
            newBook.publishedDate
        ) {
            setBooks([...books, { ...newBook, id: books.length + 1 }]);
            setNewBook({
                cover: "",
                title: "",
                author: "",
                description: "",
                publishedDate: "",
                status: "Tersedia",
            });
            setIsAddBookOpen(false);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filteredBooks = books.filter((book) => {
        return (
            (filters.year === "" ||
                book.publishedDate.includes(filters.year)) &&
            (filters.status === "" || book.status === filters.status)
        );
    });

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

                            <Filters
                                filters={filters}
                                handleFilterChange={handleFilterChange}
                                isDarkMode={isDarkMode}
                            />

                            <BooksTable
                                filteredBooks={filteredBooks}
                                isDarkMode={isDarkMode}
                                isDropdownOpen={isDropdownOpen}
                                toggleDropdown={toggleDropdown}
                            />

                            {isAddBookOpen && (
                                <FormModal
                                    isAddBookOpen={isAddBookOpen}
                                    setIsAddBookOpen={setIsAddBookOpen}
                                    isDarkMode={isDarkMode}
                                    handleAddBook={handleAddBook}
                                    newBook={newBook}
                                    setNewBook={setNewBook}
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
