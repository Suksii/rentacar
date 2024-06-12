import React from 'react';
import backgroundCar from "../assets/background-car.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputValidation from "../components/InputValidation.jsx";
import Button from "../components/Button.jsx";
import {Link} from "react-router-dom";

const Registration = () => {

    const schema = yup.object({
        firstName: yup.string()
            .required("First Name is required"),
        lastName: yup.string()
            .required("Last Name is required"),
        username: yup.string()
            .required("Username is required").min(4, "Username must be at least 4 characters"),
        email: yup.string()
            .required("Email is required")
            .email("Email is not valid"),
        password: yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: `url(${backgroundCar})`}}>
            <div className="flex flex-col md:w-1/2 lg:w-1/3 w-full p-10 rounded-lg shadow-lg shadow-black">
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
                                     placeholder="Username"
                                     className="bg-gray-500 bg-opacity-50 rounded-full placeholder-gray-900"
                                     register={{...register("username")}}
                                     errorMessage={errors.username?.message}
                    />
                    <InputValidation type="email"
                                     placeholder="Email"
                                     className="bg-gray-500 bg-opacity-50 rounded-full placeholder-gray-900"
                                     register={{...register("email")}}
                                     errorMessage={errors.email?.message}
                    />
                    <InputValidation type="password"
                                     placeholder="Password"
                                     className="bg-gray-500 bg-opacity-50 rounded-full placeholder-gray-900"
                                     register={{...register("password")}}
                                     errorMessage={errors.password?.message}
                    />
                    <Button type="submit" label="Register" className="bg-gray-900 text-white font-semibold rounded-full"/>
                </form>
                <p className="flex justify-center gap-2 text-gray-300 font-semibold text-lg py-2">Already have an account? <Link to="/login" className="text-blue-900">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;