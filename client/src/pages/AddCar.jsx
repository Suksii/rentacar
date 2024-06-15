import React, {useRef, useState} from 'react';
import Button from "../components/Button.jsx";
import Select from "../components/Select.jsx";
import car from "../assets/car.jpg";
import Input from "../components/Input.jsx";
import Textarea from "../components/Textarea.jsx";

const AddCar = () => {

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
    const seatNumbers = [2, 4, 5, 7, 9];
    const fuelTypes = ["Diesel", "Electric", "Gasoline", "Hybrid"];
    const transmissionTypes = ["Automatic", "Manual"];

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
        <div className="max-w-2xl mx-auto pb-12">
            <h1 className="text-4xl font-semibold text-center py-5">Add Car</h1>
            <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-10 py-10">
                <div className="w-[90%] mx-auto md:w-full flex flex-col gap-2 justify-center md:justify-start items-center">
                    <img src={selectedImage} alt="car" className="w-[200px] h-[200px] object-cover object-center rounded-md"/>
                    <div onClick={() => imgRef.current.click()} className="text-center font-semibold py-2 min-w-[200px] px-5 bg-gray-300 cursor-pointer rounded-sm">
                        Change Image
                        <input type={"file"}
                               ref={ imgRef }
                               className="hidden py-3 px-4 m-2 outline-none text-xl"
                               onChange={changeImage}
                        />
                    </div>
                    <Select label="Model" data={carMakes}/>
                    <Input label="Name" placeholder={"Enter name"} className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}/>
                    <Select label="Year" data={years}/>
                </div>
                <div className="w-[90%] mx-auto md:w-full flex flex-col gap-2">
                    <Select label="Fuel types" data={fuelTypes}/>
                    <Select label="Seats" data={seatNumbers}/>
                    <Select label="Transmission" data={transmissionTypes}/>
                    <Textarea label="Description" placeholder={"Enter description"} className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}/>
                    <Input label="Price" placeholder={"Enter price"} className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}/>
                </div>
            </div>
            <div className="w-[90%] mx-auto md:w-full ">
                <Button label="Add Car" className="w-full bg-gray-900 text-white font-semibold rounded-sm"/>
            </div>

        </div>
    );
};

export default AddCar;