import React from 'react';
import backgroundCar from "../assets/background-car.jpg";

const Registration = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: `url(${backgroundCar})`}}>
            <div className="flex flex-col md:w-1/2 lg:w-1/3 w-full p-10 rounded-lg shadow-lg shadow-black">
                <h1 className="text-center text-3xl p-10 font-semibold uppercase">Registration</h1>
                <form className="flex flex-col">
                    <input type="text"
                           placeholder="First Name"
                           className="py-3 px-4 m-2 bg-gray-500 bg-opacity-50 rounded-full outline-none text-xl placeholder-gray-900" />
                    <input type="text"
                           placeholder="Last Name"
                           className="py-3 px-4 m-2 bg-gray-500 bg-opacity-50 rounded-full outline-none text-xl placeholder-gray-900" />
                        <input type="text"
                               placeholder="Username"
                               className="py-3 px-4 m-2 bg-gray-500 bg-opacity-50 rounded-full outline-none text-xl placeholder-gray-900" />
                    <input type="email"
                           placeholder="Email"
                           className="py-3 px-4 m-2 bg-gray-500 bg-opacity-50 rounded-full outline-none text-xl placeholder-gray-900" />
                    <input type="password"
                           placeholder="Password"
                           className="py-3 px-4 m-2 bg-gray-500 bg-opacity-50 rounded-full outline-none text-xl placeholder-gray-900" />
                    <button className="p-3 m-2 bg-gray-900 rounded-full outline-none text-xl uppercase text-gray-200 tracking-widest font-semibold">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;