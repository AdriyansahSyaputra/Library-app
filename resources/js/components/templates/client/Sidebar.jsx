import React, { useState } from "react";
import { Menu, Package, User, Percent, Send, Truck, CreditCard, ScrollText, Settings } from "lucide-react";
import { Link } from "@inertiajs/react";

const menuItems = [
    {
        title: "Dashboard",
        icon: <Menu className="w-5 h-5" />,
        link: "/dashboard",
    },
    {
        title: "Product",
        icon: <Package className="w-5 h-5" />,
        link: "/dashboard/products",
    },
    {
        title: "User",
        icon: <User className="w-5 h-5" />,
        link: "/dashboard/users",
    },
    {
        title: "Discount",
        icon: <Percent className="w-5 h-5" />,
        link: "/dashboard/discount",
    },
    {
        title: "Order",
        icon: <Send className="w-5 h-5" />,
        link: "/dashboard/orders",
    },
    {
        title: "Shipping",
        icon: <Truck className="w-5 h-5" />,
        link: "/dashboard/shipping",
    },
    {
        title: "Payment",
        icon: <CreditCard className="w-5 h-5" />,
        link: "/dashboard/payment",
    },
    {
        title: "Report & Analytics",
        icon: <ScrollText className="w-5 h-5" />,
        link: "/dashboard/reports",
    },
    {
        title: "Settings",
        icon: <Settings className="w-5 h-5" />,
        link: "/dashboard/settings",
    },
];

const Sidebar = ({ isSidebarOpen }) => {
    const [activeItem, setActiveItem] = useState("/dashboard");

    return (
        <>
            <aside className={`w-60 bg-white h-screen border-r shadow-sm inset-y-0 fixed flex flex-col ${isSidebarOpen ? "w-60" : "w-20"} `}>
                <div className="w-full flex items-center justify-between p-4 border-b">
                    <div>
                        <h2 className="text-lg font-semibold">Library Apps</h2>
                    </div>

                    <Menu size={20} />
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
                                } gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                    activeItem === item.link
                                        ? "bg-indigo-50 text-indigo-600"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                            >
                                <div
                                    className={
                                        activeItem === item.link
                                            ? "text-indigo-600"
                                            : "text-gray-500"
                                    }
                                >
                                    {item.icon}
                                </div>

                                {isSidebarOpen && (
                                    <span
                                        className={`${
                                            activeItem === item.link
                                                ? "font-medium"
                                                : ""
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
