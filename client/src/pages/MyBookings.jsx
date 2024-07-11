import React, {useEffect} from 'react';
import Table from "../components/Table.jsx";
import {useReservation} from "../context/ReservationContext.jsx";
import {useModal} from "../context/ModalContext.jsx";
import Button from "../components/Button.jsx";
import RatingsContent from "../content/RatingsContent.jsx";
import axios from "axios";
import loading from "../loading/Loading.jsx";
import Loading from "../loading/Loading.jsx";

const Reservations = () => {

    const { fetchClientReservations, clientReservations, loading } = useReservation();
    const {openModal} = useModal();

    const handleRate = async (rowId ,id, rate) => {
        try {
            await axios.post(`/cars/${id}/rating`, { rate });
            fetchClientReservations();
        } catch (error) {
            console.log(error);
        }
    }

        const currentDate = new Date();


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
            render: (reservation) => (
                reservation.approved && currentDate > new Date(reservation.endDate) ? (
                    <div className="flex justify-center items-center">
                        <Button
                            label="Rate"
                            className=""
                            onClick={() => openModal({
                                title: `Rate ${reservation.car}`,
                                content: (
                                    <RatingsContent
                                        setRating={(rate) => handleRate(reservation._id, reservation.carId, rate)}
                                    />
                                )
                            })}
                        />
                    </div>
                ) : null
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
    }, []);

    if (loading) return <Loading />;

    return (
        <div className="w-full flex justify-center items-center">
            <Table header={header} data={clientReservations}/>
        </div>
    );
};

export default Reservations;