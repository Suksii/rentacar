import React, {useEffect} from 'react';
import Table from "../components/Table.jsx";
import {useReservation} from "../context/ReservationContext.jsx";
import {useModal} from "../context/ModalContext.jsx";
import Button from "../components/Button.jsx";
import RatingsContent from "../content/RatingsContent.jsx";

const Reservations = () => {

    const { fetchClientReservations, clientReservations } = useReservation();
    const {openModal} = useModal();


    const header = [
        { title: "Car", index: "car" },
        { title: "Rental Date", index: "rentalDate" },
        { title: "Pickup Date", index: "startDate" },
        { title: "Return Date", index: "endDate" },
        { title: "Price", index: "totalPrice" },
        { title: "Customer", index: "user" },
        {
            title: "Rate",
            index: null,
            render: (row) => (
                <div className="flex justify-center items-center">
                    <Button label={"Rate"}
                            className={""}
                            onClick={() => openModal({
                        title: `Rate ${row.car}`,
                        content: <RatingsContent />,
                        }
                    )} />
                </div>
            )
        },
        {
            title: "Status",
            index: "status",
            render: () => (
                <div className="px-2 py-1 rounded-full text-gray-900 bg-gray-300">
                    Pending...
                </div>
            )
        }
    ];

    useEffect(() => {
        fetchClientReservations();
        console.log(clientReservations);
    }, []);

    return (
        <div className="w-full flex justify-center items-center">
            <Table header={header} data={clientReservations}/>
        </div>
    );
};

export default Reservations;