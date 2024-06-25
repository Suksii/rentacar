import React, {useEffect} from 'react';
import Table from "../components/Table.jsx";
import {useReservation} from "../context/ReservationContext.jsx";

const Reservations = () => {

    const { reservation, fetchReservations } = useReservation();

    const header = [
        { title: "Car", index: "car" },
        { title: "Return Date", index: "endDate" },
        { title: "Rental Date", index: "rentalDate" },
        { title: "Pickup Date", index: "startDate" },
        { title: "Price", index: "totalPrice" },
        { title: "Customer", index: "user" },
        // { title: "Status", index: "status" }
    ];

    useEffect(() => {
        fetchReservations();
    }, []);

    return (
        <div className="w-full flex justify-center items-center">
            <Table header={header} data={reservation}/>
        </div>
    );
};

export default Reservations;