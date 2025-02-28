import React from "react";
import { Eye, EyeOff } from "lucide-react";
import PropTypes from "prop-types";

const ButtonEye = ({ togglePasswordVisibility, showPassword, isDarkMode }) => {
    return (
        <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
            {showPassword ? (
                <EyeOff
                    className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                    size={20}
                />
            ) : (
                <Eye
                    className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                    size={20}
                />
            )}
        </button>
    );
};

ButtonEye.propTypes = {
    togglePasswordVisibility: PropTypes.func.isRequired,
    showPassword: PropTypes.bool.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default ButtonEye;
