import React from 'react';
import Input from "../components/Input.jsx";

const ReservationContent = () => {
    return (
        <div className="w-[400px] md:w-[600px] h-[300px] p-10">
            <Input label="Pickup Date" type="date" className="rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md my-2"/>
            <Input label="Return Date" type="date" className="rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md my-2"/>
        </div>
    );
};

export default ReservationContent;