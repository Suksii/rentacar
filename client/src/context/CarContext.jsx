import {createContext, useContext, useState} from "react";
import axios from "axios";

const CarContext = createContext();

export const CarProvider = ({children}) => {

    const [car, setCar] = useState({});
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

    const fetchCar = async (id) => {
        axios.get(`/cars/${id}`).then(response => {
            const {data} = response;
            setCar(data);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <CarContext.Provider value={{
            cars,
            setCars,
            fetchCars,
            car,
            setCar,
            fetchCar
        }}>
            {children}
        </CarContext.Provider>
    );
}
export const useCar = () => {
    return useContext(CarContext);
}

export default CarContext;