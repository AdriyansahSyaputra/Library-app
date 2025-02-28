import React from "react";
import PropTypes from "prop-types";
import { MoreVertical, Edit, Trash } from "lucide-react";

const TableBorrow = ({
    filteredBorrow,
    isDarkMode,
    isDropdownOpen,
    toggleDropdown,
}) => {
    return (
        <table className="w-full">
            <thead className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium">
                        Nama
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium">
                        Buku
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium">
                        Tanggal Pinjam
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium">
                        Tanggal Kembali
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
                {filteredBorrow.map((borrow) => (
                    <tr
                        key={borrow.id}
                        className={`${
                            isDarkMode
                                ? "hover:bg-gray-700"
                                : "hover:bg-gray-50"
                        } transition-colors`}
                    >
                        <td className="px-6 py-4">{borrow.name}</td>
                        <td className="px-6 py-4">{borrow.book}</td>
                        <td className="px-6 py-4">{borrow.borrow_date}</td>
                        <td className="px-6 py-4">{borrow.return_date}</td>
                        <td className="px-6 py-4">
                            <span
                                className={`px-2 py-1 rounded-full text-sm ${
                                    borrow.status === "Dipinjam"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-green-100 text-green-800"
                                }`}
                            >
                                {borrow.status}
                            </span>
                        </td>
                        <td className="px-6 py-4 relative">
                            <button
                                onClick={() => toggleDropdown(borrow.id)}
                                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                            >
                                <MoreVertical size={16} />
                            </button>
                            {isDropdownOpen === borrow.id && (
                                <div
                                    className={`absolute z-10 right-6 mt-2 w-32 rounded-lg shadow-md ${
                                        isDarkMode ? "bg-gray-700" : "bg-white"
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
    );
};

TableBorrow.propTypes = {
    filteredBorrow: PropTypes.array.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    isDropdownOpen: PropTypes.number,
    toggleDropdown: PropTypes.func.isRequired,
};

export default TableBorrow;