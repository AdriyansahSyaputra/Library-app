import React from "react";
import PropTypes from "prop-types";
import { MoreVertical, Edit, Trash } from "lucide-react";

const TableBorrow = ({
    borrows,
    isDarkMode,
    isDropdownOpen,
    toggleDropdown,
}) => {
    return (
        <table className="w-full">
            <thead
                className={`${
                    isDarkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-800"
                }`}
            >
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
                {borrows.length === 0 ? (
                    <tr>
                        <td
                            colSpan="6"
                            className="text-center py-4 text-gray-500"
                        >
                            Tidak ada data peminjaman.
                        </td>
                    </tr>
                ) : (
                    borrows.map((borrow) => (
                        <tr
                            key={borrow.id}
                            className={`transition-colors ${
                                isDarkMode
                                    ? "hover:bg-gray-700 text-white"
                                    : "hover:bg-gray-50 text-gray-800"
                            }`}
                        >
                            <td className="px-6 py-4">
                                {borrow.user?.name || "Tidak diketahui"}
                            </td>
                            <td className="px-6 py-4">
                                {borrow.book?.judul || "Tidak diketahui"}
                            </td>
                            <td className="px-6 py-4">
                                {borrow.tanggal_pinjam || "-"}
                            </td>
                            <td className="px-6 py-4">
                                {borrow.tanggal_kembali || "-"}
                            </td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-2 py-1 rounded-full text-sm font-semibold ${
                                        borrow.status === "dipinjam"
                                            ? "bg-red-100 text-red-800 dark:bg-red-600 dark:text-white"
                                            : "bg-green-100 text-green-800 dark:bg-green-600 dark:text-white"
                                    }`}
                                >
                                    {borrow.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 relative">
                                <button
                                    onClick={() => toggleDropdown(borrow.id)}
                                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                                >
                                    <MoreVertical size={16} />
                                </button>
                                {isDropdownOpen === borrow.id && (
                                    <div
                                        className={`absolute z-10 right-6 mt-2 w-32 rounded-lg shadow-md ${
                                            isDarkMode
                                                ? "bg-gray-700 text-white"
                                                : "bg-white text-gray-800"
                                        }`}
                                    >
                                        <button className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500">
                                            <Edit size={16} />
                                            <span>Edit</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-red-500 dark:hover:bg-red-700 text-white">
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
    );
};

TableBorrow.propTypes = {
    borrows: PropTypes.array.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    isDropdownOpen: PropTypes.number,
    toggleDropdown: PropTypes.func.isRequired,
};

export default TableBorrow;
