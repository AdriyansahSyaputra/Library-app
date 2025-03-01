import React, { useState } from "react";
import {
    House,
    BookText,
    BookHeart,
    Settings,
    BookOpenText,
    ChevronLeft,
    ChevronRight,
    LibraryBig,
} from "lucide-react";
import { Link } from "@inertiajs/react";

const menuItems = [
    {
        title: "Discover",
        icon: <House className="w-5 h-5" />,
        link: "/",
    },
    {
        title: "Category",
        icon: <BookText className="w-5 h-5" />,
        link: "/dashboard/category",
    },
    {
        title: "My Library",
        icon: <BookOpenText className="w-5 h-5" />,
        link: "/my-library",
    },
    {
        title: "Favourite",
        icon: <BookHeart className="w-5 h-5" />,
        link: "/favorite",
    },
    {
        title: "Settings",
        icon: <Settings className="w-5 h-5" />,
        link: "/settings",
    },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const [activeItem, setActiveItem] = useState("/");

    return (
        <>
            <aside
                className={`bg-white h-screen border-r shadow-sm inset-y-0 fixed flex flex-col ${
                    isSidebarOpen ? "w-60" : "w-20"
                } `}
            >
                <div className="w-full flex items-center justify-between p-4 border-b">
                    {isSidebarOpen && (
                        <h1 className="text-xl font-bold text-indigo-600">
                            Library Apps
                        </h1>
                    )}
                    {!isSidebarOpen && (
                        <div className="mx-auto">
                            <h1 className="text-xl font-bold text-indigo-600">
                                <LibraryBig size={20} />
                            </h1>
                        </div>
                    )}

                    {/* Tombol Chevron untuk buka/tutup sidebar */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-all"
                    >
                        {isSidebarOpen ? (
                            <ChevronLeft className="w-5 h-5" />
                        ) : (
                            <ChevronRight className="w-5 h-5" />
                        )}
                    </button>
                </div>

                {/* Menu */}
                <div className="flex-1 p-4 overflow-y-auto">
                    <nav className="space-y-1">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                onClick={() => setActiveItem(item.link)}
                                className={`flex items-center ${
                                    isSidebarOpen
                                        ? "justify-start"
                                        : "justify-center"
                                } gap-3 px-2 py-3 rounded-lg transition-all duration-200 ${
                                    activeItem === item.link
                                        ? "text-slate-800"
                                        : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                                }`}
                            >
                                <div
                                    className={`p-2 rounded-lg ${
                                        activeItem === item.link
                                            ? "bg-indigo-600 text-white"
                                            : "bg-gray-100 text-gray-500"
                                    }`}
                                >
                                    {item.icon}
                                </div>

                                {isSidebarOpen && (
                                    <span
                                        className={`${
                                            activeItem === item.link
                                                ? "font-bold"
                                                : "font-normal"
                                        }`}
                                    >
                                        {item.title}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
