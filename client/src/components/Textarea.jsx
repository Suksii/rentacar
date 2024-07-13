import React from 'react';

const Textarea = ({label, placeholder, className, required, onChange}) => {
    return (
        <div className="flex flex-col w-full">
            {label && label.length > 2 && <label className="text-xl text-gray-300">{label}</label>}
            <textarea placeholder={placeholder}
                      className={`py-3 px-4 outline-none text-xl placeholder-gray-800 min-h-[170px] text-gray-950 ${className}`}
                      required={required}
                      onChange={onChange}
            />
        </div>
    );
};

export default Textarea;