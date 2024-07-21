import React, {useState} from 'react';
import backgroundCar from "../assets/background-car.jpg";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import ButtonLoading from "../loading/ButtonLoading.jsx";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const ForgotPassword = () => {

    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const { id, token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`/users/reset-password/${id}/${token}`, {password});
            if (response.data) {
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="relative w-full h-screen object-cover flex justify-center items-center bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: `url(${backgroundCar})`}}>
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
            <div className=" relative flex flex-col md:w-1/2 lg:w-1/3 w-full p-10 rounded-lg bg-black bg-opacity-50">
                <h1 className="text-center text-3xl p-10 font-semibold uppercase text-gray-300">Forgot Password</h1>
                <Input type="password"
                       placeholder="New Password"
                       value={password}
                       className={"bg-gray-500 bg-opacity-50 rounded-full text-gray-100 py-3 my-4"}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit"
                        disabled={loading}
                        label={loading ? <ButtonLoading /> : "Update Password"}
                        className="bg-gray-900 text-white font-semibold rounded-full py-3"
                        onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

export default ForgotPassword;