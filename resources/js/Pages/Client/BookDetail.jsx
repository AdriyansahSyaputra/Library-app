import React, { useState } from "react";
import Sidebar from "../../components/templates/client/Sidebar";
import Topbar from "../../components/templates/client/Topbar";
import BookDetail from "../../components/Layouts/BookDetail/BookDetail";
import ModalBorrow from "../../components/Layouts/BookDetail/ModalBorrow";

const BookDetailPage = ({ book }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Fungsi untuk membuka modal
    const handleOpenModal = () => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <div
                className={`max-h-screen w-full flex ${
                    isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                }`}
            >
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
                        toggleDarkMode={toggleDarkMode}
                    />

                    <main className="p-6 max-w-screen-xl flex md:my-16">
                        <BookDetail
                            book={book}
                            handleOpenModal={handleOpenModal}
                            isDarkMode={isDarkMode}
                        />
                    </main>
                </div>
            </div>

            {/* Modal Pinjam Buku */}
            {isModalOpen && (
                <ModalBorrow
                    book={selectedBook}
                    setIsModalOpen={setIsModalOpen}
                    setShowAlert={setShowAlert}
                    isDarkMode={isDarkMode}
                />
            )}
        </>
    );
};

export default BookDetailPage;
