import React from "react";
import PropTypes from "prop-types";

const Label = ({ htmlFor, label }) => {
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium mb-2">
            {label}
        </label>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Label;