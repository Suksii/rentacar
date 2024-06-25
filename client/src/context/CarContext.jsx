import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const CarContext = createContext();

export const CarProvider = ({children}) => {

    const [cars, setCars] = useState([]);

    const fetchCars = async () => {
        axios.get('/cars').then(response => {
            const {data} = response;
            setCars(data);
            console.log(data)
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <CarContext.Provider value={{
            cars,
            setCars,
            fetchCars
        }}>
            {children}
        </CarContext.Provider>
    );
}
export const useCar = () => {
    return useContext(CarContext);
}

export default CarContext;