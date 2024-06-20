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

const Login = () => {

    const navigate = useNavigate();

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
        const { email, password } = data;
        try {
            await axios.post('/users/login', { email, password })
            navigate('/')
        } catch (error) {
            alert("Something went wrong")
        }
        console.log(data);
    }

    const [showPassword, setShowPassword] = useState(false);

        return (
        <div className="w-full h-screen object-cover flex justify-center items-center bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: `url(${backgroundCar})`}}>
            <div className="flex flex-col md:w-1/2 lg:w-1/3 w-full p-10 rounded-lg shadow-lg shadow-black">
                <h1 className="text-center text-3xl p-10 font-semibold uppercase">Login</h1>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <InputValidation type="email"
                                     placeholder="Email"
                                     className={"bg-gray-500 bg-opacity-50 rounded-full"}
                                     register={{...register("email")}}
                                     errorMessage={errors.email?.message}
                    />
                    <div className="relative">
                        <InputValidation type={showPassword ? "text" : "password"}
                                         placeholder="Password"
                                         className={"bg-gray-500 bg-opacity-50 rounded-full"}
                                         register={{...register("password")}}
                                         errorMessage={errors.password?.message}
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 right-5" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash className="text-gray-800" size={22} /> : <FaEye className="text-gray-800" size={22}/>}
                        </div>
                    </div>

                    <Button type="submit" label="Login" className="bg-gray-900 text-white font-semibold rounded-full"/>
                </form>
                <p className="flex flex-col md:flex-row text-center justify-center md:gap-2 text-gray-300 font-semibold text-lg py-2">Don't have an account? <Link to="/registration" className="text-blue-900">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;