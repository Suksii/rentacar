import React from 'react';

const Textarea = ({label, placeholder, className, required}) => {
    return (
        <div className="flex flex-col w-full">
            {label && label.length > 2 && <label className="text-xl">{label}</label>}
            <textarea placeholder={placeholder}
                      className={`py-3 px-4 m-2 outline-none text-xl placeholder-gray-500 ${className}`}
                      required={required}
            />
        </div>
    );
};

export default Textarea;