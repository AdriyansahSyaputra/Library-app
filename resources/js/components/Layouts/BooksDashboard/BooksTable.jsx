import React from "react";
import PropTypes from "prop-types";
import { MoreVertical, Edit, Trash } from "lucide-react";

const BooksTable = ({ filteredBooks, isDarkMode, isDropdownOpen, toggleDropdown }) => {
    return (
        <div
            className={`rounded-lg shadow-md overflow-hidden ${
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
                    {filteredBooks.map((book) => (
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
                                    src={book.cover}
                                    alt={book.title}
                                    className="w-10 h-10 rounded"
                                />
                            </td>
                            <td className="px-6 py-4">{book.title}</td>
                            <td className="px-6 py-4">{book.author}</td>
                            <td className="px-6 py-4 max-w-xs">
                                {book.description}
                            </td>
                            <td className="px-6 py-4">{book.publishedDate}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-2 py-1 rounded-full text-sm ${
                                        book.status === "Tersedia"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                    }`}
                                >
                                    {book.status}
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
                                        className={`absolute right-6 mt-2 w-32 rounded-lg shadow-md ${
                                            isDarkMode
                                                ? "bg-gray-700"
                                                : "bg-white"
                                        }`}
                                    >
                                        <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-600 rounded-lg">
                                            <Edit size={16} />
                                            <span>Edit</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-600 rounded-lg">
                                            <Trash size={16} />
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

BooksTable.propTypes = {
    filteredBooks: PropTypes.array.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default BooksTable;
