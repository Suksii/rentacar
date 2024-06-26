import React, {useEffect} from 'react';
import {useCar} from "../context/CarContext.jsx";

const CarContent = ({id}) => {

    const { car, fetchCar } = useCar();

    useEffect(() => {
        fetchCar(id);
    }, [id]);

    return (
            <div className="flex items-start">
                <div className="m-10" style={{flex: 1}}>
                    <img src={`http://localhost:3000/uploads/${car.image}`} alt="car" className="w-full h-full object-cover object-center"/>
                </div>
                <div style={{flex: 1}}>
                    <div className="w-full flex items-end py-4" >
                        <h1 className="text-3xl font-semibold">{car.name} {car.model}</h1>
                        <p className="text-gray-500 ml-2">{car.year}</p>
                    </div>
                </div>
            </div>

    );
};

export default CarContent;