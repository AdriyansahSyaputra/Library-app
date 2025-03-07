import React from "react";
import PropTypes from "prop-types";
import { X, Calendar, User, BookOpen, BadgeCheck, CircleX } from "lucide-react";
import FormBorrow from "../../Fragments/FormBorrow";

const ModalBorrow = ({ book, setIsModalOpen, setShowAlert }) => {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl flex overflow-hidden">
                    {/* Bagian Kiri: Gambar Cover Buku */}
                    <div className="w-1/3 bg-gray-200 flex items-center justify-center">
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
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Judul Buku */}
                        <div className="flex items-center mb-6">
                            <BookOpen
                                size={24}
                                className="text-gray-600 mr-2"
                            />
                            <h2 className="text-2xl font-bold text-gray-800">
                                {book.judul}
                            </h2>
                        </div>

                        {/* Penulis */}
                        <div className="flex items-center mb-4">
                            <User size={20} className="text-gray-600 mr-2" />
                            <p className="text-gray-700">
                                Penulis: {book.penulis}
                            </p>
                        </div>

                        {/* Tahun Terbit */}
                        <div className="flex items-center mb-4">
                            <Calendar
                                size={20}
                                className="text-gray-600 mr-2"
                            />
                            <p className="text-gray-700">
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
                                className={`text-gray-700 font-semibold ${
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
