import React from "react";
import PropTypes from "prop-types";

const CardStats = ({ cardData, isDarkMode }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className={`p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 
              ${
                  isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-50"
              }`}
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p
                                className={`text-sm ${
                                    isDarkMode
                                        ? "text-gray-400"
                                        : "text-gray-500"
                                }`}
                            >
                                {card.title}
                            </p>
                            <p className={`text-2xl font-bold ${card.color}`}>
                                {card.value}
                            </p>
                        </div>
                        <span className={`text-3xl ${card.color}`}>
                            {card.icon}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

CardStats.propTypes = {
    cardData: PropTypes.array.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default CardStats;