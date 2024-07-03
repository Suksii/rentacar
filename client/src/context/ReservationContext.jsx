import {createContext, useCallback, useContext, useState} from "react";
import axios from "axios";

const ReservationContext = createContext();

export const ReservationProvider = ({children}) => {

        const [pickupDate, setPickupDate] = useState(null);
        const [returnDate, setReturnDate] = useState(null);
        const [price, setPrice] = useState(0);
        const [totalPrice, setTotalPrice] = useState(0);
        const [reservations, setReservations] = useState({});
        const [status, setStatus] = useState('Pending...');
        const [clientReservations, setClientReservations] = useState({});

        const mapReservations = (data) => {
                return data.map(reservation => {
                const carName = reservation?.car?.model + ' ' + reservation?.car?.name;
                const userEmail = reservation?.user?.email;
                const rentalDate = new Date(reservation?.rentalDate).toLocaleDateString();
                const pickupDate = new Date(reservation?.startDate).toLocaleDateString();
                const returnDate = new Date(reservation?.endDate).toLocaleDateString();
                return{
                        ...reservation,
                        car: carName,
                        user: userEmail,
                        rentalDate: rentalDate,
                        startDate: pickupDate,
                        endDate: returnDate,
                        price: reservation?.totalPrice,
                }})};

        const fetchReservations = useCallback(async () => {
                try {
                        const response = await axios.get('/reservations');
                        const { data } = response;
                        const mappedReservations = mapReservations(data);
                        console.log(mappedReservations);
                        setReservations(mappedReservations);
                } catch (error) {
                        console.error(error);
                }
        }, []);

        const fetchClientReservations = useCallback(async () => {
                try {
                        const response = await axios.get('/reservations/client-reservations');
                        const { data } = response;
                        const mappedReservations = mapReservations(data);
                        console.log(mappedReservations);
                        setClientReservations(mappedReservations);
                } catch (error) {
                        console.error(error);
                }
        }, []);

        return (
            <ReservationContext.Provider value={{
                pickupDate,
                setPickupDate,
                returnDate,
                setReturnDate,
                reservations,
                setReservations,
                price,
                totalPrice,
                setTotalPrice,
                setPrice,
                fetchReservations,
                fetchClientReservations,
                clientReservations
            }}>
                {children}
            </ReservationContext.Provider>
        );

}
export const useReservation = () => {
    return useContext(ReservationContext);
}

export default ReservationContext;