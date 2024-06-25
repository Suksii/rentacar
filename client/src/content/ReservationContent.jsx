import React, {useEffect} from 'react';
import Input from "../components/Input.jsx";
import {useReservation} from "../context/ReservationContext.jsx";

const ReservationContent = () => {

    const {setPickupDate, pickupDate, setReturnDate, returnDate} = useReservation();


    const getNextDay = (date) => {
        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1);
        return nextDate.toISOString().split('T')[0];
    }

    return (
        <div className="w-[400px] md:w-[600px] h-[300px] p-10">
            <Input label="Pickup Date"
                   type="date"
                   className="rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md my-2"
                   value={pickupDate || ""}
                   onChange={(e) => setPickupDate(e.target.value)}
                   min={new Date().toISOString().split('T')[0]}
            />
            <Input label="Return Date"
                   type="date"
                   className="rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md my-2"
                   value={returnDate || ""}
                   onChange={(e) => setReturnDate(e.target.value)}
                   disabled={!pickupDate}
                   min={getNextDay(pickupDate)}
            />
        </div>
    );
};

export default ReservationContent;