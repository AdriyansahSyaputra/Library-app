import React, { useState } from "react";
import Sidebar from "../../components/templates/client/Sidebar";
import Topbar from "../../components/templates/client/Topbar";
import CardBookBorrow from "../../components/Layouts/MyLibrary/CardBookBorrow";
import ModalDetail from "../../components/Layouts/MyLibrary/ModalDetail";

const MyLibrary = ({ borrowedBooks }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedBook, setSelectedBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
    };

    const handleReturnBook = () => {
        alert(`Buku "${selectedBook.title}" berhasil dikembalikan!`);
        closeModal();
    };

    return (
        <>
            <div className="max-h-screen w-full flex">
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />

                <div
                    className={`flex-1 transition-all duration-300 ease-in-out ${
                        isSidebarOpen ? "pl-60" : "pl-20"
                    }`}
                >
                    <Topbar />

                    <main className="p-6 max-w-screen-xl mx-auto">
                        <h1 className="text-2xl font-semibold mb-6">
                            Buku yang Dipinjam
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <CardBookBorrow
                                borrowedBooks={borrowedBooks}
                                openModal={openModal}
                            />
                        </div>

                        {isModalOpen && selectedBook && (
                            <ModalDetail
                                selectedBook={selectedBook}
                                closeModal={closeModal}
                                handleReturnBook={handleReturnBook}
                            />
                        )}
                    </main>
                </div>
            </div>
        </>
    );
};

export default MyLibrary;
