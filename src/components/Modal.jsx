import React from 'react';
import {IoIosClose} from "react-icons/io";
import Button from "./Button.jsx";

const Modal = ({title, content, onClose, onSave, showFooter}) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className={`relative bg-white rounded-lg flex flex-col justify-center items-center`}>
                <IoIosClose className="absolute top-0 right-0 cursor-pointer" size={30} color={"gray"} onClick={onClose}/>
                <h1 className="text-3xl font-semibold py-4">{title && title.length > 0 && title}</h1>
                <div>
                    {content}
                </div>
                {showFooter &&
                <div className="flex justify-evenly pb-4 w-full">
                    <Button label="Close" onClick={onClose} className="max-w-[120px] bg-gray-200 text-gray-900 font-semibold rounded-sm"/>
                    <Button label="Save" onClick={onSave} className="max-w-[120px] bg-gray-900 text-gray-200 font-semibold rounded-sm"/>
                </div>}
            </div>
        </div>
    );
};

export default Modal;