import React, {useEffect, useState} from 'react';
import {useModal} from "../context/ModalContext.jsx";
import ReservationContent from "../content/ReservationContent.jsx";
import axios from "axios";

const UseButtons = (isAdmin, onEdit, onDelete, onDetails) => {

    const [buttons, setButtons] = useState([]);
    const {openModal} = useModal();

    const handleSave = () => {
        console.log("Save")
    }

    const onRent = () => {
        openModal({
            title: "Book Car",
            content: <ReservationContent />,
            showFooter: true,
            onSave: handleSave
        });

    }

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
    }, [isAdmin, onEdit, onDelete, onDetails]);

    return buttons;
};

export default UseButtons;