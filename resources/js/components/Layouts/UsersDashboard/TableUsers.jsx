import React from "react";
import PropTypes from "prop-types";
import { MoreVertical, Edit, Trash } from "lucide-react";

const TableUsers = ({
    filteredUsers,
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
                        Jurusan
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium">
                        Email
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium">
                        No. Telp
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {filteredUsers.map((user) => (
                    <tr
                        key={user.id}
                        className={`${
                            isDarkMode
                                ? "hover:bg-gray-700"
                                : "hover:bg-gray-50"
                        } transition-colors`}
                    >
                        <td className="px-6 py-4">{user.name}</td>
                        <td className="px-6 py-4">{user.major}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">{user.phone}</td>
                        <td className="px-6 py-4 relative">
                            <button
                                onClick={() => toggleDropdown(user.id)}
                                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                            >
                                <MoreVertical size={16} />
                            </button>
                            {isDropdownOpen === user.id && (
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

TableUsers.propTypes = {
    filteredUsers: PropTypes.array.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    isDropdownOpen: PropTypes.number.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
};

export default TableUsers;
