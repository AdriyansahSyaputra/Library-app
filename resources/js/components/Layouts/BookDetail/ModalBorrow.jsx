import React from "react";
import PropTypes from "prop-types";
import { X, Calendar, User, BookOpen, BadgeCheck, CircleX } from "lucide-react";
import FormBorrow from "../../Fragments/FormBorrow";

const ModalBorrow = ({ book, setIsModalOpen, setShowAlert, isDarkMode }) => {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div
                    className={`rounded-lg shadow-2xl w-full max-w-3xl flex overflow-hidden ${
                        isDarkMode
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-900"
                    }`}
                >
                    {/* Bagian Kiri: Gambar Cover Buku */}
                    <div
                        className={`w-1/3 flex items-center justify-center ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                        }`}
                    >
                        <img
                            src={`/assets/img/cover/${book.gambar}`}
                            alt="Cover Buku"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Information Book */}
                    <div className="w-2/3 p-8 relative">
                        {/* Tombol Close */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                                isDarkMode
                                    ? "hover:bg-gray-700 text-gray-300"
                                    : "hover:bg-gray-100 text-gray-600"
                            }`}
                        >
                            <X size={20} />
                        </button>

                        {/* Judul Buku */}
                        <div className="flex items-center mb-6">
                            <BookOpen
                                size={24}
                                className={`mr-2 ${
                                    isDarkMode
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                }`}
                            />
                            <h2
                                className={`text-2xl font-bold ${
                                    isDarkMode ? "text-white" : "text-gray-800"
                                }`}
                            >
                                {book.judul}
                            </h2>
                        </div>

                        {/* Penulis */}
                        <div className="flex items-center mb-4">
                            <User
                                size={20}
                                className={`mr-2 ${
                                    isDarkMode
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                }`}
                            />
                            <p
                                className={`${
                                    isDarkMode
                                        ? "text-gray-300"
                                        : "text-gray-700"
                                }`}
                            >
                                Penulis: {book.penulis}
                            </p>
                        </div>

                        {/* Tahun Terbit */}
                        <div className="flex items-center mb-4">
                            <Calendar
                                size={20}
                                className={`mr-2 ${
                                    isDarkMode
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                }`}
                            />
                            <p
                                className={`${
                                    isDarkMode
                                        ? "text-gray-300"
                                        : "text-gray-700"
                                }`}
                            >
                                Tahun Terbit: {book.tahun_terbit}
                            </p>
                        </div>

                        {/* Status */}
                        <div className="flex items-center mb-4">
                            {book.status.toLowerCase() === "tersedia" ? (
                                <BadgeCheck
                                    size={20}
                                    className="text-green-600 mr-2"
                                />
                            ) : (
                                <CircleX
                                    size={20}
                                    className="text-red-600 mr-2"
                                />
                            )}
                            <p
                                className={`font-semibold ${
                                    book.status.toLowerCase() === "tersedia"
                                        ? "text-green-600"
                                        : "text-red-600"
                                }`}
                            >
                                {book.status.charAt(0).toUpperCase() +
                                    book.status.slice(1).toLowerCase()}
                            </p>
                        </div>

                        <FormBorrow
                            book={book}
                            setIsModalOpen={setIsModalOpen}
                            setShowAlert={setShowAlert}
                            isDarkMode={isDarkMode}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

ModalBorrow.propTypes = {
    book: PropTypes.object.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    setShowAlert: PropTypes.func.isRequired,
};

export default ModalBorrow;
