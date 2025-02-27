import React from "react";
import { ChevronRight } from "lucide-react";
import CardBook from "../../Fragments/CardBook";

const BooksView = () => {
    return (
        <>
            <div className="w-full h-full bg-white rounded-lg shadow-md px-4 py-6">
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
                    {[...Array(10)].map((_, index) => (
                        <CardBook key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default BooksView;
