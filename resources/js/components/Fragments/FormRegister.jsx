import React, { useState } from "react";
import PropTypes from "prop-types";
import { Mail, Lock, User, Phone, GraduationCap } from "lucide-react";
import Input from "../Elements/input/Input";
import Label from "../Elements/input/Label";
import ButtonEye from "../Elements/ButtonEye";
import { useForm } from "@inertiajs/react";
import Alert from "./Alert";

const FormRegister = ({ isDarkMode }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState(false);

    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        jurusan: "",
        no_telepon: "",
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/register", {
            onSuccess: (response) => {
                if (response.props.success) {
                    setAlert(true);
                    setTimeout(() => {
                        setAlert(false);
                        window.location.href = "/login";
                    }, 3000);
                }
            },
            onError: (errors) => {
                console.error("Registration failed:", errors);
            },
        });
    };

    return (
        <>
            <Alert
                isOpen={alert}
                action="Register Success"
                message="Register successfully, please login to your account now!"
            />

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
                            onChange={handleChange}
                            value={data.name}
                            required
                        />
                    </div>
                    {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                        </p>
                    )}
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
                            onChange={handleChange}
                            value={data.email}
                            required
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Jurusan */}
                <div>
                    <Label htmlFor="jurusan" label="Jurusan" />
                    <div className="relative">
                        <GraduationCap
                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                                isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                            size={20}
                        />
                        <Input
                            type="text"
                            id="jurusan"
                            name="jurusan"
                            placeholder="Masukkan jurusan Anda"
                            isDarkMode={isDarkMode}
                            onChange={handleChange}
                            value={data.jurusan}
                            required
                        />
                    </div>
                    {errors.jurusan && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.jurusan}
                        </p>
                    )}
                </div>

                {/* No Telp */}
                <div>
                    <Label htmlFor="no_telepon" label="No Telp" />
                    <div className="relative">
                        <Phone
                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                                isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                            size={20}
                        />
                        <Input
                            type="text"
                            id="no_telepon"
                            name="no_telepon"
                            placeholder="Masukkan no telp Anda"
                            isDarkMode={isDarkMode}
                            onChange={handleChange}
                            value={data.no_telepon}
                            required
                        />
                    </div>
                    {errors.no_telepon && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.no_telepon}
                        </p>
                    )}
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
                            onChange={handleChange}
                            value={data.password}
                            required
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
                            onChange={handleChange}
                            value={data.password_confirmation}
                            required
                        />
                        <ButtonEye
                            showPassword={showPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                        />
                    </div>
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.password}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                    Daftar
                </button>
            </form>
        </>
    );
};

export default FormRegister;

FormRegister.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
