import React, {useState} from 'react';
import { CiStar } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import {useModal} from "../context/ModalContext.jsx";
const RatingsContent = ({setRating}) => {

    const [hoverIndex, setHoverIndex] = useState(-1);
    const {closeModal} = useModal();

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
        <div className="w-[400px] h-[100px]">
            <div className="flex justify-center gap-2 my-5">
                {
                    Array(5).fill().map((_, index) => (
                        <CiStar key={index}
                                size={30}
                                style={{transition: 'color 0.2s ease-in-out', cursor: 'pointer'}}
                                className={hoverIndex >= index ? 'text-yellow-500' : 'text-gray-300'}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={handleLeave}
                                onClick={() => handleRating(index)}
                        />
                    ))
                }
            </div>
        </div>

    );
};

export default RatingsContent;