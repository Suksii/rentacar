import React from 'react';

const Select = ({data, label}) => {
    return (
        <div className="flex flex-col w-full">
            {label && label.length > 0 && <label className="text-xl">{label}</label>}
            <select className={`px-4 py-3 min-w-[240px] w-full rounded-sm outline-none text-xl tracking-wider font-semibold bg-gray-100 shadow-md`}>
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