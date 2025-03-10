import React from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";

const ModalDetail = ({
    selectedBook,
    closeModal,
    handleReturnBook,
    isDarkMode,
}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
                className={`rounded-lg w-full max-w-3xl p-6 relative flex ${
                    isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                }`}
            >
                <button
                    onClick={closeModal}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                        isDarkMode
                            ? "hover:bg-gray-700 text-gray-300"
                            : "hover:bg-gray-100 text-gray-600"
                    }`}
                >
                    <X size={20} />
                </button>
                <div className="w-1/3 flex-shrink-0">
                    <img
                        src={`/assets/img/cover/${selectedBook.book.gambar}`}
                        alt={selectedBook.book.judul}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="w-2/3 pl-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold">
                            {selectedBook.book.judul}
                        </h2>
                        <p
                            className={`text-sm mb-2 ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            {selectedBook.book.penulis}
                        </p>
                        <p
                            className={`mb-4 ${
                                isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            {selectedBook.book.deskripsi}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p
                                    className={`text-sm ${
                                        isDarkMode
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                    }`}
                                >
                                    Tanggal Pinjam
                                </p>
                                <p className="font-semibold">
                                    {selectedBook.tanggal_pinjam}
                                </p>
                            </div>
                            <div>
                                <p
                                    className={`text-sm ${
                                        isDarkMode
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                    }`}
                                >
                                    Tanggal Kembali
                                </p>
                                <p className="font-semibold">
                                    {selectedBook.tanggal_kembali}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleReturnBook}
                        className={`mt-4 w-full px-4 py-2 rounded-lg transition-colors ${
                            isDarkMode
                                ? "bg-green-600 text-white hover:bg-green-700"
                                : "bg-green-500 text-white hover:bg-green-600"
                        }`}
                    >
                        Kembalikan
                    </button>
                </div>
            </div>
        </div>
    );
};

ModalDetail.propTypes = {
    selectedBook: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
    handleReturnBook: PropTypes.func.isRequired,
};

export default ModalDetail;
