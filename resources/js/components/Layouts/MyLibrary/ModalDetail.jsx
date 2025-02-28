import React from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";

const ModalDetail = ({ selectedBook, closeModal, handleReturnBook }) =>{
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-full max-w-3xl p-6 relative flex">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X size={20} />
                </button>
                <div className="w-1/3 flex-shrink-0">
                    <img
                        src={selectedBook.cover}
                        alt={selectedBook.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="w-2/3 pl-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold">
                            {selectedBook.title}
                        </h2>
                        <p className="text-sm text-gray-600 mb-2">
                            {selectedBook.author}
                        </p>
                        <p className="text-gray-700 mb-4">
                            {selectedBook.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-600">
                                    Tanggal Pinjam
                                </p>
                                <p className="font-semibold">
                                    {selectedBook.borrowDate}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    Tanggal Kembali
                                </p>
                                <p className="font-semibold">
                                    {selectedBook.returnDate}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleReturnBook}
                        className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Kembalikan
                    </button>
                </div>
            </div>
        </div>
    );
}

ModalDetail.propTypes = {    
    selectedBook: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
    handleReturnBook: PropTypes.func.isRequired,
};

export default ModalDetail;