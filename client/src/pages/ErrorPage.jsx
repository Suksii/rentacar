import React from 'react';
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div className="h-screen bg-orange-100 w-full flex items-center justify-center flex-col">
            <h1 className="text-[4rem] text-center font-semibold text-orange-500">404</h1>
            <p className="text-[2rem] text-center font-semibold text-orange-500 py-4">Page Not Found</p>
            <p className="text-[1rem] text-center font-semibold text-orange-500">Sorry, the page you are looking for could not be found.</p>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md mt-5" onClick={() => navigate("/")}>Go back home</button>
        </div>
    );
};

export default ErrorPage;