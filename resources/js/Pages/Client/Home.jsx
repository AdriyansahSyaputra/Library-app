import React, { useState, useEffect } from "react";
import Sidebar from "../../components/templates/client/Sidebar";
import Topbar from "../../components/templates/client/Topbar";
import BooksView from "../../components/Layouts/Home/BooksView";
import { usePage } from "@inertiajs/react";

const Home = ({ books }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { flash } = usePage().props;
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (flash.success) {
            setShowAlert(true);
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [flash.success]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            {showAlert && (
                <div
                    className={`fixed mx-auto top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-lg ${
                        isDarkMode
                            ? "bg-green-700 text-green-100"
                            : "bg-green-500 text-white"
                    }`}
                >
                    {flash.success}
                </div>
            )}

            <div
                className={`min-h-screen w-full flex ${
                    isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                }`}
            >
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
                        toggleDarkMode={toggleDarkMode}
                        isDarkMode={isDarkMode}
                    />

                    <main className="p-6 max-w-screen-xl mx-auto">
                        <BooksView books={books} isDarkMode={isDarkMode} />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Home;
