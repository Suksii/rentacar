import React from 'react';
import Table from "../components/Table.jsx";

const Reservations = () => {

    const header = [
        { title: "Rental Date", index: "rentalDate" },
        { title: "Customer", index: "customer" },
        { title: "Car", index: "car" },
        { title: "Pickup Date", index: "pickupDate" },
        { title: "Return Date", index: "returnDate" },
        { title: "Price", index: "price" },
        { title: "Status", index: "status" }
    ];

    const data = [
        {
            id: 1,
            rentalDate: "2021-12-01",
            customer: "John Doe",
            car: "Mercedes-Benz",
            pickupDate: "2021-12-01",
            returnDate: "2021-12-10",
            price: 200,
            status: "Pending"
        },
        {
            id: 2,
            rentalDate: "2021-12-05",
            customer: "Jane Doe",
            car: "Audi",
            pickupDate: "2021-12-05",
            returnDate: "2021-12-15",
            price: 150,
            status: "Approved"
        },
        {
            id: 3,
            rentalDate: "2021-12-10",
            customer: "Michael Smith",
            car: "BMW",
            pickupDate: "2021-12-10",
            returnDate: "2021-12-20",
            price: 250,
            status: "Approved"
        }
    ];

    return (
        <div className="w-full flex justify-center items-center">
            <Table header={header} data={data}/>
        </div>
    );
};

export default Reservations;