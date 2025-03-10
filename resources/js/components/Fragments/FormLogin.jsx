import React, { useState } from "react";
import Label from "../Elements/input/Label";
import Input from "../Elements/input/Input";
import ButtonEye from "../Elements/ButtonEye";
import { Mail, Lock } from "lucide-react";
import PropTypes from "prop-types";
import { useForm } from "@inertiajs/react";

const FormLogin = ({ isDarkMode }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login",);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
                <Label htmlFor="email" label="Email" />
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
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Masukkan email Anda"
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
                        value={data.password}
                        onChange={handleChange}
                        placeholder="Masukkan password Anda"
                        isDarkMode={isDarkMode}
                    />
                    <ButtonEye
                        togglePasswordVisibility={togglePasswordVisibility}
                        showPassword={showPassword}
                        isDarkMode={isDarkMode}
                    />
                </div>
            </div>
            
            {/* Error Message */}
            {errors.credentials && (
                <div className="text-red-500 text-sm">
                    {errors.credentials}
                </div>
            )}

            {/* Ingat Saya dan Lupa Password */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        name="remember"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
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
    );
};

export default FormLogin;

FormLogin.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};