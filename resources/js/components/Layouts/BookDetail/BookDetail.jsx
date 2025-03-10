import React from "react";
import { Star, ArrowLeft, BadgeCheck, CircleX } from "lucide-react";
import PropTypes from "prop-types";

const BookDetail = ({ book, handleOpenModal, isDarkMode }) => {
    // Fungsi untuk navigasi kembali
    const handleBack = () => {
        window.history.back();
    };

    return (
        <>
            <div
                className={`max-w-4xl w-full rounded-lg shadow-md p-8 mx-auto ${
                    isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                }`}
            >
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
                            <h1
                                className={`text-3xl font-bold mb-4 ${
                                    isDarkMode ? "text-white" : "text-gray-800"
                                }`}
                            >
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
                            <p
                                className={`mb-4 ${
                                    isDarkMode
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                }`}
                            >
                                {book.deskripsi}
                            </p>
                            <p
                                className={`text-sm ${
                                    isDarkMode
                                        ? "text-gray-400"
                                        : "text-gray-500"
                                }`}
                            >
                                <span className="font-semibold">Penulis:</span>{" "}
                                {book.penulis}
                            </p>
                            {/* Status */}
                            <div className="flex items-center mb-4">
                                <p
                                    className={`mr-2 ${
                                        isDarkMode
                                            ? "text-gray-300"
                                            : "text-gray-600"
                                    }`}
                                >
                                    Status:{" "}
                                </p>
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
                                <p
                                    className={`font-semibold ${
                                        isDarkMode
                                            ? "text-gray-200"
                                            : "text-gray-700"
                                    }`}
                                >
                                    {book.status.charAt(0).toUpperCase() +
                                        book.status.slice(1).toLowerCase()}
                                </p>
                            </div>
                            <p
                                className={`text-sm ${
                                    isDarkMode
                                        ? "text-gray-400"
                                        : "text-gray-500"
                                }`}
                            >
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
                                className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors duration-200 ${
                                    isDarkMode
                                        ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Kembali
                            </button>
                            <button
                                onClick={handleOpenModal}
                                className={`flex-1 px-6 py-2 rounded-lg transition-colors duration-200 ${
                                    isDarkMode
                                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                                }`}
                            >
                                Pinjam Buku
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetail;

BookDetail.propTypes = {
    book: PropTypes.object.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
};
