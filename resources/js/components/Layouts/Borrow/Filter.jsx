import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filterStatus, setFilterStatus, isDarkMode }) => {
    return (
        <div>
            <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className={`px-4 py-2 rounded-lg border ${
                    isDarkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-100 border-gray-300"
                }`}
            >
                <option value="">Status</option>
                <option value="Dipinjam">Dipinjam</option>
                <option value="Dikembalikan">
                    Dikembalikan
                </option>
            </select>
        </div>
    );
};

Filter.propTypes = {
    filterStatus: PropTypes.string.isRequired,
    setFilterStatus: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default Filter;