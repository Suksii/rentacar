import React from 'react';

const Input = ({label, type, placeholder, className, required, onChange, disabled, min}) => {
    return (
        <div className="flex flex-col w-full">
            {label && label.length > 2 && <label className="text-xl">{label}</label>}
            <input type={type ? type : "text"}
                   placeholder={placeholder}
                   className={`py-3 px-4 outline-none text-xl placeholder-gray-500 ${className}`}
                   required={required}
                   onChange={onChange}
                   disabled={disabled}
                   min={min ? min : null}
            />
        </div>
    );
};

export default Input;