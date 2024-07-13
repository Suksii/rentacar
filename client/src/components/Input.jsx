import React from 'react';

const Input = ({label, type, placeholder, className, required, onChange, disabled, min, value, onKeyDown}) => {
    return (
        <div className="flex flex-col w-full">
            {label && label.length > 2 && <label className="text-xl text-gray-300">{label}</label>}
            <input type={type ? type : "text"}
                   placeholder={placeholder}
                   className={`py-2 px-4 outline-none text-xl placeholder-gray-800 text-gray-950 ${className}`}
                   required={required}
                   onChange={onChange}
                   disabled={disabled}
                   onKeyDown={onKeyDown}
                   value={value ? value : ""}
                   min={min ? min : null}
            />
        </div>
    );
};

export default Input;