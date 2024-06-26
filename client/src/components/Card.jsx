import React from 'react';
import {AiFillStar} from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import { PiSeatbeltFill } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";
import { BsFuelPumpDieselFill } from "react-icons/bs";
import ButtonSubmit from "./ButtonSubmit.jsx";
import userButtons from "../hooks/useButtons.jsx";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
import CarContent from "../content/CarContent.jsx";
import {useModal} from "../context/ModalContext.jsx";
import ReservationContent from "../content/ReservationContent.jsx";
import {useReservation} from "../context/ReservationContext.jsx";
import axios from "axios";
const Card = ({
                    srcImg,
                    carModel,
                    carName,
                    rating,
                    price,
                    type,
                    seats,
                    gear,
                    fuel,
                    year,
                    carID
              }) => {

    const {pickupDate, returnDate, totalPrice} = useReservation();
    const {openModal} = useModal();

    return (
        <div className="flex flex-col shadow-xl min-w-[350px] max-w-[400px]">
            <img src={`http://localhost:3000/uploads/` + srcImg}
                  className="w-full h-[300px] object-cover object-center"
                  alt={carModel}
            />
            <div className="flex justify-between items-center p-5">
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-end">
                        <h1 className="text-xl font-semibold uppercase">{carModel} - {carName}</h1>
                        <p className="text-gray-500">{year}</p>
                    </div>
                    <div className="flex justify-center items-center gap-2 px-3 py-1.5 rounded-full w-fit h-fit bg-gray-500">
                        <AiFillStar className="text-yellow-500"/>
                        <p className="text-white">{rating}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl font-semibold uppercase">${price}</p>
                    <p>per day</p>
                </div>
            </div>
            <hr className="w-[90%] mx-auto"/>
            <div className="w-3/4 flex justify-between mx-auto py-5">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                        <PiSeatbeltFill size={22} />
                        <p>{seats} seats</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaGear size={22} />
                        <p>{gear}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                        <BsFuelPumpDieselFill size={22} />
                        <p>{fuel}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCar size={22}/>
                        <p>{type}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5 pb-4">
                {/*{buttons.map((button, index) => {*/}
                {/*    return <ButtonSubmit*/}
                {/*        key={index}*/}
                {/*        label={button.label}*/}
                {/*        className={button.className}*/}
                {/*        onClick={button.onClick}*/}
                {/*            />*/}
                {/*})*/}
                {/*}*/}
                <Button label="Details"
                        className="bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 duration-500"
                        onClick={() => openModal({
                            content: <CarContent id={carID}/>,
                            showFooter: false,
                            className: "w-[70%] h-[600px] pb-10"
                        })}
                />
                <Button label="Rent"
                        className="bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 duration-500"
                        onClick={() => openModal({
                            title: `Book ${carName}`,
                            content: <ReservationContent price={price} carId={carID}/>,
                            showFooter: false,
                            className: "w-[95%] md:w-[600px]",

                        })}
                />
            </div>

        </div>
    );
};

export default Card;