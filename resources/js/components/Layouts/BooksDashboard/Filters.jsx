import React from "react";
import PropTypes from "prop-types";

const Filters = ({
    isDarkMode,
    year,
    setYear,
    status,
    setStatus,
    applyFilters,
    resetFilters,
}) => {
    return (
        <div className="flex space-x-4 mb-6">
            <div>
                <label className="block text-sm font-medium mb-2">
                    Tahun Terbit
                </label>
                <input
                    type="number"
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
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
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border ${
                        isDarkMode
                            ? "bg-gray-700 border-gray-600"
                            : "bg-gray-100 border-gray-300"
                    }`}
                >
                    <option value="">Semua</option>
                    <option value="tersedia">Tersedia</option>
                    <option value="dipinjam">Dipinjam</option>
                </select>
            </div>
            <div className="flex items-end space-x-2">
                <button
                    onClick={applyFilters}
                    className={`px-4 py-2 rounded-lg ${
                        isDarkMode
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-blue-500 hover:bg-blue-600"
                    } text-white`}
                >
                    Terapkan
                </button>
                <button
                    onClick={resetFilters}
                    className={`px-4 py-2 rounded-lg ${
                        isDarkMode
                            ? "bg-gray-600 hover:bg-gray-700"
                            : "bg-gray-500 hover:bg-gray-600"
                    } text-white`}
                >
                    Reset
                </button>
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
