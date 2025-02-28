import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, description }) => {
    return (
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500">
                {description}
            </p>
        </div>
    );
}

export default Header

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}