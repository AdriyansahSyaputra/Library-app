import React from "react";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/react";

const Footer = ({ ask, action, link }) => {
    return (
        <div className="mt-6 text-center">
            <p className="text-sm">
                {ask}{" "}
                <Link href={link} className="text-indigo-600 hover:text-indigo-700">
                    {action}
                </Link>
            </p>
        </div>
    );
}

export default Footer;

Footer.propTypes = {
    ask: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}