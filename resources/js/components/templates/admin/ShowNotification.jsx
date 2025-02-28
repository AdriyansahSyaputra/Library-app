import React from "react";
import { Bell } from "lucide-react";

const ShowNotification = () => {
    return (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
            <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="font-medium text-gray-700">Notifications</h3>
            </div>
            <div className="max-h-72 overflow-y-auto">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50"
                    >
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2">
                                <Bell className="h-4 w-4 text-indigo-600" />
                            </div>
                            <div className="ml-3 w-0 flex-1">
                                <p className="text-sm font-medium text-gray-700">
                                    New order received
                                </p>
                                <p className="text-xs text-gray-500">
                                    Order #12345 needs your attention
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    2 min ago
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="px-4 py-2 border-t border-gray-100">
                <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    View all notifications
                </button>
            </div>
        </div>
    );
};

export default ShowNotification;