import React, { useState } from "react";
import Sidebar from "../../components/templates/client/Sidebar";
import Topbar from "../../components/templates/client/Topbar";
import BookDetail from "../../components/Layouts/BookDetail/BookDetail";
import { usePage } from "@inertiajs/react";

const BookDetailPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const { book } = usePage().props;

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
                        <BookDetail book={book} />
                    </main>
                </div>
            </div>
        </>
    );
};

export default BookDetailPage;
