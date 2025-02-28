import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

const UserChart = ({ isDarkMode, lineChartData }) => {
    return (
        <div
            className={`p-6 rounded-lg shadow-md ${
                isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
        >
            <h2 className="text-lg font-semibold mb-4">
                New Users (Last 6 Months)
            </h2>
            <Line data={lineChartData} />
        </div>
    );
};

UserChart.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    lineChartData: PropTypes.object.isRequired,
};

export default UserChart;