import React, {useState} from 'react';
import ReactSlider$1 from "react-slider";
import Select from "./Select.jsx";
import Button from "./Button.jsx";

const FilterCars = ({data, setFilteredCars}) => {

    const prices = data.map(car => car.price).filter(price => price !== null);
    const years = data.map(car => car.year).filter(year => year !== null);
    const driveOptions = [...new Set(data.map(car => car.drive))];
    const fuelOptions = [...new Set(data.map(car => car.fuelType))];
    const modelOptions = [...new Set(data.map(car => car.model))];
    const transmissionOptions = [...new Set(data.map(car => car.transmission))];
    const typeOptions = [...new Set(data.map(car => car.type))];

    const lowestPrice = Math.min(...prices);
    const highestPrice = Math.max(...prices);
    const lowestYear = Math.min(...years);
    const highestYear = Math.max(...years);

    const [priceValue, setPriceValue] = useState([lowestPrice, highestPrice]);
    const [yearValue, setYearValue] = useState([lowestYear, highestYear]);
    const [fuelType, setFuelType] = useState('All');
    const [drive, setDrive] = useState('All');
    const [model, setModel] = useState('All');
    const [transmission, setTransmission] = useState('All');
    const [type, setType] = useState('All');
    console.log(data)


    const handleSubmit = () => {
        const filtered = data.filter(car =>
            car.price >= priceValue[0] &&
            car.price <= priceValue[1] &&
            car.year >= yearValue[0] &&
            car.year <= yearValue[1] &&
            (model === 'All' || car.model === model) &&
            (fuelType === 'All' || car.fuelType === fuelType) &&
            (drive === 'All' || car.drive === drive) &&
            (transmission === 'All' || car.transmission === transmission) &&
            (type === 'All' || car.type === type)
        )
        console.log('clicked')
        setFilteredCars(filtered);
    }

    const handleReset = () => {
        setPriceValue([lowestPrice, highestPrice]);
        setYearValue([lowestYear, highestYear]);
        setFuelType('All');
        setDrive('All');
        setModel('All');
        setTransmission('All');
        setType('All');
        setFilteredCars(data);
    }
    return (
        <div className="flex justify-center items-center flex-col w-full">
            <div className="flex lg:flex-row flex-col justify-around gap-10 py-10">
                <div className={"flex flex-col items-center gap-12"}>
                    <p className="text-xl text-gray-8c00">Price</p>
                    <ReactSlider$1
                        className="h-[5px] w-[400px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer shadow shadow-gray-300"
                        min={lowestPrice}
                        max={highestPrice}
                        value={priceValue}
                        onChange={setPriceValue}
                        renderThumb={(props, state) => (
                            <div
                                {...props}
                                className="h-[25px] w-1 bg-black flex items-center justify-center cursor-grab"
                            >
                                <p className="w-10 text-center py-2 bg-red-500 text-gray-800 font-semibold shadow shadow-black absolute -top-5 -translate-y-1/2">{state.valueNow}</p>
                            </div>
                        )}
                        renderTrack={(props, state) => (
                            <div
                                {...props}
                                className={`top-0 bottom-0 rounded-full ${state.index === 1 ? 'bg-red-500' : 'bg-gray-300'}`}
                            />
                        )}
                    />
                </div>
                <div className={"flex flex-col items-center gap-12"}>
                    <p className="text-xl text-gray-8c00">Year</p>
                    <ReactSlider$1
                        className="h-[5px] w-[400px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer shadow shadow-gray-300"
                        min={lowestYear}
                        max={highestYear}
                        value={yearValue}
                        onChange={setYearValue}
                        renderThumb={(props, state) => (
                            <div
                                {...props}
                                className="h-[25px] w-1 bg-black flex items-center justify-center cursor-grab"
                            >
                                <p className="w-10 text-center py-2 bg-red-500 text-gray-800 font-semibold shadow shadow-black absolute -top-5 -translate-y-1/2">{state.valueNow}</p>
                            </div>
                        )}
                        renderTrack={(props, state) => (
                            <div
                                {...props}
                                className={`top-0 bottom-0 rounded-full ${state.index === 1 ? 'bg-red-500' : 'bg-gray-300'}`}
                            />
                        )}
                    />
                </div>
            </div>
            <div className="w-full bg-red-800 flex items-center justify-center py-4">
                <div className="w-[95%] mx-auto grid sm:grid-cols-2 xl:grid-cols-6 gap-2 items-end">
                    <Select setSelected={setModel}
                            options={['All', ...modelOptions]}
                            label="Model"
                            selected={model}
                            className={"min-w-[180px] cursor-pointer"}
                    />
                    <Select setSelected={setFuelType}
                            options={['All', ...fuelOptions]}
                            label="Fuel Type"
                            selected={fuelType}
                            className={"min-w-[180px] cursor-pointer"}
                    />
                    <Select setSelected={setDrive}
                            label="Drive"
                            options={['All', ...driveOptions]}
                            selected={drive}
                            className={"min-w-[180px] cursor-pointer"}
                    />
                    <Select setSelected={setTransmission}
                            label="Transmission"
                            options={['All', ...transmissionOptions]}
                            selected={transmission}
                            className={"min-w-[180px] cursor-pointer"}
                    />
                    <Select setSelected={setType}
                            label="Type"
                            options={['All', ...typeOptions]}
                            selected={type}
                            className={"min-w-[180px] cursor-pointer"}
                    />
                    <div className="flex gap-4 w-full h-fit">
                        <Button onClick={handleReset} label="Reset" className="w-full flex-grow bg-gray-900 text-white font-semibold rounded-sm py-3"/>
                        <Button onClick={handleSubmit} label="Search" className="w-full flex-grow bg-gray-900 text-white font-semibold rounded-sm py-3"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterCars;