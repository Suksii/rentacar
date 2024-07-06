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
    const [type, setType] = useState('');
    const [engine, setEngine] = useState('');
    const [mileage, setMileage] = useState('');
    const [drive, setDrive] = useState('');
    const [plate, setPlate] = useState('');
    const [color, setColor] = useState('');
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

    const carTypes = ["Sedan", "Coupe", "Convertible", "SUV", "Truck", "Van"];
    const seatNumbers = [2, 4, 5, 7, 9];
    const fuelTypes = ["Diesel", "Electric", "Gasoline", "Hybrid"];
    const transmissionTypes = ["Automatic", "Manual", "Tiptronic"];
    const driveTypes = ["Front", "Rear", "4x4"];
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
                setMileage(data.mileage);
                setDrive(data.drive);
                setPlate(data.plate);
                setColor(data.color);
                setType(data.type);
                setEngine(data.engine);
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
        if (!mileage) errorMessages.mileage = 'Mileage is required';
        if (!drive) errorMessages.drive = 'Drive is required';
        if (!plate) errorMessages.plate = 'Plate is required';
        if (!color) errorMessages.color = 'Color is required';
        if (!type) errorMessages.type = 'Type is required';
        if (!engine) errorMessages.engine = 'Engine is required';
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
                    mileage: mileage,
                    drive: drive,
                    plate: plate,
                    color: color,
                    type: type,
                    engine: engine,
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
        <div className="w-[60%] mx-auto pb-12">
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
                        Select Image
                        <input type={"file"}
                               ref={ imgRef }
                               className="hidden py-3 px-4 m-2 outline-none text-xl"
                               onChange={changeImage}
                        />
                    </div>
                    <p className="text-red-500 text-sm font-semibold">{errors.selectedImage}</p>
                    <Input label="Model"
                           placeholder={"Enter model"}
                           className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}
                           value={selectedModel}
                           onChange={(e) => setSelectedModel(e.target.value)}
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
                    <Input label="Engine designation"
                           placeholder={"Enter engine"}
                           className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}
                           value={engine}
                           onChange={(e) => setEngine(e.target.value)}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.engine}</p>
                    <Input label="Color"
                           placeholder={"Enter color"}
                           className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}
                           value={color}
                           onChange={(e) => setColor(e.target.value)}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.color}</p>
                    <Select label="Type"
                            options={carTypes}
                            selected={type}
                            setSelected={setType}
                    />
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
                    <Input label="Mileage"
                           type={"number"}
                           placeholder={"Enter mileage"}
                           className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}
                           value={mileage}
                           onChange={(e) => setMileage(e.target.value)}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.mileage}</p>
                    <Select label="Drive"
                            options={driveTypes}
                            selected={drive}
                            setSelected={setDrive}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.drive}</p>
                    <Input label="Plate"
                            placeholder={"Enter plate"}
                            className={"rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md"}
                            value={plate}
                            onChange={(e) => setPlate(e.target.value)}
                    />
                    <p className="text-red-500 text-sm font-semibold">{errors.plate}</p>
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