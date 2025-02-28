import React from "react";
import PropTypes from "prop-types";

const Filters = ({ filters, handleFilterChange, isDarkMode }) => {
    return (
        <div className="flex space-x-4 mb-6">
            <div>
                <label className="block text-sm font-medium mb-2">
                    Tahun Terbit
                </label>
                <input
                    type="number"
                    name="year"
                    value={filters.year}
                    onChange={handleFilterChange}
                    placeholder="Tahun"
                    className={`w-full px-4 py-2 rounded-lg border ${
                        isDarkMode
                            ? "bg-gray-700 border-gray-600"
                            : "bg-gray-100 border-gray-300"
                    }`}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                    name="status"
                    value={filters.status}
                    onChange={handleFilterChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                        isDarkMode
                            ? "bg-gray-700 border-gray-600"
                            : "bg-gray-100 border-gray-300"
                    }`}
                >
                    <option value="">Semua</option>
                    <option value="Tersedia">Tersedia</option>
                    <option value="Dipinjam">Dipinjam</option>
                </select>
            </div>
        </div>
    );
};

Filters.propTypes = {
    filters: PropTypes.object.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default Filters;