import React, { useEffect } from 'react';
import CardList from "../components/CardList.jsx";
import car from "../assets/car.jpg";
import {useCar} from "../context/CarContext.jsx";
import Loading from "../loading/Loading.jsx";

const Home = () => {

    const {cars, fetchCars, loading} = useCar()

    useEffect(() => {
        fetchCars();
    }, []);

    if (loading) {
        return (
            <Loading />
        );
    }
    return (
        <div className="w-full mx-auto overflow-x-hidden">
            <div className="relative">
                <img src={car} alt="car" className="w-full h-auto max-h-[600px] object-cover object-center"/>
                <div className="absolute -translate-y-[30%] left-1/2 -translate-x-1/2 w-[130%] md:w-[110%] h-[250px] bg-white rounded-t-[50%]">
                    <div className="py-10 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold text-center uppercase leading-5">Check out</h3>
                        <h1 className="text-4xl text-red-500 font-semibold text-center leading-5">Our Cars</h1>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center py-10">
                <CardList data={cars}/>
            </div>
        </div>
    );
};

export default Home;