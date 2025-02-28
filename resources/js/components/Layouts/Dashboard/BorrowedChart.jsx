import React from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

const BorrowedChart = ({ isDarkMode, barChartData }) => {
    return (
        <div
            className={`p-6 rounded-lg shadow-md ${
                isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
        >
            <h2 className="text-lg font-semibold mb-4">
                Books Borrowed (Last 6 Months)
            </h2>
            <Bar data={barChartData} />
        </div>
    );
};

BorrowedChart.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};

export default BorrowedChart;
