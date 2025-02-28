import React from "react";
import PropTypes from "prop-types";

const Footer = ({ ask, action }) => {
    return (
        <div className="mt-6 text-center">
            <p className="text-sm">
                {ask}{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-700">
                    {action}
                </a>
            </p>
        </div>
    );
}

export default Footer;

Footer.propTypes = {
    ask: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
}