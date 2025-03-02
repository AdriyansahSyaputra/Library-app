import React from "react";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    Bookmark,
    Clock,
    ChevronLeft,
    ChevronRight,
    HelpCircle,
    Settings,
    User,
} from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, isDarkMode }) => {
    const [activeMenu, setActiveMenu] = React.useState("/dashboard");

    const menus = [
        {
            name: "Dashboard",
            link: "/dashboard",
            icon: <LayoutDashboard size={20} />,
        },
        {
            name: "Books",
            link: "/dashboard/books",
            icon: <BookOpen size={20} />,
        },
        { name: "Users", link: "/dashboard/users", icon: <Users size={20} /> },
        {
            name: "Borrowing",
            link: "/dashboard/borrows",
            icon: <Bookmark size={20} />,
        },
        { name: "Delay", link: "/dashboard/delays", icon: <Clock size={20} /> },
    ];

    const additionalMenus = [
        { name: "Help & Support", icon: <HelpCircle size={20} /> },
        { name: "Settings", icon: <Settings size={20} /> },
    ];

    return (
        <div
            className={`fixed inset-y-0 ${
                isDarkMode
                    ? "bg-gray-900 text-white border-r border-gray-700"
                    : "bg-white text-gray-900"
            } ${isSidebarOpen ? "w-60" : "w-20"} 
            p-4 flex flex-col justify-between transition-all duration-300 ease-in-out`}
        >
            {/* Header dan Menu Utama */}
            <div>
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1
                        className={`text-xl font-bold ${
                            !isSidebarOpen && "hidden"
                        }`}
                    >
                        Dashboard
                    </h1>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                    >
                        {isSidebarOpen ? (
                            <ChevronLeft size={20} />
                        ) : (
                            <ChevronRight size={20} />
                        )}
                    </button>
                </div>

                {/* Menu Items */}
                <div className="mt-8">
                    {menus.map((menu, index) => (
                        <Link
                            href={menu.link}
                            key={index}
                            className={`flex items-center p-2 rounded-lg cursor-pointer 
                ${
                    activeMenu === menu.name
                        ? isDarkMode
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-900"
                        : isDarkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-100"
                } 
                transition-colors duration-200 mb-2`}
                            onClick={() => setActiveMenu(menu.name)}
                        >
                            <div className="mr-3">{menu.icon}</div>
                            <span className={`${!isSidebarOpen && "hidden"}`}>
                                {menu.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Garis Pembatas */}
                <hr
                    className={`my-4 ${
                        isDarkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                />

                {/* Menu Tambahan (Help & Support, Settings) */}
                <div>
                    {additionalMenus.map((menu, index) => (
                        <div
                            key={index}
                            className={`flex items-center p-2 rounded-lg cursor-pointer 
                ${
                    activeMenu === menu.name
                        ? isDarkMode
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-900"
                        : isDarkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-100"
                } 
                transition-colors duration-200 mb-2`}
                            onClick={() => setActiveMenu(menu.name)}
                        >
                            <div className="mr-3">{menu.icon}</div>
                            <span className={`${!isSidebarOpen && "hidden"}`}>
                                {menu.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Informasi Pengguna */}
            <div
                className={`${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg hover:bg-gray-200 transition-colors duration-200 p-2`}
            >
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                        <User size={20} className="text-white" />
                    </div>
                    <div className={`ml-3 ${!isSidebarOpen && "hidden"}`}>
                        <p className="font-semibold text-sm">John Doe</p>
                        <p className="text-sm text-gray-500">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

Sidebar.propTypes = {
    isSidebarOpen: PropTypes.bool.isRequired,
    setIsSidebarOpen: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};
