import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, id, name, value, onChange, placeholder, isDarkMode }) => {
    return (
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
            }`}
        />
    );
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    isDarkMode: PropTypes.bool,
};

export default Input;