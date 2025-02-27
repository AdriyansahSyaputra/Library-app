import React, { useState } from "react";
import Sidebar from "../../components/templates/client/Sidebar";
import Topbar from "../../components/templates/client/Topbar";
import BookDetail from "../../components/Layouts/BookDetail/BookDetail";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <>
            <div className="max-h-screen w-full flex">
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />

                <div
                    className={`flex-1 transition-all duration-300 ease-in-out ${
                        isSidebarOpen ? "pl-60" : "pl-20"
                    }`}
                >
                    <Topbar />

                    <main className="p-6 max-w-screen-xl flex md:my-16">
                        <BookDetail />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Home;
