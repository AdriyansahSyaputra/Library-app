import React from "react";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/react";

const CardBook = ({ books }) => {
    return (
        <>
            {books.map((book) => (
                <Link
                    href={`/book/${book.slug}`}
                    key={book.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                    {/* Cover Buku */}
                    <div className="w-full aspect-[2/3]">
                        <img
                            src={`/assets/img/cover/${book.gambar}`}
                            alt={book.judul}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Detail Buku */}
                    <div className="px-4 py-2">
                        <h1 className="font-bold text-lg text-gray-800 truncate">
                            {book.judul}
                        </h1>
                        <p className="text-sm text-gray-500 truncate">
                            {book.penulis}
                        </p>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default CardBook;

CardBook.propTypes = {
    books: PropTypes.array,
};
