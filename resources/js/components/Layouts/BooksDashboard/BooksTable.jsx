import React from "react";
import PropTypes from "prop-types";
import { MoreVertical, Edit, Trash } from "lucide-react";

const BooksTable = ({
    books,
    isDarkMode,
    isDropdownOpen,
    toggleDropdown,
    handleDeleteBook,
    setSelectedBook,
}) => {
    return (
        <div
            className={`relative rounded-lg shadow-md overflow-x-auto ${
                isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
        >
            <table className="w-full">
                <thead
                    className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
                >
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Cover
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Judul
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Author
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Deskripsi
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Tanggal Terbit
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {books.length === 0 ? (
                        <tr>
                            <td
                                colSpan="7"
                                className="px-6 py-4 text-center text-gray-500"
                            >
                                🚀 Data buku masih kosong. Ayo tambahkan buku
                                baru! ✨
                            </td>
                        </tr>
                    ) : (
                        books.map((book) => (
                            <tr
                                key={book.id}
                                className={`${
                                    isDarkMode
                                        ? "hover:bg-gray-700"
                                        : "hover:bg-gray-50"
                                } transition-colors`}
                            >
                                <td className="px-6 py-4">
                                    <img
                                        src={
                                            book.gambar
                                                ? book.gambar.startsWith(
                                                      "covers/"
                                                  )
                                                    ? `/storage/${book.gambar}` // Jika gambar baru yang disimpan di storage
                                                    : `/assets/img/cover/${book.gambar}` // Jika gambar bawaan dari assets/img/cover
                                                : "/assets/img/no-image.png"
                                        }
                                        alt={book.judul || "Cover buku"}
                                        className="w-10 h-10 rounded"
                                    />
                                </td>
                                <td className="px-6 py-4">{book.judul}</td>
                                <td className="px-6 py-4">{book.penulis}</td>
                                <td className="px-6 py-4 max-w-xs">
                                    {book.deskripsi}
                                </td>
                                <td className="px-6 py-4">
                                    {book.tahun_terbit}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-2 py-1 rounded-full text-sm ${
                                            book.status === "tersedia"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                        {book.status.charAt(0).toUpperCase() +
                                            book.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 relative">
                                    <button
                                        onClick={() => toggleDropdown(book.id)}
                                        className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        <MoreVertical size={16} />
                                    </button>
                                    {isDropdownOpen === book.id && (
                                        <div
                                            className={`absolute right-0 mt-2 w-32 rounded-lg shadow-lg ${
                                                isDarkMode
                                                    ? "bg-gray-700 text-white"
                                                    : "bg-white"
                                            } z-50`}
                                            style={{
                                                top: "100%",
                                            }}
                                        >
                                            <button onClick={() => setSelectedBook(book)} className="w-full flex items-center space-x-2 p-2 hover:bg-gray-600 rounded-lg">
                                                <Edit size={16} />
                                                <span>Edit</span>
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleDeleteBook(book.id);
                                                    toggleDropdown(null);
                                                }}
                                                className="w-full flex items-center space-x-2 p-2 hover:bg-gray-600 rounded-lg"
                                            >
                                                <Trash size={16} />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

BooksTable.propTypes = {
    books: PropTypes.array.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    isDropdownOpen: PropTypes.number,
    toggleDropdown: PropTypes.func.isRequired,
    handleDeleteBook: PropTypes.func.isRequired,
};

export default BooksTable;
