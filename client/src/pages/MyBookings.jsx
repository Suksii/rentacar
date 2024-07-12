import React, {useEffect, useState} from 'react';
import Table from "../components/Table.jsx";
import {useReservation} from "../context/ReservationContext.jsx";
import {useModal} from "../context/ModalContext.jsx";
import Button from "../components/Button.jsx";
import RatingsContent from "../content/RatingsContent.jsx";
import axios from "axios";
import Loading from "../loading/Loading.jsx";
import Input from "../components/Input.jsx";

const Reservations = () => {

    const { fetchClientReservations, clientReservations, loading, setLoading } = useReservation();
    const [search, setSearch] = useState("");
    const [filteredReservations, setFilteredReservations] = useState([]);
    const {openModal} = useModal();

    const handleRate = async (rowId ,id, rate) => {
        setLoading(true);
        try {
            await axios.post(`/cars/${id}/rating`, { rate });
            fetchClientReservations();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const handleSearch = () => {
        const filtered = clientReservations.filter((reservation) => {
            return (
                reservation.car.toLowerCase().includes(search.toLowerCase()) ||
                reservation.user.toLowerCase().includes(search.toLowerCase()) ||
                reservation.rentalDate.toLowerCase().includes(search.toLowerCase()) ||
                reservation.startDate.toLowerCase().includes(search.toLowerCase()) ||
                reservation.endDate.toLowerCase().includes(search.toLowerCase()) ||
                reservation.totalPrice.toString().includes(search.toLowerCase())
            );
        });
        setFilteredReservations(filtered);
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
        <div className="w-full flex flex-col gap-10 justify-center items-center">
            <div className="flex gap-2">
                <Input placeholder="Search for a reservation"
                       className={"w-full border-2 border-gray-300 rounded-md"}
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                />
                <Button label={"Search"} onClick={handleSearch} className={"bg-blue-800 text-white rounded-md min-w-[120px]"} />
            </div>
            <Table header={header} data={filteredReservations.length > 0 ? filteredReservations : clientReservations} />
        </div>
    );
};

export default Reservations;