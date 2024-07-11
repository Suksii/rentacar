import {createContext, useContext, useState} from "react";
import axios from "axios";

const CarContext = createContext();

export const CarProvider = ({children}) => {

    const [car, setCar] = useState({});
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCars = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/cars');
            setCars(response.data);
        } catch (error) {
            console.error("Failed to fetch cars:", error)
        } finally {
            setLoading(false);
        }
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
            fetchCar,
            loading
        }}>
            {children}
        </CarContext.Provider>
    );
}
export const useCar = () => {
    return useContext(CarContext);
}

export default CarContext;