import React from "react";
import { Star, ArrowLeft } from "lucide-react";
import { Inertia } from "@inertiajs/inertia";

const BookDetail = () => {
    // Fungsi untuk navigasi kembali
    const handleBack = () => {
        Inertia.visit(route("books.index"));
    };

    // Fungsi untuk meminjam buku
    const handleBorrow = () => {
       alert('Buku berhasil dipinjam');
    };

    return (
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8 mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Cover Buku */}
                <div className="w-full md:w-1/3 h-96 rounded-lg overflow-hidden">
                    <img
                        src="/assets/img/cover/1.jpg"
                        alt="Book Cover"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Detail Buku */}
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            Book Title
                        </h1>
                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure modi inventore quasi asperiores eligendi
                            omnis impedit veritatis ex at, similique dolor, nam
                            cumque. Quo, fuga.
                        </p>
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold">Penerbit:</span>{" "}
                            Publisher Name
                        </p>
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold">
                                Tanggal Terbit:
                            </span>{" "}
                            15-Feb-2020
                        </p>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex gap-4 mt-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Kembali
                        </button>
                        <button
                            onClick={handleBorrow}
                            className="flex-1 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                        >
                            Pinjam Buku
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;