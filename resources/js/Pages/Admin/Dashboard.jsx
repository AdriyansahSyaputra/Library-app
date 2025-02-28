import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import { Head } from "@inertiajs/react";
import CardStats from "../../components/Layouts/Dashboard/CardStats";
import BorrowedChart from "../../components/Layouts/Dashboard/BorrowedChart";
import UserChart from "../../components/Layouts/Dashboard/UserChart";
import RecentInfo from "../../components/Layouts/Dashboard/RecentInfo";
import StatusChart from "../../components/Layouts/Dashboard/StatusChart";
import {
    barChartData,
    lineChartData,
    doughnutChartData,
} from "../../utils/dataCharts";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

// Data untuk card
const cardData = [
    {
        title: "Total Users",
        value: "1,234",
        icon: "👤",
        color: "text-blue-500",
    },
    {
        title: "Total Books",
        value: "5,678",
        icon: "📚",
        color: "text-green-500",
    },
    {
        title: "Total Borrowing",
        value: "2,345",
        icon: "📖",
        color: "text-yellow-500",
    },
    {
        title: "Total Delay",
        value: "123",
        icon: "⏳",
        color: "text-red-500",
    },
];

const recentBorrowers = [
    { name: "John Doe", book: "The Great Gatsby", time: "2 hours ago" },
    { name: "Jane Smith", book: "1984", time: "5 hours ago" },
    {
        name: "Alice Johnson",
        book: "To Kill a Mockingbird",
        time: "1 day ago",
    },
];

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <Head title="Dashboard" />
            <div
                className={`${
                    isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                } w-full`}
            >
                <div className="flex max-h-screen">
                    <Sidebar
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        isDarkMode={isDarkMode}
                    />

                    <div
                        className={`flex-1 transition-all duration-300 ease-in-out ${
                            isSidebarOpen ? "pl-60" : "pl-20"
                        }`}
                    >
                        <Topbar
                            isDarkMode={isDarkMode}
                            setIsDarkMode={toggleDarkMode}
                        />

                        <main
                            className={`p-6 max-w-screen-xl mx-auto ${
                                isDarkMode
                                    ? "bg-gray-900 text-white"
                                    : "bg-gray-100 text-gray-900"
                            }`}
                        >
                            <CardStats
                                cardData={cardData}
                                isDarkMode={isDarkMode}
                            />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                                <BorrowedChart
                                    isDarkMode={isDarkMode}
                                    barChartData={barChartData}
                                />
                                <UserChart
                                    isDarkMode={isDarkMode}
                                    lineChartData={lineChartData}
                                />
                            </div>

                            {/* Bottom Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                <StatusChart
                                    isDarkMode={isDarkMode}
                                    doughnutChartData={doughnutChartData}
                                />

                                <RecentInfo
                                    isDarkMode={isDarkMode}
                                    recentBorrowers={recentBorrowers}
                                />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
