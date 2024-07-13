import React, {useEffect, useState} from 'react';
import Table from "../components/Table.jsx";
import {useReservation} from "../context/ReservationContext.jsx";
import {useModal} from "../context/ModalContext.jsx";
import Button from "../components/Button.jsx";
import RatingsContent from "../content/RatingsContent.jsx";
import axios from "axios";
import Loading from "../loading/Loading.jsx";
import Input from "../components/Input.jsx";
import {BsStarFill} from "react-icons/bs";
import toast, {Toaster} from "react-hot-toast";

const Reservations = () => {

    const { fetchClientReservations, clientReservations, loading, setLoading, setClientReservations } = useReservation();
    const [search, setSearch] = useState("");
    const [filteredReservations, setFilteredReservations] = useState([]);
    const {openModal} = useModal();

    const handleRate = async (rowId, id, rate, isRated) => {
        setLoading(true);
        try {
            await axios.post(`/cars/${id}/rating`, { rate });
            await axios.put(`/reservations/${rowId}/rate`, { isRated, rating: rate});
            setClientReservations(prevReservations => prevReservations.map(reservation =>
                reservation._id === rowId
                    ? { ...reservation, isCarRated: true, rating: rate }
                    : reservation
            ));
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
        if (filtered.length === 0) {
            toast.error('No reservations found');
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
                reservation.approved &&
                // currentDate > new Date(reservation.endDate) &&
                !reservation.isCarRated ? (
                    <div className="flex justify-center items-center">
                        <Button
                            label="Rate"
                            className="bg-blue-800 text-white rounded-md"
                            onClick={() => openModal({
                                title: `Rate ${reservation.car}`,
                                content: (
                                    <RatingsContent setRating={(rate) => handleRate(reservation._id, reservation.carId, rate)} />
                                )
                            })}
                        />
                    </div>
                ) : (
                    <div className="text-center">
                        {reservation.isCarRated ? <div className="flex items-center gap-1 justify-center"><BsStarFill className="text-yellow-500 text-xl"/><span className="font-semibold">{reservation.rating}</span></div> : null}
                    </div>
                )
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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="w-full flex flex-col gap-10 justify-center items-center">
            <Toaster />
            <h1 className="text-3xl font-bold">My Bookings</h1>
            <div className="flex gap-2">
                <Input placeholder="Search for a reservation"
                       className={"w-full border-2 border-gray-300 rounded-md"}
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                       onKeyDown={handleKeyPress}
                />
                <Button label={"Search"}
                        onClick={handleSearch}
                        className={"bg-blue-800 text-white rounded-md min-w-[120px]"}
                />
            </div>
            <Table header={header} data={filteredReservations.length > 0 ? filteredReservations : clientReservations} />
        </div>
    );
};

export default Reservations;