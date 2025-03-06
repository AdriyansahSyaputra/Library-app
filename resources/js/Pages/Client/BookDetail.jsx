import React, { useState } from "react";
import Sidebar from "../../components/templates/client/Sidebar";
import Topbar from "../../components/templates/client/Topbar";
import BookDetail from "../../components/Layouts/BookDetail/BookDetail";
import FormBorrow from "../../components/Fragments/FormBorrow";

const BookDetailPage = ({ book }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    // Fungsi untuk membuka modal
    const handleOpenModal = () => {
        setSelectedBook(book);
        setIsModalOpen(true);
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

                    <main className="p-6 max-w-screen-xl flex md:my-16">
                        <BookDetail
                            book={book}
                            handleOpenModal={handleOpenModal}
                        />
                    </main>
                </div>
            </div>

            {/* Modal Pinjam Buku */}
            {isModalOpen && (
                <FormBorrow
                    book={selectedBook}
                    setIsModalOpen={setIsModalOpen}
                    setShowAlert={setShowAlert}
                />
            )}
        </>
    );
};

export default BookDetailPage;
