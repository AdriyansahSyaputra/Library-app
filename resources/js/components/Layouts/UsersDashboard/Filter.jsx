import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filterMajor, setFilterMajor, isDarkMode }) => {
    return (
        <div>
            <select
                value={filterMajor}
                onChange={(e) => setFilterMajor(e.target.value)}
                className={`px-4 py-2 rounded-lg border ${
                    isDarkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-100 border-gray-300"
                }`}
            >
                <option value="">Semua Jurusan</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Electrical Engineering">
                    Electrical Engineering
                </option>
                <option value="Business Administration">
                    Business Administration
                </option>
            </select>
        </div>
    );
};

Filter.propTypes = {
    filterMajor: PropTypes.string.isRequired,
    setFilterMajor: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default Filter;