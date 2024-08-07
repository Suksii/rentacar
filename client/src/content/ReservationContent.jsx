import React, {useEffect, useState} from 'react';
import Input from "../components/Input.jsx";
import {useReservation} from "../context/ReservationContext.jsx";
import {differenceInCalendarDays} from "date-fns";
import axios from "axios";
import Button from "../components/Button.jsx";
import {useModal} from "../context/ModalContext.jsx";
import toast, {Toaster} from "react-hot-toast";

const ReservationContent = ({price, carId}) => {

    const {setPickupDate, pickupDate, setReturnDate, returnDate, setTotalPrice, totalPrice} = useReservation();
    const {closeModal} = useModal();
    const [errors, setErrors] = useState({});

    const getNextDay = (date) => {
        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1);
        return nextDate.toISOString().split('T')[0];
    }
    const totalDays = differenceInCalendarDays(new Date(returnDate), new Date(pickupDate));
    useEffect(() => {
        setTotalPrice(totalDays * price);
    }, [pickupDate, returnDate, price, setTotalPrice]);

    const addReservation = async () => {

        let errorMessages = [];

        if (!pickupDate) errorMessages.pickupDate = 'Pickup date is required';
        if (!returnDate) errorMessages.returnDate = 'Return date is required';

        if (Object.keys(errorMessages).length > 0) {
            setErrors(errorMessages);
            return;
        }

        try {
            await axios.post(`/reservations/add/${carId}`, {
                startDate: new Date(pickupDate).toISOString().split('T')[0],
                endDate: new Date(returnDate).toISOString().split('T')[0],
                rentalDate: new Date().toISOString().split('T')[0],
                totalPrice: totalPrice
            });
            closeModal();
            setPickupDate(null);
            setReturnDate(null);
            setTimeout(() => {
                toast.success('Reservation added successfully');
            }, 100);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="px-4 md:px-10">
            <Toaster containerStyle={{position: 'fixed', top: '80px', right: '10px'}}/>
            <div>
                <Input label="Pickup Date"
                       type="date"
                       className="rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md my-2 py-3"
                       value={pickupDate}
                       onChange={(e) => setPickupDate(e.target.value)}
                       min={new Date().toISOString().split('T')[0]}
                       required={true}
                />
                {errors?.pickupDate && <p className="ml-2 text-red-500 text-sm font-semibold">{errors?.pickupDate}</p>}
            </div>
            <div>
                <Input label="Return Date" py-3
                       type="date"
                       className="rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md my-2 py-3"
                       value={returnDate}
                       onChange={(e) => setReturnDate(e.target.value)}
                       disabled={!pickupDate}
                       min={getNextDay(pickupDate)}
                       required={true}
                />
                {errors?.returnDate && <p className="ml-2 text-red-500 text-sm font-semibold">{errors?.returnDate}</p>}
            </div>
            {pickupDate && returnDate &&
                <div className="flex justify-around">
                    <p className="py-2">Total days: <span className="text-xl font-semibold">{totalDays}</span></p>
                    <p className="py-2">Total price: <span className="text-xl font-semibold">{totalPrice}</span></p>
                </div>
            }
            <div className="flex justify-evenly w-full py-4">
                <Button label="Close"
                        onClick={() => {
                            closeModal();
                            setPickupDate(null);
                            setReturnDate(null);
                        }}
                        className="max-w-[120px] py-3 bg-gray-200 text-gray-900 font-semibold rounded-sm"
                />
                <Button label="Save"
                        onClick={addReservation}
                        className="max-w-[120px] py-3 bg-gray-900 text-gray-200 font-semibold rounded-sm"/>
            </div>
        </div>
    );
};

export default ReservationContent;