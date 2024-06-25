import {createContext, useContext, useState} from "react";

const ReservationContext = createContext();

export const ReservationProvider = ({children}) => {

        const [pickupDate, setPickupDate] = useState(null);
        const [returnDate, setReturnDate] = useState(null);
        const [price, setPrice] = useState(0);
        const [reservation, setReservation] = useState({});


        return (
            <ReservationContext.Provider value={{
                pickupDate,
                setPickupDate,
                returnDate,
                setReturnDate,
                reservation,
                setReservation,
                price,
                setPrice
            }}>
                {children}
            </ReservationContext.Provider>
        );

}
export const useReservation = () => {
    return useContext(ReservationContext);
}

export default ReservationContext;