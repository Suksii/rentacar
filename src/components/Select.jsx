import React from 'react';

const Select = ({data, label}) => {
    return (
        <div className="flex flex-col items-start gap-2">
            {label && label.length > 0 && <label className="text-xl">{label}</label>}
            <select className={`px-4 py-3 min-w-[240px] rounded-lg outline-none text-xl uppercase tracking-wider font-semibold bg-gray-100 shadow-md transition duration-200 ease-in-out`}>
                {data.map((item, index) => {
                    return <option key={index}
                                   value={item}>
                        {item}
                    </option>
                })}
            </select>
        </div>

    );
};

export default Select;