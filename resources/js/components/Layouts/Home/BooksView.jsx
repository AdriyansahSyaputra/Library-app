import React from "react";
import { ChevronRight } from "lucide-react";
import CardBook from "../../Fragments/CardBook";
import PropTypes from "prop-types";

const BooksView = ({ books, isDarkMode }) => {
    return (
        <>
            <div
                className={`w-full h-full rounded-lg shadow-md px-4 py-6 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">All Books</h1>
                    </div>

                    <div>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center">
                            See All
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>

                {/* Card Books */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    <CardBook books={books} />
                </div>
            </div>
        </>
    );
};

export default BooksView;

BooksView.propTypes = {
    books: PropTypes.array,
};
