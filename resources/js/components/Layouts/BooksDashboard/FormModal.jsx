import React, { useState } from "react";
import PropTypes from "prop-types";
import { Upload, X } from "lucide-react";
import { useForm } from "@inertiajs/react";

const FormModal = ({ isAddBookOpen, setIsAddBookOpen, isDarkMode }) => {
    const { data, setData, post, processing, errors } = useForm({
        judul: "",
        penulis: "",
        deskripsi: "",
        gambar: null,
        status: "Tersedia", // Default value untuk status
        tahun_terbit: "",
    });

    const [previewImage, setPreviewImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("gambar", file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleChange = (e) => {
        const { name, type, files, value } = e.target;
        setData(name, type === "file" ? files[0] : value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/dashboard/books", {
            onSuccess: () => {
                setIsAddBookOpen(false); // Tutup modal setelah berhasil
            },
        });
    };

    return (
        <>
            {isAddBookOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div
                        className={`w-full max-w-2xl p-6 rounded-lg shadow-md ${
                            isDarkMode ? "bg-gray-800" : "bg-white"
                        }`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold">
                                Tambah Buku Baru
                            </h2>
                            <button
                                onClick={() => setIsAddBookOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            encType="multipart/form-data"
                        >
                            {/* Upload Cover */}
                            <div>
                                <label
                                    htmlFor="gambar"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Cover Buku
                                </label>
                                <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg relative">
                                    {previewImage ? (
                                        <img
                                            src={previewImage}
                                            alt="Preview"
                                            className="h-full object-contain"
                                        />
                                    ) : (
                                        <Upload
                                            size={24}
                                            className="text-gray-400"
                                        />
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="gambar"
                                        name="gambar"
                                        onChange={handleImageUpload}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                    />
                                </div>
                                {errors.gambar && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.gambar}
                                    </p>
                                )}
                            </div>
                            {/* Form Input */}
                            <div className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="judul"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Judul Buku
                                    </label>
                                    <input
                                        type="text"
                                        name="judul"
                                        placeholder="Judul Buku"
                                        id="judul"
                                        value={data.judul}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-gray-100 border-gray-300"
                                        }`}
                                        required
                                    />
                                    {errors.judul && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.judul}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="penulis"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Penulis
                                    </label>
                                    <input
                                        type="text"
                                        name="penulis"
                                        placeholder="penulis"
                                        id="penulis"
                                        value={data.penulis}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-gray-100 border-gray-300"
                                        }`}
                                        required
                                    />
                                    {errors.penulis && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.penulis}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="deskripsi"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Deskripsi
                                    </label>
                                    <textarea
                                        name="deskripsi"
                                        value={data.deskripsi}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-gray-100 border-gray-300"
                                        }`}
                                        required
                                    />
                                    {errors.deskripsi && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.deskripsi}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Tanggal Terbit
                                    </label>
                                    <input
                                        type="date"
                                        name="tahun_terbit"
                                        value={data.tahun_terbit}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-gray-100 border-gray-300"
                                        }`}
                                        required
                                    />
                                    {errors.tahun_terbit && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.tahun_terbit}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Status
                                    </label>
                                    <select
                                        value={data.status}
                                        name="status"
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-gray-100 border-gray-300"
                                        }`}
                                    >
                                        <option value="Tersedia">
                                            Tersedia
                                        </option>
                                        <option value="Dipinjam">
                                            Dipinjam
                                        </option>
                                    </select>
                                    {errors.status && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.status}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full px-4 py-2 rounded-lg ${
                                        isDarkMode
                                            ? "bg-blue-600 hover:bg-blue-700"
                                            : "bg-blue-500 hover:bg-blue-600"
                                    } text-white transition-colors`}
                                    disabled={processing}
                                >
                                    {processing
                                        ? "Menyimpan..."
                                        : "Simpan Buku"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default FormModal;

FormModal.propTypes = {
    isAddBookOpen: PropTypes.bool.isRequired,
    setIsAddBookOpen: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};
