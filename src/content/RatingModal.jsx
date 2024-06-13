import React, {useState} from 'react';
import { CiStar } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import {useModal} from "../context/ModalContext.jsx";
const RatingModal = () => {

    const [hoverIndex, setHoverIndex] = useState(-1);
    const {closeModal} = useModal();
    const [rating, setRating] = useState(0);

    const handleHover = (index) => {
        setHoverIndex(index);
    }
    const handleLeave = () => {
        setHoverIndex(-1);
    }

    const handleRating = (index) => {
        const rate = index + 1;
        setRating(rate);
        closeModal();
    }

    return (

        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="relative bg-white w-[500px] h-[200px] rounded-lg flex flex-col justify-center items-center">
                <IoIosClose className="absolute top-0 right-0 cursor-pointer" size={30} color={"gray"} onClick={closeModal}/>
                <h1 className="text-3xl font-semibold">Rate your experience</h1>
                <div className="flex gap-2 mt-5">
                    {
                        Array(5).fill().map((_, index) => (
                            <CiStar key={index}
                                    size={30}
                                    className={hoverIndex >= index ? 'text-yellow-500' : 'text-gray-300'}
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={handleLeave}
                                    onClick={() => handleRating(index)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default RatingModal;