import React, { useState } from "react";
import Toggle from "../../components/Layouts/Auth/Toggle";
import Header from "../../components/Layouts/Auth/Header";
import AccountOption from "../../components/Layouts/Auth/AccountOption";
import Footer from "../../components/Layouts/Auth/Footer";
import FormRegister from "../../components/Fragments/FormRegister";

const Register = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div
            className={`min-h-screen flex items-center justify-center ${
                isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-900"
            }`}
        >
            <div
                className={`w-full max-w-md p-8 rounded-lg shadow-lg ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
            >
                {/* Dark Mode Toggle */}
                <Toggle
                    toggleDarkMode={toggleDarkMode}
                    isDarkMode={isDarkMode}
                />

                {/* Header */}
                <Header
                    title="Perpustakaan Digital"
                    description="Daftar untuk mengakses koleksi buku kami"
                />

                {/* Form Login */}
                <FormRegister />

                {/* Opsi Login dengan Sosial Media */}
                <AccountOption isDarkMode={isDarkMode} />

                {/* Login Sekarang */}
                <Footer ask="Sudah punya akun?" action="Login" link="/login" />
            </div>
        </div>
    );
};

export default Register;
