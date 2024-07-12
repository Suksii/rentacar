import React, {useEffect} from 'react';
import {useCar} from "../context/CarContext.jsx";
import {BsStarFill} from "react-icons/bs";

const CarContent = ({id}) => {

    const { car, fetchCar } = useCar();

    useEffect(() => {
        fetchCar(id);
    }, [id]);

    const displayRating = (rating) => {
        if(rating % 1 === 0) return rating.toString()
        return Number(rating).toFixed(1).toString()
    }

    return (
            <div className="flex px-10 py-5 gap-5">
                <div style={{flex: 1}}>
                    <div className="relative">
                        <img src={`http://localhost:3000/uploads/${car?.image}`} alt="car" className="w-full h-full object-cover object-center"/>
                        {car?.ratings?.length > 0 && <div className="absolute top-0 right-0">
                            <BsStarFill size={50}  className="text-yellow-300"/>
                            <p className="absolute top-1/2 -translate-y-1/3 left-1/2 -translate-x-1/2 font-semibold">{displayRating(car.averageRating)}</p>
                        </div>}
                        {car?.ratings?.length > 0 && <p className="font-semibold">{car?.ratings?.length} reviews</p>}
                    </div>
                    <div className="mt-2">
                        <p className="text-lg">{car?.description}</p>
                    </div>
                </div>
                <div style={{flex: 1}} className="flex flex-col gap-2">
                    <div className="w-full flex items-end py-4" >
                        <h1 className="text-3xl font-semibold">{car?.model} {car?.name} - {car?.engine}</h1>
                        <p className="text-gray-500 ml-2">{car?.year}</p>
                    </div>
                    <div className="flex justify-between border-b border-orange-400">
                        <p className="text-xl">Year of production</p>
                        <p className="text-lg">{car?.year}</p>
                    </div>
                    <div className="flex justify-between border-b border-orange-400">
                        <p className="text-xl">Engine</p>
                        <p className="text-lg">{car?.engine}</p>
                    </div>
                    <div className="flex justify-between border-b border-orange-400">
                        <p className="text-xl">Fuel type</p>
                        <p className="text-lg">{car?.fuelType}</p>
                    </div>
                    <div className="flex justify-between border-b border-orange-400">
                        <p className="text-xl">Number of seats</p>
                        <p className="text-lg">{car?.seats}</p>
                    </div>
                    <div className="flex justify-between border-b border-orange-400">
                        <p className="text-xl">Transmission</p>
                        <p className="text-lg">{car?.transmission}</p>
                    </div>
                    <div className="flex justify-between border-b border-orange-400">
                        <p className="text-xl">Color</p>
                        <p className="text-lg">{car?.color}</p>
                    </div>
                    <div className="flex justify-between border-b border-orange-400">
                        <p className="text-xl">Mileage</p>
                        <p className="text-lg">{car?.mileage}</p>
                    </div>
                    <div className="flex justify-between border-b border-orange-400">
                        <p className="text-xl">Type</p>
                        <p className="text-lg">{car?.type}</p>
                    </div>
                    <div className="flex justify-between border-b border-orange-400">
                        <p className="text-xl">Transmission</p>
                        <p className="text-lg">{car?.transmission}</p>
                    </div>
                    <div className="flex justify-between border-b border-orange-400">
                        <p className="text-xl">Price per day</p>
                        <p className="text-lg">{car?.price} €</p>
                    </div>
                </div>
            </div>

    );
};

export default CarContent;