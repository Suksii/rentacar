import React, {useEffect, useState} from 'react';
import ReactSlider$1 from "react-slider";

const FilterCars = ({data, setFilteredCars}) => {

    const prices = data.map(car => car.price).filter(price => price !== null);

    const lowestPrice = Math.min(...prices);
    const highestPrice = Math.max(...prices);

    const [value, setValue] = useState([lowestPrice, highestPrice]);

    const handleSubmit = () => {
        const filtered = data.filter(car => car.price >= value[0] && car.price <= value[1]);
        setFilteredCars(filtered);
    }

    return (
        <div className="flex justify-center items-center flex-col">
            <ReactSlider$1
                className={"h-1 w-1/2 bg-red-100 flex items-center justify-center"}
                min={lowestPrice}
                max={highestPrice}
                value={value}
                onChange={setValue}
                thumbClassName={"bg-red-500 w-4 h-4 rounded-full cursor-pointer"}
            />
            <p>Lowest Price: {lowestPrice}</p>
            <p>Highest Price: {highestPrice}</p>
            <p>Selected Price Range: {value[0]} - {value[1]}</p>
            <button onClick={handleSubmit} className="bg-red-500 text-white font-semibold rounded-full px-4 py-2">Submit</button>
        </div>
    );
};

export default FilterCars;