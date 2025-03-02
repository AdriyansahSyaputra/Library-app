import React, { useState } from "react";
import { X, Calendar, User, BookOpen, BadgeCheck, CircleX } from "lucide-react";
import { useForm } from "@inertiajs/react";

const FormBorrow = ({ book, onClose }) => {
    const { data, setData, post, processing } = useForm({
        book_id: book.id,
        tanggal_pinjam: "",
        tanggal_kembali: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handlePinjam = (e) => {
        e.preventDefault();

        if (data.tanggal_kembali < data.tanggal_pinjam) {
            alert("Tanggal kembali tidak valid!");
            return;
        }

        post("/book", {
            onSuccess: () => {
                alert("Buku berhasil dipinjam!");
                window.location.href = "/my-library"; // Redirect ke halaman "my-library"
            },
            onError: () => {
                alert(
                    "Terjadi kesalahan saat meminjam buku. Silakan coba lagi."
                );
            },
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl flex overflow-hidden">
                {/* Bagian Kiri: Gambar Cover Buku */}
                <div className="w-1/3 bg-gray-200 flex items-center justify-center">
                    <img
                        src={`/assets/img/cover/${book.gambar}`}
                        alt="Cover Buku"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bagian Kanan: Form */}
                <div className="w-2/3 p-8 relative">
                    {/* Tombol Close */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <X size={20} />
                    </button>

                    {/* Judul Buku */}
                    <div className="flex items-center mb-6">
                        <BookOpen size={24} className="text-gray-600 mr-2" />
                        <h2 className="text-2xl font-bold text-gray-800">
                            {book.judul}
                        </h2>
                    </div>

                    {/* Penulis */}
                    <div className="flex items-center mb-4">
                        <User size={20} className="text-gray-600 mr-2" />
                        <p className="text-gray-700">Penulis: {book.penulis}</p>
                    </div>

                    {/* Tahun Terbit */}
                    <div className="flex items-center mb-4">
                        <Calendar size={20} className="text-gray-600 mr-2" />
                        <p className="text-gray-700">
                            Tahun Terbit: {book.tahun_terbit}
                        </p>
                    </div>

                    {/* Status */}
                    <div className="flex items-center mb-4">
                        {book.status.toLowerCase() === "tersedia" ? (
                            <BadgeCheck
                                size={20}
                                className="text-green-600 mr-2"
                            />
                        ) : (
                            <CircleX size={20} className="text-red-600 mr-2" />
                        )}
                        <p className="text-gray-700 font-semibold">
                            {book.status.charAt(0).toUpperCase() +
                                book.status.slice(1).toLowerCase()}
                        </p>
                    </div>

                    {/* Form Tanggal Pinjam dan Kembali */}
                    <form onSubmit={handlePinjam}>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tanggal Pinjam
                                </label>
                                <input
                                    type="date"
                                    name="tanggal_pinjam"
                                    value={data.tanggal_pinjam}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tanggal Kembali
                                </label>
                                <input
                                    type="date"
                                    value={data.tanggal_kembali}
                                    onChange={handleChange}
                                    name="tanggal_kembali"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Tombol Kembali dan Pinjam */}
                        <div className="flex justify-between mt-8">
                            <button
                                onClick={onClose}
                                type="button"
                                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                Kembali
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                disabled={processing}
                            >
                                {processing ? "Memproses..." : "Pinjam"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormBorrow;