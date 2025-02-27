import React, { useState } from "react";
import {
    Lock,
    Mail,
    Eye,
    EyeOff,
    Sun,
    Moon,
    Facebook,
    Twitter,
    Github,
} from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika untuk proses login
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Ingat Saya:", rememberMe);
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
                <div className="flex justify-end mb-4">
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${
                            isDarkMode ? "text-yellow-400" : "text-gray-900"
                        }`}
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">Perpustakaan Digital</h1>
                    <p className="text-sm text-gray-500">
                        Masuk untuk mengakses koleksi buku kami
                    </p>
                </div>

                {/* Form Login */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <Mail
                                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                                    isDarkMode
                                        ? "text-gray-400"
                                        : "text-gray-500"
                                }`}
                                size={20}
                            />
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                                    isDarkMode
                                        ? "bg-gray-700 border-gray-600 text-white"
                                        : "bg-white border-gray-300 text-gray-900"
                                }`}
                                placeholder="Masukkan email Anda"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <Lock
                                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                                    isDarkMode
                                        ? "text-gray-400"
                                        : "text-gray-500"
                                }`}
                                size={20}
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full pl-10 pr-10 py-2 rounded-lg border ${
                                    isDarkMode
                                        ? "bg-gray-700 border-gray-600 text-white"
                                        : "bg-white border-gray-300 text-gray-900"
                                }`}
                                placeholder="Masukkan password Anda"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <EyeOff
                                        className={`${
                                            isDarkMode
                                                ? "text-gray-400"
                                                : "text-gray-500"
                                        }`}
                                        size={20}
                                    />
                                ) : (
                                    <Eye
                                        className={`${
                                            isDarkMode
                                                ? "text-gray-400"
                                                : "text-gray-500"
                                        }`}
                                        size={20}
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Ingat Saya dan Lupa Password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) =>
                                    setRememberMe(e.target.checked)
                                }
                                className={`mr-2 rounded ${
                                    isDarkMode
                                        ? "bg-gray-700 border-gray-600"
                                        : "bg-white border-gray-300"
                                }`}
                            />
                            <label htmlFor="rememberMe" className="text-sm">
                                Ingat Saya
                            </label>
                        </div>
                        <a
                            href="#"
                            className="text-sm text-indigo-600 hover:text-indigo-700"
                        >
                            Lupa Password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                        Masuk
                    </button>
                </form>

                {/* Opsi Login dengan Sosial Media */}
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span
                                className={`px-2 ${
                                    isDarkMode
                                        ? "bg-gray-800 text-gray-400"
                                        : "bg-white text-gray-500"
                                }`}
                            >
                                Atau masuk dengan
                            </span>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                        <button className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-200">
                            <Facebook size={20} />
                        </button>
                        <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
                            <Twitter size={20} />
                        </button>
                        <button className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors duration-200">
                            <Github size={20} />
                        </button>
                    </div>
                </div>

                {/* Daftar Sekarang */}
                <div className="mt-6 text-center">
                    <p className="text-sm">
                        Apakah Anda belum punya akun?{" "}
                        <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            Daftar sekarang
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;