import React, {useState} from 'react';
import backgroundCar from "../assets/background-car.jpg";
import InputValidation from "../components/InputValidation.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import axios from "axios";
import {useUser} from "../context/UserContext.jsx";
import toast, {Toaster} from "react-hot-toast";
import ButtonLoading from "../loading/ButtonLoading.jsx";

const Login = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { setUser } = useUser();

    const schema = yup.object({
        email: yup.string()
            .required("Email is required")
            .email("Email is not valid"),
        password: yup.string().required("Password is required")
            .min(6, "Password must be at least 6 characters")
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data, e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { email, password } = data;
            const response = await axios.post('/users/login', { email, password })
            const { user } = response.data;
            setUser(user);
            navigate('/');
        } catch (error) {
            toast.error("Invalid credentials")
        } finally {
            setLoading(false);
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleMouseDown = () => {
        setShowPassword(true);
    }
    const handleMouseUp = () => {
        setShowPassword(false);
    }
    const handleMouseOut = () => {
        setShowPassword(false);
    }

        return (
        <div className="relative w-full h-screen object-cover flex justify-center items-center bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: `url(${backgroundCar})`}}>
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
            <Toaster />
            <div className=" relative flex flex-col md:w-1/2 lg:w-1/3 w-full p-10 rounded-lg bg-black bg-opacity-50">
                <h1 className="text-center text-3xl p-10 font-semibold uppercase text-gray-300">Login</h1>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <InputValidation type="email"
                                     placeholder="Email"
                                     className={"bg-gray-500 bg-opacity-50 rounded-full text-gray-100"}
                                     register={{...register("email")}}
                                     errorMessage={errors.email?.message}
                    />
                    <div className="relative">
                        <InputValidation type={showPassword ? "text" : "password"}
                                         placeholder="Password"
                                         className={"bg-gray-500 bg-opacity-50 rounded-full pr-12 text-gray-100"}
                                         register={{...register("password")}}
                                         errorMessage={errors.password?.message}
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 right-5"
                             onMouseDown={handleMouseDown}
                             onMouseUp={handleMouseUp}
                             onMouseOut={handleMouseOut}>
                            {showPassword ? <FaEye className="text-gray-300 cursor-pointer" size={22} /> : <FaEyeSlash className="text-gray-300 cursor-pointer" size={22}/>}
                        </div>
                    </div>
                    <Link to={"/forgot-password"} className="text-center text-gray-300 font-semibold text-lg pb-2">Forgot password?</Link>
                    <Button type="submit"
                            disabled={loading}
                            label={loading ? <ButtonLoading /> : "Login"}
                            className="bg-gray-900 text-white font-semibold rounded-full py-3"/>
                </form>
                <p className="flex flex-col md:flex-row text-center justify-center md:gap-2 text-gray-300 font-semibold text-lg py-2">Don't have an account? <Link to="/registration" className="text-blue-600">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;