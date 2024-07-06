import React, {useEffect} from 'react';
import Table from "../components/Table.jsx";
import {useReservation} from "../context/ReservationContext.jsx";
import Button from "../components/Button.jsx";

const Reservations = () => {

    const { fetchReservations, reservations } = useReservation();

    const header = [
        { title: "Car", index: "car" },
        { title: "Rental Date", index: "rentalDate" },
        { title: "Pickup Date", index: "startDate" },
        { title: "Return Date", index: "endDate" },
        { title: "Price", index: "totalPrice" },
        { title: "Customer", index: "user" },
        {
            title: "Status",
            index: "status",
            render: () => (
                <div className="flex items-center">
                    <p>Aprove?</p>
                    <Button label={"Yes"}
                            className={"bg-green-500"}
                            onClick={() => console.log("Yes")}
                    />
                    <Button label={"No"}
                            className={"bg-red-500"}
                            onClick={() => console.log("No")}
                    />
                </div>
            )
        }
    ];

    useEffect(() => {
        fetchReservations();
        console.log(reservations)
    }, []);

    return (
        <div className="w-full flex justify-center items-center">
            <Table header={header} data={reservations}/>
        </div>
    );
};

export default Reservations;