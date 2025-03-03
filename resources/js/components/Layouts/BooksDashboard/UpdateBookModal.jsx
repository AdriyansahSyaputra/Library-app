import React, { useState } from "react";
import { X, Save, Image as ImageIcon } from "lucide-react";
import { useForm } from "@inertiajs/react";

const UpdateBookModal = ({ setIsUpdateBookOpen, isDarkMode, book }) => {
    const { data, setData, post, processing, errors } = useForm({
        judul: book?.judul || "",
        penulis: book?.penulis || "",
        deskripsi: book?.deskripsi || "",
        gambar: null, // Gambar baru yang diupload
        status: book?.status || "tersedia", // Default value untuk status
        tahun_terbit: book?.tahun_terbit || "",
    });

    const [previewImage, setPreviewImage] = useState(
        book?.gambar
            ? book.gambar.startsWith("covers/")
                ? `/storage/${book.gambar}`
                : `/assets/img/cover/${book.gambar}`
            : null
    );

    // Handle upload gambar
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("gambar", file); // Set data gambar untuk form
            setPreviewImage(URL.createObjectURL(file)); // Set preview gambar
        }
    };

    // Handle perubahan input
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    // Handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("books.update", book.id), {
            onSuccess: () => {
                setIsUpdateBookOpen(false); // Tutup modal setelah berhasil
            },
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
                className={`${
                    isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                } rounded-lg shadow-lg w-full max-w-3xl flex overflow-hidden`}
            >
                {/* Tombol X untuk menutup modal */}
                <button
                    onClick={() => setIsUpdateBookOpen(false)}
                    className={`absolute top-4 right-4 p-2 rounded-full ${
                        isDarkMode
                            ? "hover:bg-gray-700 text-white"
                            : "hover:bg-gray-100 text-gray-900"
                    } transition-colors`}
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                {/* Section Kiri: Gambar Buku */}
                <div
                    className={`w-1/3 ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-100"
                    } flex items-center justify-center p-6`}
                >
                    {previewImage ? (
                        <img
                            src={previewImage}
                            alt="Cover buku"
                            className="w-full h-auto rounded-lg shadow-sm"
                        />
                    ) : (
                        <div
                            className={`${
                                isDarkMode ? "text-gray-400" : "text-gray-500"
                            } flex flex-col items-center`}
                        >
                            <ImageIcon size={48} />
                            <span className="mt-2 text-sm">
                                Tidak ada gambar
                            </span>
                        </div>
                    )}
                </div>

                {/* Section Kanan: Form Update Buku */}
                <div className="w-2/3 p-6">
                    <h2 className="text-xl font-semibold mb-4">Update Buku</h2>
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
                </div>
            </div>
        </div>
    );
};

export default UpdateBookModal;