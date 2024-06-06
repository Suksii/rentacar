import React from 'react';

const Select = ({data, label}) => {
    return (
        <div className="flex flex-col items-start gap-2">
            {label && label.length > 0 && <label className="text-xl">{label}</label>}
            <select className={`px-2 min-w-[240px] rounded-md outline-none text-xl uppercase tracking-wider font-semibold bg-gray-500 bg-opacity-50`}>
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