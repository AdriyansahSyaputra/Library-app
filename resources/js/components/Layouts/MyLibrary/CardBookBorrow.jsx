import React from "react";
import PropTypes from "prop-types";

const CardBookBorrow = ({ borrowedBooks, openModal, isDarkMode }) => {
    return (
        <>
            {borrowedBooks.map((book) => (
                <div
                    key={book.id}
                    className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col ${
                        isDarkMode
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-900"
                    }`}
                >
                    <img
                        src={`/assets/img/cover/${book.book.gambar}`}
                        alt={book.book.judul}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                        <h2
                            className={`text-lg font-semibold mb-1 ${
                                isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                        >
                            {book.book.judul}
                        </h2>
                        <p
                            className={`text-sm mb-2 ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            {book.book.penulis}
                        </p>
                        <button
                            onClick={() => openModal(book)}
                            className={`mt-auto w-full px-4 py-2 rounded-lg transition-colors ${
                                isDarkMode
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                        >
                            Lihat
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

CardBookBorrow.propTypes = {
    borrowedBooks: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default CardBookBorrow;
