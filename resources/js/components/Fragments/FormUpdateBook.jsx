import React, { useState } from "react";
import PropTypes from "prop-types";
import { Save } from "lucide-react";
import { useForm } from "@inertiajs/react";

const FormUpdateBook = ({
    book,
    setSelectedBook,
    isDarkMode,
    handleImageUpload,
    setShowAlert,
}) => {
    const { data, setData, put, processing, errors } = useForm({
        judul: book?.judul || "",
        penulis: book?.penulis || "",
        deskripsi: book?.deskripsi || "",
        gambar: null,
        status: book?.status || "tersedia",
        tahun_terbit: book?.tahun_terbit || "",
    });

    // Handle perubahan input
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    // Handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Use a FormData object to handle file upload
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            if (data[key] !== null) {
                formData.append(key, data[key]);
            }
        });

        put(`/dashboard/books/${book.id}`, {
            data: formData,
            onSuccess: (response) => {
                // Close modal
                setSelectedBook(false);

                // Show success alert
                setShowAlert(true);

            },
            // Handle potential errors
            onError: (errors) => {
                console.error("Update failed", errors);
            },
        });
    };

    return (
        <>

            <form onSubmit={handleSubmit}>
                {/* Input Judul */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Judul
                    </label>
                    <input
                        type="text"
                        name="judul"
                        value={data.judul}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            isDarkMode
                                ? "bg-gray-700 border-gray-600 focus:ring-blue-500 text-white"
                                : "bg-white border-gray-300 focus:ring-blue-500 text-gray-900"
                        }`}
                        required
                    />
                    {errors.judul && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.judul}
                        </p>
                    )}
                </div>

                {/* Input Penulis */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Penulis
                    </label>
                    <input
                        type="text"
                        name="penulis"
                        value={data.penulis}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            isDarkMode
                                ? "bg-gray-700 border-gray-600 focus:ring-blue-500 text-white"
                                : "bg-white border-gray-300 focus:ring-blue-500 text-gray-900"
                        }`}
                        required
                    />
                    {errors.penulis && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.penulis}
                        </p>
                    )}
                </div>

                {/* Input Deskripsi */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Deskripsi
                    </label>
                    <textarea
                        name="deskripsi"
                        value={data.deskripsi}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            isDarkMode
                                ? "bg-gray-700 border-gray-600 focus:ring-blue-500 text-white"
                                : "bg-white border-gray-300 focus:ring-blue-500 text-gray-900"
                        }`}
                        rows="4"
                        required
                    />
                    {errors.deskripsi && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.deskripsi}
                        </p>
                    )}
                </div>

                {/* Dropdown Status */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Status
                    </label>
                    <select
                        name="status"
                        value={data.status}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            isDarkMode
                                ? "bg-gray-700 border-gray-600 focus:ring-blue-500 text-white"
                                : "bg-white border-gray-300 focus:ring-blue-500 text-gray-900"
                        }`}
                    >
                        <option value="tersedia">Tersedia</option>
                        <option value="dipinjam">Dipinjam</option>
                    </select>
                </div>

                {/* Input Gambar */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">
                        Upload Gambar Baru
                    </label>
                    <input
                        type="file"
                        name="gambar"
                        onChange={handleImageUpload}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            isDarkMode
                                ? "bg-gray-700 border-gray-600 focus:ring-blue-500 text-white"
                                : "bg-white border-gray-300 focus:ring-blue-500 text-gray-900"
                        }`}
                        accept="image/*"
                    />
                    {errors.gambar && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.gambar}
                        </p>
                    )}
                </div>

                {/* Tombol Simpan */}
                <button
                    type="submit"
                    disabled={processing}
                    className={`w-full ${
                        isDarkMode
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-blue-500 hover:bg-blue-600"
                    } text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors`}
                >
                    <Save size={18} className="mr-2" />
                    {processing ? "Menyimpan..." : "Simpan Perubahan"}
                </button>
            </form>
        </>
    );
};

export default FormUpdateBook;

FormUpdateBook.propTypes = {
    setSelectedBook: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    book: PropTypes.object.isRequired,
    handleImageUpload: PropTypes.func.isRequired,
};
