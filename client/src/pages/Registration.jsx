import React, {useState} from 'react';
import backgroundCar from "../assets/background-car.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputValidation from "../components/InputValidation.jsx";
import Button from "../components/Button.jsx";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {FaEye, FaEyeSlash } from "react-icons/fa6";

const Registration = () => {

    const navigate = useNavigate();

    const schema = yup.object({
        firstName: yup.string()
            .required("First Name is required"),
        lastName: yup.string()
            .required("Last Name is required"),
        phoneNumber: yup.number()
            .required("Phone Number is required").typeError("Phone Number must be a number"),
        email: yup.string()
            .required("Email is required")
            .email("Email is not valid"),
        passportNumber: yup.string()
            .required("Passport Number is required"),
        country: yup.string()
            .required("Country is required"),
        password: yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const onSubmit = async (data) => {
        try {
            await axios.post('/users/register', data)
            navigate('/login')
        } catch (error) {
            alert("Something went wrong")
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
        <div className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: `url(${backgroundCar})`}}>
            <div className="flex flex-col md:w-1/2 lg:w-[700px] w-full p-10 rounded-lg shadow-lg shadow-black">
                <h1 className="text-center text-3xl p-10 font-semibold uppercase">Registration</h1>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <InputValidation type="text"
                                     placeholder="First Name"
                                     className="bg-gray-500 bg-opacity-50 rounded-full placeholder-gray-900"
                                     register={{...register("firstName")}}
                                     errorMessage={errors.firstName?.message}
                    />
                    <InputValidation type="text"
                                     placeholder="Last Name"
                                     className="bg-gray-500 bg-opacity-50 rounded-full placeholder-gray-900"
                                     register={{...register("lastName")}}
                                     errorMessage={errors.lastName?.message}
                    />
                    <InputValidation type="text"
                                     placeholder="Phone Number"
                                     className="bg-gray-500 bg-opacity-50 rounded-full placeholder-gray-900"
                                     register={{...register("phoneNumber")}}
                                     errorMessage={errors.phoneNumber?.message}
                    />
                    <InputValidation type="email"
                                     placeholder="Email"
                                     className="bg-gray-500 bg-opacity-50 rounded-full placeholder-gray-900"
                                     register={{...register("email")}}
                                     errorMessage={errors.email?.message}
                    />
                    <div className="flex lg:flex-row flex-col w-full">
                        <InputValidation placeholder="Passport Number"
                                         className="bg-gray-500 bg-opacity-50 rounded-full placeholder-gray-900"
                                         register={{...register("passportNumber")}}
                                         errorMessage={errors.passportNumber?.message}
                        />
                        <InputValidation placeholder="Country"
                                         className="bg-gray-500 bg-opacity-50 rounded-full placeholder-gray-900"
                                         register={{...register("country")}}
                                         errorMessage={errors.country?.message}
                        />
                    </div>
                    <div className="relative">
                        <InputValidation type={showPassword ? "text" : "password"}
                                         placeholder="Password"
                                         className="bg-gray-500 bg-opacity-50 rounded-full placeholder-gray-900"
                                         register={{...register("password")}}
                                         errorMessage={errors.password?.message}
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 right-5"
                             onMouseDown={handleMouseDown}
                             onMouseUp={handleMouseUp}
                             onMouseOut={handleMouseOut}>
                            {showPassword ? <FaEyeSlash className="text-gray-800" size={22} /> : <FaEye className="text-gray-800" size={22}/>}
                        </div>
                    </div>

                    <Button type="submit" label="Register" className="bg-gray-900 text-white font-semibold rounded-full"/>
                </form>
                <p className="flex flex-col md:flex-row text-center justify-center md:gap-2 text-gray-300 font-semibold text-lg py-2">Already have an account? <Link to="/login" className="text-blue-900">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;