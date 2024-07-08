import React, {useState} from 'react';
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";

const Select = ({options, label, selected, setSelected, className}) => {

    const [active, setActive] = useState(false)

    return (
        <div className="flex flex-col w-full">
            {label && label.length > 0 && <label className="text-xl">{label}</label>}
            <div className="relative">
                <div className={`flex justify-between items-center bg-gray-100 py-3 px-4 rounded-sm shadow-md text-xl font-semibold text-gray-500 ${className}`} onClick={() => setActive(!active)}>
                    {selected ? selected : "Choose one option"}
                    {active ? <IoMdArrowDropup /> : <IoMdArrowDropdown/>}
                </div>
                {active && <div className="absolute top-12 w-full bg-gray-100 rounded-sm shadow-md z-50 overflow-y-scroll max-h-[200px]">
                    {options.map((option, index) => {
                        return <p key={index}
                                  onClick={() => {
                                      setSelected(option)
                                      setActive(false)
                                  }}
                                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer text-lg font-semibold"
                        >
                            {option}
                        </p>
                    })}
                </div>}
            </div>
        </div>
    );
};

export default Select;