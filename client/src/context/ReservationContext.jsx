import {createContext, useCallback, useContext, useState} from "react";
import axios from "axios";

const ReservationContext = createContext();

export const ReservationProvider = ({children}) => {

        const [pickupDate, setPickupDate] = useState(null);
        const [returnDate, setReturnDate] = useState(null);
        const [price, setPrice] = useState(0);
        const [totalPrice, setTotalPrice] = useState(0);
        const [reservations, setReservations] = useState({});
        const [clientReservations, setClientReservations] = useState({});
        const [loading, setLoading] = useState(false);



        const mapReservations = (data) => {
                return data.map(reservation => {
                const carName = reservation?.car?.model + ' ' + reservation?.car?.name;
                const carId = reservation?.car?._id;
                const userEmail = reservation?.user?.email;
                const rentalDate = new Date(reservation?.rentalDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});
                const pickupDate = new Date(reservation?.startDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});
                const returnDate = new Date(reservation?.endDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});
                return{
                        ...reservation,
                        carId: carId,
                        car: carName,
                        user: userEmail,
                        rentalDate: rentalDate,
                        startDate: pickupDate,
                        endDate: returnDate,
                        price: reservation?.totalPrice,
                }})};

        const fetchReservations = useCallback(async () => {
                setLoading(true)
                try {
                        const response = await axios.get('/reservations');
                        const { data } = response;
                        const mappedReservations = mapReservations(data);
                        console.log(mappedReservations);
                        setReservations(mappedReservations);
                } catch (error) {
                        console.error(error);
                } finally {
                        setLoading(false);
                }
        }, []);

        const fetchClientReservations = useCallback(async () => {
                setLoading(true)
                try {
                        const response = await axios.get('/reservations/client-reservations');
                        const { data } = response;
                        const mappedReservations = mapReservations(data);
                        console.log(mappedReservations);
                        setClientReservations(mappedReservations);
                } catch (error) {
                        console.error(error);
                } finally {
                        setLoading(false);
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
                clientReservations,
                setClientReservations,
                loading,
                setLoading
            }}>
                {children}
            </ReservationContext.Provider>
        );

}
export const useReservation = () => {
    return useContext(ReservationContext);
}

export default ReservationContext;