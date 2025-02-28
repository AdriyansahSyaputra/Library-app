import React, { useState } from "react";
import Sidebar from "../../components/templates/client/Sidebar";
import Topbar from "../../components/templates/client/Topbar";
import CardBookBorrow from "../../components/Layouts/MyLibrary/CardBookBorrow";
import ModalDetail from "../../components/Layouts/MyLibrary/ModalDetail";

const MyLibrary = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedBook, setSelectedBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const borrowedBooks = [
        {
            id: 1,
            cover: "/assets/img/cover/1.jpg",
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description:
                "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
            borrowDate: "2023-10-01",
            returnDate: "2023-10-15",
        },
        {
            id: 2,
            cover: "/assets/img/cover/1.jpg",
            title: "1984",
            author: "George Orwell",
            description:
                "A dystopian novel set in a totalitarian society ruled by the Party.",
            borrowDate: "2023-10-05",
            returnDate: "2023-10-20",
        },
        {
            id: 3,
            cover: "/assets/img/cover/1.jpg",
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description:
                "A novel about the serious issues of rape and racial inequality.",
            borrowDate: "2023-10-10",
            returnDate: "2023-10-25",
        },
    ];

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
