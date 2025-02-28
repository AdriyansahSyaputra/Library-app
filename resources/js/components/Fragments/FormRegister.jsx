import React, { useState } from "react";
import PropTypes from "prop-types";
import { Mail, Lock, User, Phone } from "lucide-react";
import Input from "../Elements/input/Input";
import Label from "../Elements/input/Label";
import ButtonEye from "../Elements/ButtonEye";

const FormRegister = ({ isDarkMode }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika untuk proses login
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
                <Label htmlFor="name" label="Name" />
                <div className="relative">
                    <User
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                        size={20}
                    />
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Masukkan username Anda"
                        isDarkMode={isDarkMode}
                    />
                </div>
            </div>

            {/* Email */}
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
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                        size={20}
                    />
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Masukkan email Anda"
                        isDarkMode={isDarkMode}
                    />
                </div>
            </div>

            {/* No Telp */}
            <div>
                <Label htmlFor="phone" label="No Telp" />
                <div className="relative">
                    <Phone
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                        size={20}
                    />
                    <Input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Masukkan no telp Anda"
                        isDarkMode={isDarkMode}
                    />
                </div>
            </div>

            {/* Password Input */}
            <div>
                <Label htmlFor="password" label="Password" />
                <div className="relative">
                    <Lock
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                        size={20}
                    />
                    <Input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Masukkan password Anda"
                        isDarkMode={isDarkMode}
                    />
                    <ButtonEye
                        showPassword={showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                    />
                </div>
            </div>

            {/* Confirm Password Input */}
            <div>
                <Label
                    htmlFor="password_confirmation"
                    label="Ulangi Password"
                />
                <div className="relative">
                    <Lock
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                        size={20}
                    />
                    <Input
                        type={showPassword ? "text" : "password"}
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Ulangi password Anda"
                        isDarkMode={isDarkMode}
                    />
                    <ButtonEye
                        showPassword={showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
                Daftar
            </button>
        </form>
    );
};

export default FormRegister;

FormRegister.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};