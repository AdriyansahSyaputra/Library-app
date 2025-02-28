import React, { useState } from "react";
import Toggle from "../../components/Layouts/Auth/Toggle";
import Header from "../../components/Layouts/Auth/Header";
import FormLogin from "../../components/Fragments/FormLogin";
import AccountOption from "../../components/Layouts/Auth/AccountOption";
import Footer from "../../components/Layouts/Auth/Footer";

const Login = () => {
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
                    description="Masuk untuk mengakses koleksi buku kami"
                />

                {/* Form Login */}
                <FormLogin isDarkMode={isDarkMode} />

                {/* Opsi Login dengan Sosial Media */}
                <AccountOption isDarkMode={isDarkMode} />

                {/* Daftar Sekarang */}
                <Footer
                    ask="Apakah Anda belum punya akun?"
                    action="Daftar Sekarang"
                />
            </div>
        </div>
    );
};

export default Login;
