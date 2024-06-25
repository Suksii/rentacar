import React, {useCallback, useEffect, useState} from 'react';
import {useModal} from "../context/ModalContext.jsx";
import {useReservation} from "../context/ReservationContext.jsx";
import ReservationContent from "../content/ReservationContent.jsx";
import axios from "axios";

const UseButtons = (isAdmin, carName, carId) => {

    const [buttons, setButtons] = useState([]);
    const {openModal} = useModal();
    const { pickupDate, returnDate, price, setPrice, reservation, setReservation} = useReservation();

    const handleReservation = useCallback(async () => {
        try {
            const response = await axios.post(`/reservations/add/${carId}`, {
                startDate: pickupDate,
                endDate: returnDate,
                rentalDate: new Date().toISOString().split('T')[0],
                totalPrice: price
                }
            );
                setReservation(response.data);
                console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [carName, pickupDate, returnDate]);

    const onDetails = () => {}
    const onEdit = () => {}
    const onDelete = () => {}


    const onRent = useCallback(() => {
        openModal({
            title: `Rent ${carName}`,
            content: <ReservationContent/>,
            showFooter: true,
            onSave: handleReservation
        });
    }, [openModal, handleReservation, carName]);

    useEffect(() => {
        if (isAdmin) {
            setButtons([
                {label: "Edit", className: "bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 duration-500", onClick: onEdit},
                {label: "Delete", className: "bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 duration-500", onClick: onDelete}
            ]);
        }
        else {
            setButtons([
                {label: "Details", className: "bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 duration-500", onClick: onDetails},
                {label: "Rent", className: "bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 duration-500", onClick: onRent}
            ])
        }
    }, [isAdmin, onRent]);

    return buttons;
};

export default UseButtons;