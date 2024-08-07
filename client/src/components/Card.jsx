import React from 'react';
import {AiFillStar} from "react-icons/ai";
import {FaCar, FaTrashAlt} from "react-icons/fa";
import { PiSeatbeltFill } from "react-icons/pi";
import {FaGear} from "react-icons/fa6";
import { BsFuelPumpDieselFill } from "react-icons/bs";
import Button from "./Button.jsx";
import CarContent from "../content/CarContent.jsx";
import {useModal} from "../context/ModalContext.jsx";
import ReservationContent from "../content/ReservationContent.jsx";
import axios from "axios";
import DeleteContent from "../content/DeleteContent.jsx";
import {useUser} from "../context/UserContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import {RiEdit2Line} from "react-icons/ri";
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

    const {openModal} = useModal();
    const {isAdmin, user } = useUser();
    const navigate = useNavigate();

    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <div className="flex flex-col shadow-xl min-w-[350px] max-w-[400px]">
            <div className="relative">
                <img src={`http://localhost:3000/uploads/` + srcImg}
                      className="w-full h-[300px] object-cover object-center"
                      alt={carModel}
                />
                <div className="w-full absolute bottom-0">
                    {isAdmin &&
                    <div className="flex justify-between">
                        <Link to={`/edit-car/${carID}`}
                              className="m-4 rounded-full bg-gray-600 flex items-center justify-center bg-opacity-60 cursor-pointer">
                            <RiEdit2Line size={30}
                                         title={"Edit"}
                                         onClick={scrollToTop}
                                         className="text-gray-100 m-3"
                            />
                        </Link>
                        <div className="m-4 rounded-full bg-gray-600 flex items-center justify-center bg-opacity-60 cursor-pointer "
                             onClick={() => openModal({
                            content: <DeleteContent />,
                            showFooter: true,
                            label: "Yes",
                            onSave: () => {
                                axios.delete(`/cars/delete/${carID}`)
                                    .then(() => {
                                        window.location.reload();
                                    })
                                    .catch(err => console.log(err));
                            }
                        })}>
                            <FaTrashAlt size={30}
                                     title={"Delete"}
                                     className="text-red-500 m-3"
                            />
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div className="flex justify-between items-center p-5">
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-end">
                        <h1 className="text-xl font-semibold uppercase">{carModel} - {carName}</h1>
                        <p className="text-gray-500">{year}</p>
                    </div>
                    <div className="flex justify-center items-center gap-1 px-3 py-1.5 rounded-full w-fit h-fit bg-gray-500">
                        <AiFillStar className="text-yellow-500"/>
                        <p className="text-white font-semibold">{rating}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl font-semibold uppercase">€{price}</p>
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
                    <Button label="Details"
                        className="bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 duration-500 min-w-[120px] py-3"
                        onClick={() => openModal({
                            content: <CarContent id={carID}/>,
                            showFooter: false,
                            className: "w-[70%] h-fit pb-10"
                        })}
                    />
                    <Button label="Rent"
                            className="bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 duration-500 min-w-[120px] py-3"
                            onClick={user ? () => openModal({
                                    title: `Book ${carName}`,
                                    content: <ReservationContent price={price} carId={carID}/>,
                                    showFooter: false,
                                    className: "w-[95%] md:w-[600px]",})
                                          : () => navigate("/login")
                            }
                    />
            </div>
        </div>
    );
};

export default Card;