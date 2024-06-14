import React from 'react';
import {IoIosClose} from "react-icons/io";
import Button from "./Button.jsx";

const Modal = ({title, content, onClose, onSave, showFooter}) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="relative bg-white w-[500px] h-[200px] rounded-lg flex flex-col justify-center items-center">
                <IoIosClose className="absolute top-0 right-0 cursor-pointer" size={30} color={"gray"} onClick={() => onClose}/>
                <h1 className="text-3xl font-semibold">{title && title.length > 0 && title}</h1>
                <div>
                    {content}
                </div>
                {showFooter &&
                <div className="mt-5 flex justify-around">
                    <Button label="Close" onClick={() => onClose}/>
                    <Button label="Save" onClick={() => onSave}/>
                </div>}
            </div>
        </div>
    );
};

export default Modal;