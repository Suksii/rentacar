import React, {useEffect, useState} from 'react';
import Table from "../components/Table.jsx";
import {useReservation} from "../context/ReservationContext.jsx";
import Button from "../components/Button.jsx";
import {useParams} from "react-router-dom";
import axios from "axios";
import Loading from "../loading/Loading.jsx";
import {comment} from "postcss";

const Reservations = () => {

    const { fetchReservations, reservations, loading } = useReservation();

    const handleApprove = async (id, approved) => {
        try {
            const response = await axios.post(`/reservations/${id}/approve`, { approved });
            const { data } = response;
            console.log(data);
            fetchReservations();
        } catch (error) {
            console.error(error);
        }
    }

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
            render: (reservation) => (
                <div className="flex items-center justify-center">
                    {reservation.approved === undefined ? (
                        <div className="flex items-center gap-2">
                            <Button
                                label={"Approve"}
                                className={"bg-green-500 py-2"}
                                onClick={() => handleApprove(reservation._id, true)}
                            />
                            <Button
                                label={"Decline"}
                                className={"bg-red-500 py-2"}
                                onClick={() => handleApprove(reservation._id, false)}
                            />
                        </div>
                    ) : (
                        <div className="rounded-full text-gray-900 uppercase font-semibold text-center min-w-[150px] mx-auto">
                            {reservation.approved ? <p className="bg-green-400 rounded-full py-2">Approved</p> : <p className="bg-red-500 rounded-full py-2">Declined</p>}
                        </div>
                    )}
                </div>
            )
        }
    ];

    useEffect(() => {
        fetchReservations();
        console.log(reservations)
    }, []);

    if (loading) return <Loading />;

    return (
        <div className="w-full flex justify-center items-center">
            <Table header={header} data={reservations}/>
        </div>
    );
};

export default Reservations;