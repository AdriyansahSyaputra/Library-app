import React, { useState } from "react";
import Sidebar from "../../components/templates/client/Sidebar";
import Topbar from "../../components/templates/client/Topbar";
import CardBookBorrow from "../../components/Layouts/MyLibrary/CardBookBorrow";
import ModalDetail from "../../components/Layouts/MyLibrary/ModalDetail";
import Alert from "../../components/Fragments/Alert";
import axios from "axios";

const MyLibrary = ({ borrowedBooks }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedBook, setSelectedBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alert, setAlert] = useState(false);
    const [books, setBooks] = useState(borrowedBooks);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const openModal = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
    };

    const handleReturnBook = async () => {
        try {
            const response = await axios.delete(
                `/api/borrow/${selectedBook.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            // Tampilkan informasi denda jika ada
            if (response.data.late_days > 0) {
                alert(
                    `Anda terlambat ${response.data.late_days} hari. Denda: Rp ${response.data.fine}`
                );
            }

            // Hapus buku yang dikembalikan dari daftar
            setBooks((prevBooks) =>
                prevBooks.filter((b) => b.id !== selectedBook.id)
            );

            // Tampilkan alert sukses
            setAlert(true);

            // Sembunyikan alert setelah 2 detik dan tutup modal
            setTimeout(() => {
                setAlert(false);
                closeModal();
            }, 2000);
        } catch (error) {
            console.error("Error saat mengembalikan buku:", error);
        }
    };

    return (
        <>
            {alert && (
                <Alert
                    isOpen={alert}
                    action="Success"
                    message="Buku berhasil dikembalikan!"
                />
            )}

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

                    <main className="p-6 max-w-screen-xl mx-auto">
                        <h1 className="text-2xl font-semibold mb-6">
                            Buku yang Dipinjam
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <CardBookBorrow
                                borrowedBooks={books}
                                openModal={openModal}
                                isDarkMode={isDarkMode}
                            />
                        </div>

                        {isModalOpen && selectedBook && (
                            <ModalDetail
                                selectedBook={selectedBook}
                                closeModal={closeModal}
                                handleReturnBook={handleReturnBook}
                                isDarkMode={isDarkMode}
                            />
                        )}
                    </main>
                </div>
            </div>
        </>
    );
};

export default MyLibrary;
