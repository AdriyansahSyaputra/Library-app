import React from "react";
import PropTypes from "prop-types";

const CardBookBorrow = ({ borrowedBooks, openModal }) => {
    return (
        <>
            {borrowedBooks.map((book) => (
                <div
                    key={book.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                    <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                        <h2 className="text-lg font-semibold mb-1">
                            {book.title}
                        </h2>
                        <p className="text-sm text-gray-600 mb-2">
                            {book.author}
                        </p>
                        <button
                            onClick={() => openModal(book)}
                            className="mt-auto w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
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
};

export default CardBookBorrow;