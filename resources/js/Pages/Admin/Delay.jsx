import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import { Head } from "@inertiajs/react";
import SearchInput from "../../components/Layouts/DelayDashboard/SearchInput";
import TableDelay from "../../components/Layouts/DelayDashboard/TableDelay";

const Delay = ({ delays }) => {
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
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-900"
                } h-screen w-full`}
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
                            <div className="flex items-center justify-between mb-6">
                                <SearchInput isDarkMode={isDarkMode} />
                            </div>

                            <div
                                className={`rounded-lg shadow-md overflow-hidden ${
                                    isDarkMode ? "bg-gray-800" : "bg-white"
                                }`}
                            >

                                <TableDelay isDarkMode={isDarkMode} delays={delays} />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Delay;