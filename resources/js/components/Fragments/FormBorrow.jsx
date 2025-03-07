import React, { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import PropTypes from "prop-types";

const FormBorrow = ({ book, setIsModalOpen, setShowAlert }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { errors } = usePage().props;
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    useEffect(() => {
        console.log(errors);
        if (errors.error) {
            setShowErrorAlert(true);
            const timer = setTimeout(() => {
                setShowErrorAlert(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [errors.error]);

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

        if (new Date(data.tanggal_kembali) < new Date(data.tanggal_pinjam)) {
            alert("Tanggal kembali tidak valid!");
            return;
        }

        post("/book", {
            onSuccess: () => {
                setShowAlert(true);
            },
            onError: () => {
                setShowErrorAlert(true);
            },
        });
    };

    return (
        <>
            {showErrorAlert && (
                <div
                    className={`fixed mx-auto left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50 p-4 rounded-lg ${
                        isDarkMode
                            ? "bg-red-700 text-red-100"
                            : "bg-red-500 text-white"
                    }`}
                >
                    {errors.error}
                </div>
            )}

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
                        onClick={() => setIsModalOpen(false)}
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
        </>
    );
};

export default FormBorrow;

FormBorrow.propTypes = {
    book: PropTypes.object.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    setShowAlert: PropTypes.func.isRequired,
};
