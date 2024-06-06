import React from 'react';
import backgroundCar from "../assets/background-car.jpg";
import Input from "../components/Input.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button.jsx";

const Login = () => {

    const schema = yup.object({
        username: yup.string()
            .required("Username is required")
            .min(4, "Username must be at least 4 characters"),
        password: yup.string().required("Password is required")
            .min(6, "Password must be at least 6 characters")
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);

    }

        return (
        <div className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: `url(${backgroundCar})`}}>
            <div className="flex flex-col md:w-1/2 lg:w-1/3 w-full p-10 rounded-lg shadow-lg shadow-black">
                <h1 className="text-center text-3xl p-10 font-semibold uppercase">Login</h1>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text"
                           placeholder="Username"
                           className={"bg-gray-500 bg-opacity-50 rounded-full"}
                           register={{...register("username")}}
                           errorMessage={errors.username?.message}
                    />
                    <Input type={"password"}
                           placeholder="Password"
                           className={"bg-gray-500 bg-opacity-50 rounded-full"}
                           register={{...register("password")}}
                           errorMessage={errors.password?.message}
                    />
                    <Button type="submit" label="Login" className="bg-gray-900 text-white font-semibold rounded-full"/>
                </form>
            </div>
        </div>
    );
};

export default Login;