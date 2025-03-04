import React, { useState } from "react";
import { X, Image as ImageIcon } from "lucide-react";
import FormUpdateBook from "../../Fragments/FormUpdateBook";
import PropTypes from "prop-types";

const UpdateBookModal = ({ setSelectedBook, isDarkMode, book, setShowAlert }) => {
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
            // Validasi tipe file
            const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
            if (allowedTypes.includes(file.type)) {
                setData("gambar", file); // Set data gambar untuk form
                setPreviewImage(URL.createObjectURL(file)); // Set preview gambar
            } else {
                // Tampilkan pesan error jika file bukan gambar
                alert("Hanya file gambar (JPEG, PNG, JPG) yang diizinkan");
                e.target.value = null; // Reset input file
            }
        }
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
                    onClick={() => setSelectedBook(false)}
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
                    <FormUpdateBook
                        book={book}
                        setSelectedBook={setSelectedBook}
                        handleImageUpload={handleImageUpload}
                        isDarkMode={isDarkMode}
                        setShowAlert={setShowAlert}
                    />
                </div>
            </div>
        </div>
    );
};

export default UpdateBookModal;

UpdateBookModal.propTypes = {
    setSelectedBook: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    book: PropTypes.object.isRequired,
};
