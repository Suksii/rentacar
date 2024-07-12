import React from 'react';
import {IoIosClose} from "react-icons/io";
import Button from "./Button.jsx";
import ButtonSubmit from "./ButtonSubmit.jsx";

const Modal = ({title, content, onClose, onSave, showFooter, className, label}) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className={`relative bg-white rounded-lg flex flex-col ${className}`}>
                <IoIosClose className="absolute top-0 right-0 cursor-pointer" size={30} color={"gray"} onClick={onClose}/>
                <h1 className="text-2xl font-semibold py-4 text-center">{title && title.length > 0 && title}</h1>
                <div>
                    {content}
                </div>
                {showFooter &&
                <div className="flex justify-evenly pb-4 w-full">
                    <Button label="Close"
                            onClick={onClose}
                            className="min-w-[120px] py-3 bg-gray-200 text-gray-900 font-semibold rounded-sm"
                    />
                    <Button label={label}
                            type={"submit"}
                            onClick={onSave}
                            className="min-w-[120px] py-3 bg-gray-900 text-gray-200 font-semibold rounded-sm"/>
                </div>
                }
            </div>
        </div>
    );
};

export default Modal;