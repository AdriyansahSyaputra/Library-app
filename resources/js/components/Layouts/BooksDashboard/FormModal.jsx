import React from "react";
import PropTypes from "prop-types";
import { Upload, X } from "lucide-react";

const FormModal = ({ isAddBookOpen, setIsAddBookOpen, isDarkMode, setNewBook, handleAddBook, newBook }) => {
    return (
        <>
            {isAddBookOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div
                        className={`w-full max-w-2xl p-6 rounded-lg shadow-md ${
                            isDarkMode ? "bg-gray-800" : "bg-white"
                        }`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold">
                                Tambah Buku Baru
                            </h2>
                            <button
                                onClick={() => setIsAddBookOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Upload Cover */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Cover Buku
                                </label>
                                <div className="flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg">
                                    <Upload
                                        size={24}
                                        className="text-gray-400"
                                    />
                                </div>
                            </div>
                            {/* Form Input */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Judul Buku
                                    </label>
                                    <input
                                        type="text"
                                        value={newBook.title}
                                        onChange={(e) =>
                                            setNewBook({
                                                ...newBook,
                                                title: e.target.value,
                                            })
                                        }
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-gray-100 border-gray-300"
                                        }`}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Author
                                    </label>
                                    <input
                                        type="text"
                                        value={newBook.author}
                                        onChange={(e) =>
                                            setNewBook({
                                                ...newBook,
                                                author: e.target.value,
                                            })
                                        }
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-gray-100 border-gray-300"
                                        }`}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Deskripsi
                                    </label>
                                    <textarea
                                        value={newBook.description}
                                        onChange={(e) =>
                                            setNewBook({
                                                ...newBook,
                                                description: e.target.value,
                                            })
                                        }
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-gray-100 border-gray-300"
                                        }`}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Tanggal Terbit
                                    </label>
                                    <input
                                        type="date"
                                        value={newBook.publishedDate}
                                        onChange={(e) =>
                                            setNewBook({
                                                ...newBook,
                                                publishedDate: e.target.value,
                                            })
                                        }
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-gray-100 border-gray-300"
                                        }`}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Status
                                    </label>
                                    <select
                                        value={newBook.status}
                                        onChange={(e) =>
                                            setNewBook({
                                                ...newBook,
                                                status: e.target.value,
                                            })
                                        }
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-gray-100 border-gray-300"
                                        }`}
                                    >
                                        <option value="Tersedia">
                                            Tersedia
                                        </option>
                                        <option value="Dipinjam">
                                            Dipinjam
                                        </option>
                                    </select>
                                </div>
                                <button
                                    onClick={handleAddBook}
                                    className={`w-full px-4 py-2 rounded-lg ${
                                        isDarkMode
                                            ? "bg-blue-600 hover:bg-blue-700"
                                            : "bg-blue-500 hover:bg-blue-600"
                                    } text-white transition-colors`}
                                >
                                    Simpan Buku
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FormModal;

FormModal.propTypes = {
    isAddBookOpen: PropTypes.bool.isRequired,
    setIsAddBookOpen: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};