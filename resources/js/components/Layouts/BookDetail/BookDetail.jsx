import React, { useState } from "react";
import { Star, ArrowLeft, BadgeCheck, CircleX } from "lucide-react";
import PropTypes from "prop-types";
import FormBorrow from "../../Fragments/FormBorrow";

const BookDetail = ({ book }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    // Fungsi untuk navigasi kembali
    const handleBack = () => {
        window.history.back();
    };

    // Fungsi untuk membuka modal
    const handleOpenModal = () => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8 mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Cover Buku */}
                    <div className="w-full md:w-1/3 h-96 rounded-lg overflow-hidden">
                        <img
                            src={`/assets/img/cover/${book.gambar}`}
                            alt={book.judul}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Detail Buku */}
                    <div className="w-full md:w-2/3 flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                {book.judul}
                            </h1>
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">
                                {book.deskripsi}
                            </p>
                            <p className="text-sm text-gray-500">
                                <span className="font-semibold">Penulis:</span>{" "}
                                {book.penulis}
                            </p>
                            {/* Status */}
                            <div className="flex items-center mb-4">
                                <p className="text-gray-600 mr-2">Status: </p>
                                {book.status.toLowerCase() === "tersedia" ? (
                                    <BadgeCheck
                                        size={16}
                                        className="text-green-600 mr-2"
                                    />
                                ) : (
                                    <CircleX
                                        size={16}
                                        className="text-red-600 mr-2"
                                    />
                                )}
                                <p className="text-gray-700 font-semibold">
                                    {book.status.charAt(0).toUpperCase() +
                                        book.status.slice(1).toLowerCase()}
                                </p>
                            </div>
                            <p className="text-sm text-gray-500">
                                <span className="font-semibold">
                                    Tanggal Terbit:
                                </span>{" "}
                                {book.tahun_terbit}
                            </p>
                        </div>

                        {/* Tombol Aksi */}
                        <div className="flex gap-4">
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-2 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Kembali
                            </button>
                            <button
                                onClick={handleOpenModal}
                                className="flex-1 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                            >
                                Pinjam Buku
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Pinjam Buku */}
            {isModalOpen && (
                <FormBorrow
                    book={selectedBook}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
};

export default BookDetail;

BookDetail.propTypes = {
    book: PropTypes.object.isRequired,
};
