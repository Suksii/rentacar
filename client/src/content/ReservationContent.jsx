import React, {useEffect, useState} from 'react';
import Input from "../components/Input.jsx";

const ReservationContent = () => {

    const [pickupDate, setPickupDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);

    useEffect(() => {
        console.log(pickupDate, returnDate);
    }, [pickupDate, returnDate]);
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
                   onChange={(e) => setPickupDate(e.target.value)}
                   min={new Date().toISOString().split('T')[0]}
            />
            <Input label="Return Date"
                   type="date"
                   className="rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md my-2"
                   onChange={(e) => setReturnDate(e.target.value)}
                   disabled={!pickupDate}
                   min={getNextDay(pickupDate)}
            />
        </div>
    );
};

export default ReservationContent;