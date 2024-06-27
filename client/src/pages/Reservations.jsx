import React, {useEffect} from 'react';
import Table from "../components/Table.jsx";
import {useReservation} from "../context/ReservationContext.jsx";

const Reservations = () => {

    const { fetchClientReservations, clientReservations } = useReservation();

    const header = [
        { title: "Car", index: "car" },
        { title: "Rental Date", index: "rentalDate" },
        { title: "Pickup Date", index: "startDate" },
        { title: "Return Date", index: "endDate" },
        { title: "Price", index: "totalPrice" },
        { title: "Customer", index: "user" },
        // { title: "Status", index: "status" }
    ];

    useEffect(() => {
        fetchClientReservations();
        console.log(clientReservations)
    }, []);

    return (
        <div className="w-full flex justify-center items-center">
            <Table header={header} data={clientReservations}/>
        </div>
    );
};

export default Reservations;