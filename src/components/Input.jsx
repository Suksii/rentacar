import React from 'react';

const Input = ({label, type, placeholder, className, required}) => {
    return (
        <div className="flex flex-col w-full">
            {label && label.length > 2 && <label className="text-xl">{label}</label>}
            <input type={type ? type : "text"}
                   placeholder={placeholder}
                   className={`py-3 px-4 m-2 outline-none text-xl placeholder-gray-500 ${className}`}
                   required={required}
            />
        </div>
    );
};

export default Input;