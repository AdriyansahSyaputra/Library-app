import React from "react";

const CardBook = () => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Cover Buku */}
            <div className="w-full aspect-[2/3]">
                <img
                    src="/assets/img/cover/1.jpg"
                    alt="Book Cover"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Detail Buku */}
            <div className="px-4 py-2">
                <h1 className="font-bold text-lg text-gray-800 truncate">
                    Book Title
                </h1>
                <p className="text-sm text-gray-500 truncate">Johan Morgan</p>
            </div>
        </div>
    );
};

export default CardBook;