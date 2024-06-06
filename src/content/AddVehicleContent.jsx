import React, {useState} from 'react';
import Button from "../components/Button.jsx";
import Select from "../components/Select.jsx";
import {useForm} from "react-hook-form";

const AddVehicleContent = () => {

    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);

    const getYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let year = currentYear; year >= 2000; year--) {
            years.push(year);
        }
        return years;
    };

    const years = getYears();

    const carMakes = ["Audi", "BMW", "Mercedes", "Toyota", "Volkswagen", "Volvo"];

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-semibold">Add Vehicle</h1>
            <input type={"file"} className="py-3 px-4 m-2 outline-none text-xl placeholder-gray-900"/>
            <Select label="Year" data={years}/>
            <Select label="Model" data={carMakes}/>
                <Button label="Add Vehicle" className="bg-gray-900 text-white font-semibold rounded-full"/>
        </div>
    );
};

export default AddVehicleContent;