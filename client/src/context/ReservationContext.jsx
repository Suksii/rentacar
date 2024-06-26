import {createContext, useContext, useState} from "react";
import axios from "axios";

const ReservationContext = createContext();

export const ReservationProvider = ({children}) => {

        const [pickupDate, setPickupDate] = useState(null);
        const [returnDate, setReturnDate] = useState(null);
        const [price, setPrice] = useState(0);
        const [reservation, setReservation] = useState({});

        const fetchReservations = async () => {
                try {
                        const response = await axios.get('/reservations');
                        const { data } = response;
                        const mappedReservations = data.map(reservation => {
                                const carName = reservation.car.model + ' ' + reservation.car.name;
                                const userEmail = reservation.user.email;
                                const rentalDate = new Date(reservation.rentalDate).toLocaleDateString();
                                return{
                                ...reservation,
                                car: carName,
                                user: userEmail,
                                rentalDate: rentalDate,
                                startDate: pickupDate,
                                endDate: returnDate
                        }});
                        console.log(mappedReservations);
                        setReservation(mappedReservations);
                } catch (error) {
                        console.error(error);
                }
        }


        return (
            <ReservationContext.Provider value={{
                pickupDate,
                setPickupDate,
                returnDate,
                setReturnDate,
                reservation,
                setReservation,
                price,
                setPrice,
                fetchReservations
            }}>
                {children}
            </ReservationContext.Provider>
        );

}
export const useReservation = () => {
    return useContext(ReservationContext);
}

export default ReservationContext;