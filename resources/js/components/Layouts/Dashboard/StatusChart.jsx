import React from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";

const StatusChart = ({ isDarkMode, doughnutChartData }) => {
    return (
        <div
            className={`lg:col-span-3 p-6 rounded-lg shadow-md ${
                isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
        >
            <h2 className="text-lg font-semibold mb-4">Books Status</h2>
            <div className="w-full h-64">
                {" "}
                {/* Tinggi chart diatur di sini */}
                <Doughnut
                    data={doughnutChartData}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        </div>
    );
};

StatusChart.propTypes = {    
    isDarkMode: PropTypes.bool.isRequired,
    doughnutChartData: PropTypes.object.isRequired,
};

export default StatusChart;