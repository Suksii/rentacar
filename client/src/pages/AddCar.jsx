import React, {useEffect, useRef, useState} from 'react';
import Button from "../components/Button.jsx";
import Select from "../components/Select.jsx";
import Input from "../components/Input.jsx";
import Textarea from "../components/Textarea.jsx";
import axios from "axios";
import {FiCameraOff} from "react-icons/fi";
import {useNavigate, useParams} from "react-router-dom";

const AddCar = () => {

    const [selectedYear, setSelectedYear] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [seats, setSeats] = useState('');
    const [transmission, setTransmission] = useState('');
    const [errors, setErrors] = useState({});
    const imgRef = useRef(null);
    const navigate = useNavigate();

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
    const { id } = useParams();

    const changeImage = () => {
        const file = imgRef.current.files[0];
        const data = new FormData();
        data.append('photos', file);
        axios.post('/cars/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            const {data: filename} = response;
            setSelectedImage(filename[0]);
        }).catch(error => {
            console.log(error);
        });
    }
    useEffect(() => {
        if (!id) return;
        const fetchCar = async () => {
            try {
                const response = await axios.get(`/cars/${id}`);
                const {data} = response;
                setSelectedModel(data.model);
                setName(data.name);
                setSelectedYear(data.year);
                setSelectedImage(data.image);
                setFuelType(data.fuelType);
                setSeats(data.seats);
                setTransmission(data.transmission);
                setDescription(data.description);
                setPrice(data.price);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCar();
    }, [id]);

    const saveCar = async (e) => {
        let errorMessages = {};

        if (!selectedModel) errorMessages.selectedModel = 'Model is required';
        if (!name) errorMessages.name = 'Name is required';
        if (!selectedYear) errorMessages.selectedYear = 'Year is required';
        if (!selectedImage) errorMessages.selectedImage = 'Image is required';
        if (!fuelType) errorMessages.fuelType = 'Fuel type is required';
        if (!seats) errorMessages.seats = 'Seats are required';
        if (!transmission) errorMessages.transmission = 'Transmission is required';
        if (!description) errorMessages.description = 'Description is required';
        if (!price) errorMessages.price = 'Price is required';

        if (Object.keys(errorMessages).length > 0) {
            setErrors(errorMessages);
            return;
        }

        e.preventDefault();

        try {
            const response = await axios({
                method: id ? 'put' : 'post',
                url: id ? `/cars/update/${id}` : '/cars/add',
                data: {
                    model: selectedModel,
                    name: name,
                    year: selectedYear,
                    image: selectedImage,
                    fuelType: fuelType,
                    seats: seats,
                    transmission: transmission,
                    description: description,
                    price: price
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        navigate('/');
    }

    return (
        <div className="max-w-2xl mx-auto pb-12">
            <h1 className="text-4xl font-semibold text-center py-5">{id ? 'Edit Car' : 'Add Car'}</h1>
            <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-10 py-10">
                <div className="w-[90%] mx-auto md:w-full flex flex-col gap-2 justify-center md:justify-start items-center">
                    {selectedImage ? <img src={`http://localhost:3000/uploads/` + selectedImage}
                          alt="car"
                          className="w-[200px] h-[200px] object-cover object-center rounded-md"/> :
                        <div className="w-[200px] h-[200px] bg-gray-300 flex justify-center items-center rounded-md text-gray-500">
                            <FiCameraOff size={50} />
                        </div>
                    }
                    <div onClick={() => imgRef.current.click()} className="text-center font-semibold py-2 min-w-[200px] px-5 bg-gray-300 cursor-pointer rounded-sm">
                        Change Image
                        <input type={"file"}
                               ref={ imgRef }
                               className="hidden py-3 px-4 m-2 outline-none text-xl"
                               onChange={changeImage}
                        />
                    </div>
                    <p className="text-red-500 text-sm font-semibold">{errors.selectedImage}</p>
                    <Select label="Model"
                            options={carMakes}
                            selected={selectedModel}
                            setSelected={setSelectedModel}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.selectedModel}</p>
                    <Input label="Name"
                           placeholder={"Enter name"}
                           className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.name}</p>
                    <Select label="Year"
                            options={years}
                            selected={selectedYear}
                            setSelected={setSelectedYear}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.selectedYear}</p>
                </div>
                <div className="w-[90%] mx-auto md:w-full flex flex-col gap-2">
                    <Select label="Fuel types"
                            options={fuelTypes}
                            selected={fuelType}
                            setSelected={setFuelType}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.fuelType}</p>
                    <Select label="Seats"
                            options={seatNumbers}
                            selected={seats}
                            setSelected={setSeats}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.seats}</p>
                    <Select label="Transmission"
                            options={transmissionTypes}
                            selected={transmission}
                            setSelected={setTransmission}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.transmission}</p>
                    <Textarea label="Description"
                              placeholder={"Enter description"}
                              className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}
                              onChange={(e) => setDescription(e.target.value)}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.description}</p>
                    <Input label="Price"
                           type={"number"}
                           placeholder={"Enter price"}
                           className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}
                           value={price}
                           onChange={(e) => setPrice(e.target.value)}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.price}</p>
                </div>
            </div>
            <div className="w-[90%] mx-auto md:w-full ">
                <Button label={id ? 'Save Changes' : 'Add Car'}
                        className="w-full bg-gray-900 text-white font-semibold rounded-sm"
                        onClick={saveCar}
                />
            </div>

        </div>
    );
};

export default AddCar;