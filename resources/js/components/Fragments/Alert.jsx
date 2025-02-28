import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import PropTypes from "prop-types";

const Alert = ({ isOpen, action, message }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval;
        if (isOpen) {
            setProgress(0); // Mulai dari 0
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prevProgress + 1;
                });
            }, 30); // Update progress setiap 30ms (3 detik total)
        } else {
            setProgress(0);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isOpen]);

    if (!isOpen) return null; // Tidak render sama sekali jika tidak terbuka

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-80 transform transition-all">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        {action}
                    </h2>

                    <div className="relative inline-flex">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="w-8 h-8 text-green-500" />
                        </div>

                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-pulse" />
                        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-green-500 animate-spin" />
                    </div>

                    <p className="mt-4 text-gray-600 text-sm">{message}</p>

                    {/* Progress bar container */}
                    <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        {/* Animated progress bar */}
                        <div
                            className="h-full bg-green-500 transition-all duration-300 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;

Alert.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    action: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

Alert.defaultProps = {
    isOpen: false,
    action: "Success",
    message: "Action completed successfully",
};
