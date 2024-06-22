import React, {useRef, useState} from 'react';
import Button from "../components/Button.jsx";
import Select from "../components/Select.jsx";
import Input from "../components/Input.jsx";
import Textarea from "../components/Textarea.jsx";
import axios from "axios";

const AddCar = () => {

    const [selectedYear, setSelectedYear] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    // const [selectedImage, setSelectedImage] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [seats, setSeats] = useState('');
    const [transmission, setTransmission] = useState('');
    // const imgRef = useRef(null);

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
    const transmissionTypes = ["Automatic", "Manual", "Tiptronic"];

    // const changeImage = () => {
    //     const file = imgRef.current.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setSelectedImage(reader.result);
    //     }
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }
    // }

    const addCar = async () => {
        try {
            const response = await axios.post('/cars/add', {
                model: selectedModel,
                name: name,
                year: selectedYear,
                // image: selectedImage,
                fuelType: fuelType,
                seats: seats,
                transmission: transmission,
                description: description,
                price: price
            })
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        console.log(selectedModel, name, selectedYear, fuelType, seats, transmission, description, price)
    }

    return (
        <div className="max-w-2xl mx-auto pb-12">
            <h1 className="text-4xl font-semibold text-center py-5">Add Car</h1>
            <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-10 py-10">
                <div className="w-[90%] mx-auto md:w-full flex flex-col gap-2 justify-center md:justify-start items-center">
                    {/*<img src={selectedImage} alt="car" className="w-[200px] h-[200px] object-cover object-center rounded-md"/>*/}
                    {/*<div onClick={() => imgRef.current.click()} className="text-center font-semibold py-2 min-w-[200px] px-5 bg-gray-300 cursor-pointer rounded-sm">*/}
                    {/*    Change Image*/}
                    {/*    <input type={"file"}*/}
                    {/*           ref={ imgRef }*/}
                    {/*           className="hidden py-3 px-4 m-2 outline-none text-xl"*/}
                    {/*           onChange={changeImage}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <Select label="Model"
                            options={carMakes}
                            selected={selectedModel}
                            setSelected={setSelectedModel}
                    />
                    <Input label="Name"
                           placeholder={"Enter name"}
                           className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}
                           onChange={(e) => setName(e.target.value)}
                    />
                    <Select label="Year"
                            options={years}
                            selected={selectedYear}
                            setSelected={setSelectedYear}
                    />
                </div>
                <div className="w-[90%] mx-auto md:w-full flex flex-col gap-2">
                    <Select label="Fuel types"
                            options={fuelTypes}
                            selected={fuelType}
                            setSelected={setFuelType}
                    />
                    <Select label="Seats"
                            options={seatNumbers}
                            selected={seats}
                            setSelected={setSeats}
                    />
                    <Select label="Transmission"
                            options={transmissionTypes}
                            selected={transmission}
                            setSelected={setTransmission}
                    />
                    <Textarea label="Description"
                              placeholder={"Enter description"}
                              className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}
                              onChange={(e) => setDescription(e.target.value)}
                    />
                    <Input label="Price"
                           placeholder={"Enter price"}
                           className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}
                           onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
            </div>
            <div className="w-[90%] mx-auto md:w-full ">
                <Button label="Add Car"
                        className="w-full bg-gray-900 text-white font-semibold rounded-sm"
                        onClick={addCar}
                />
            </div>

        </div>
    );
};

export default AddCar;