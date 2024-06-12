import React, {useRef, useState} from 'react';
import Button from "../components/Button.jsx";
import Select from "../components/Select.jsx";
import car from "../assets/car.jpg";

const AddVehicleContent = () => {

    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedMake, setSelectedMake] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const imgRef = useRef(null);

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
    const carModels = {
        Audi: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "TT"],
        BMW: ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4"],
        Mercedes: ["A-Class", "B-Class", "C-Class", "E-Class", "S-Class", "CLA", "CLS", "GLA", "GLB", "GLC", "GLE", "GLS", "SL", "SLC", "V-Class"],
        Toyota: ["Aygo", "Yaris", "Corolla", "Camry", "Auris", "Prius", "Avensis", "Verso", "RAV4", "C-HR", "Highlander", "Land Cruiser", "Hilux", "Proace"],
        Volkswagen: ["Up!", "Polo", "Golf", "Passat", "Arteon", "T-Roc", "Tiguan", "Touran", "Sharan", "Touareg", "ID.3", "ID.4", "ID.5", "ID.6"],
        Volvo: ["C30", "S40", "V40", "S60", "V60", "S80", "V90", "XC40", "XC60", "XC70", "XC90"]
    };
    const seatNumbers = [2, 4, 5, 7, 9];

    const changeImage = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        }
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-4xl font-semibold text-center py-5">Add Vehicle</h1>
            <div className="flex justify-between py-10">
                <div className="flex flex-col gap-1">
                    <img src={selectedImage} alt="car" className="w-[200px] h-[200px] object-cover object-center rounded-md"/>
                    <div onClick={() => imgRef.current.click()} className="text-center font-semibold py-2 min-w-[200px] px-5 bg-gray-300 cursor-pointer rounded-md">
                        Change Image
                        <input type={"file"}
                               ref={ imgRef }
                               className="hidden py-3 px-4 m-2 outline-none text-xl"
                               onChange={changeImage}
                        />
                    </div>
                </div>
                <div>
                    <Select label="Year" data={years}/>
                    <Select label="Model" data={carMakes}/>
                    {/*<Select label="Make" data={carModels[selectedMake]}/>*/}
                    <Select label="Seats" data={seatNumbers}/>
                </div>
            </div>
            <Button label="Add Vehicle" className="w-full bg-gray-900 text-white font-semibold rounded-full"/>

        </div>
    );
};

export default AddVehicleContent;