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
            render: (car) => (
                <div className="text-center min-w-[120px]">
                    {car.approved === true
                        ? <p className="bg-green-400 rounded-full py-2">Approved</p>
                        : car.approved === false
                            ? <p className="bg-red-500 rounded-full py-2">Declined</p>
                            : <p className="bg-gray-400 rounded-full py-2">Pending...</p>}
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